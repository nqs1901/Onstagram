const httpStatus = require('http-status')
const pick = require('../../utils/pick-keys')
const ApiError = require('../../utils/api-error');
const catchAsync = require('../../utils/catch-async')
const { userService } = require('../services')

const createUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body)
    res.status(httpStatus.CREATED).send(user)
})

const getUser = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.userId)
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User not found')
    }
    res.send(user)
})

const updateUser = catchAsync(async (req, res) => {
    const user = await userService.updateUserById(req.params.userId, req.body)
    res.send(user)
})

module.exports = {
    createUser,
    getUser,
    updateUser,
}
