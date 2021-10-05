const express = require('express')
const auth = require('../../../middlewares/auth');
const { postController } = require('../../controllers')
const { postValidation } = require('../../validations')

const validate = require('../../../middlewares/validate')

const router = express.Router()

router
    .route('')
    .post(auth(),validate(postValidation.createPostSchema), postController.createPost)
    .get(auth(),validate(postValidation.getPostsSchema), postController.getPosts)

router
    .route('/:id')
    .get(auth(),validate(postValidation.getPostSchema), postController.getPost)
    .delete(auth(), validate(postValidation.deletePostSchema), postController.deletePost)
    .patch(auth(), validate(postValidation.updatePostSchema), postController.updatePost)

module.exports = router

