const express = require('express')
const auth = require('../../../middlewares/auth');
const {userController} = require('../../controllers')
const {userValidation} = require('../../validations')

const validate = require('../../../middlewares/validate')

const router = express.Router()

router
    .route('/follow/:id')
    .post(auth(), userController.followUser)

module.exports = router




