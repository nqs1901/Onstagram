const express = require('express')

const { authController } = require('../../controllers')
const { authValidation } = require('../../validations')

const validate = require('../../../middlewares/validate')

const router = express.Router()

router.post('/register', validate(authValidation.registerSchema), authController.register)
router.post('/login', validate(authValidation.loginSchema), authController.login)
router.post('/logout', validate(authValidation.logoutSchema), authController.logout)
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);

module.exports = router

