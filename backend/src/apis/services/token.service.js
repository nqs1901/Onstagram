const jwt = require('jsonwebtoken')
const moment = require('moment')
const httpStatus = require('http-status')
const { Token } = require('../models')
const userService = require('./user.service')
const env = require('../../configs/env')
const ApiError = require('../../utils/api-error')
const { tokenTypes } = require('../../configs/tokens')

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add(env.passport.jwtAccessExpired / 60, 'minutes')
    const accessToken = generateToken(user.id, accessTokenExpires, tokenTypes.ACCESS)

    const refreshTokenExpires = moment().add(env.passport.jwtRefreshExpired / 60, 'minutes')
    const refreshToken = generateToken(user.id, refreshTokenExpires, tokenTypes.REFRESH)
    await saveToken(refreshToken, user.id, refreshTokenExpires, tokenTypes.REFRESH)

    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires.toDate(),
        },
        refresh: {
            token: refreshToken,
            expires: refreshTokenExpires.toDate(),
        },
    }
}

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
const generateToken = (userId, expires, type, secret = env.passport.jwtToken) => {
    const payload = {
        sub: userId,
        iat: moment().unix(),
        exp: expires.unix(),
        type,
    }
    return jwt.sign(payload, secret)
}

/**
 * Get a token by refresh token
 * @param {string} refreshToken
 * @param {boolean} isBlackListed
 * @returns {Promise<Token>}
 */
const getTokenByRefresh = async (refreshToken, isBlackListed) => {
    const refreshTokenDoc = await Token.findOne({
        token: refreshToken,
        type: tokenTypes.REFRESH,
        blacklisted: isBlackListed,
    })
    return refreshTokenDoc
}

/**
 * Save a token
 * @param {string} token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {boolean} [blacklisted]
 * @returns {Promise<Token>}
 */
const saveToken = async (token, userId, expires, type, blacklisted = false) => {
    const tokenDoc = await Token.create({
        token,
        user: userId,
        expires: expires.toDate(),
        type,
        blacklisted,
    })
    return tokenDoc
}

/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
const verifyToken = async (token, type) => {
    const payload = jwt.verify(token, env.passport.jwtToken)
    // console.log(payload)
    const tokenDoc = await Token.findOne({ token, type, user: payload.sub, blacklisted: false })
    if (!tokenDoc) {
        throw new Error('Token not found')
    }
    return tokenDoc
}

/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
const generateResetPasswordToken = async (email) => {
    const user = await userService.getUserByEmail(email)
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'No users found with this email')
    }
    const expires = moment().add(config.jwt.resetPasswordExpirationMinutes, 'minutes')
    const resetPasswordToken = generateToken(user.id, expires, tokenTypes.RESET_PASSWORD)
    await saveToken(resetPasswordToken, user.id, expires, tokenTypes.RESET_PASSWORD)
    return resetPasswordToken
}

/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
const generateVerifyEmailToken = async (user) => {
    const expires = moment().add(config.jwt.verifyEmailExpirationMinutes, 'minutes');
    const verifyEmailToken = generateToken(user.id, expires, tokenTypes.VERIFY_EMAIL);
    await saveToken(verifyEmailToken, user.id, expires, tokenTypes.VERIFY_EMAIL);
    return verifyEmailToken;
};

module.exports = {
    generateToken,
    saveToken,
    verifyToken,
    generateAuthTokens,
    generateResetPasswordToken,
    generateVerifyEmailToken,
}
