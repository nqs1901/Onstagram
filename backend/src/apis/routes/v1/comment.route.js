const express = require('express')
const auth = require('../../../middlewares/auth');
const { commentController } = require('../../controllers')
const { commentValidation } = require('../../validations')

const validate = require('../../../middlewares/validate')

const router = express.Router()

router
    .route('')
    .post(auth(), commentController.createComment)
    // .get(auth(),validate(postValidation.getPostsSchema), postController.getPosts)

router
    .route('/:id')
    .delete(auth(), commentController.deleteComment)

router.patch('/like/:id',auth(), commentController.likeComment)


module.exports = router

