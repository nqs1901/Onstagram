const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const { toJSON, paginate } = require('./plugins')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            maxlength: 25,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid email')
                }
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 6,
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error('Password must contain at least one letter and one number')
                }
            },
            private: true,
        },
        // fullname: {
        //     type: String,
        //     required: true,
        //     trim: true,
        //     maxlength: 25
        // },
        avatar:{
            type: String,
            default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
        },
        role: {
            type: String, 
            default: 'user'
        },
        mobile: {
            type: String, 
            default: ''
        },
        followers: [{
            type: mongoose.Types.ObjectId, 
            ref: 'user'
        }],
        following: [{
            type: mongoose.Types.ObjectId, 
            ref: 'user'
        }],
        saved: [{
            type: mongoose.Types.ObjectId, 
            ref: 'user'
        }],
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.plugin(toJSON)
userSchema.plugin(paginate)

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } })
    return !!user
}

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
userSchema.methods.isPasswordMatch = async function (password) {
    const user = this
    return bcrypt.compare(password, user.password)
}

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10)
    }
    next()
})

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema)

module.exports = User