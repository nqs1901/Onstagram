const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { User } = require('../models')

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
    if (await User.isEmailTaken(userBody.email)) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken')
    }
    return User.create(userBody)
}

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
    return User.findById(id)
}

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
    return User.findOne({ email })
}

const updateUserById = async (userId, updateBody) => {
    const user = await getUserById(userId);
    if(!user){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    Object.assign(user, updateBody);
    await user.save();
    return user;
}   

const followUser = async (userId, userFollowId) => {
    const user = await getUserById(userId);
    const userFollow = await getUserById(userFollowId);
    if(!user || !userFollow){
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    } 

    userFollow.followers.some(u => {return u.equals(userId)}) 
    ? (userUpdate = await User.findByIdAndUpdate({_id: userId}, {$pull: {followings: userFollowId}}, {new: true}),
        await User.findByIdAndUpdate({_id: userFollowId}, {$pull: {followers: userId}}, {new: true}))
    : (userUpdate = await User.findByIdAndUpdate({_id: userId}, {$push: {followings: userFollowId}}, {new: true}),
        await User.findByIdAndUpdate({_id: userFollowId}, {$push: {followers: userId}}, {new: true}))
    return userUpdate;
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    updateUserById,
    followUser
}
