const httpStatus = require('http-status')
const pick = require('../../utils/pick-keys')
const ApiError = require('../../utils/api-error');
const catchAsync = require('../../utils/catch-async')
const {postService, commentService} = require('../services')

const createComment = catchAsync(async (req,res) => {
    const {content, postId} = req.body
    const post = await postService.getPostById(postId);
    if(!post){
        throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    const newComment = await commentService.createComment({content,postId, user: req.user._id});
    const newPost =await postService.addComment(postId,newComment._id);
    res.status(httpStatus.CREATED).send({newComment,newPost})
})



const getPost = catchAsync(async (req,res) =>{
    const post = await postService.getPostById(req.params.id);
    const postCanView =  [...req.user.following,req.user._id]
    if(!post || !postCanView.some(u =>  {return u.equals(post.user)})){
        throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    res.send(post);
})

const deleteComment = catchAsync(async(req,res) =>{
    const comment = await commentService.deleteCommentById(req.params.id,req.user._id);
    const post = await postService.deleteComment(comment.postId,req.params.id)
    res.status(httpStatus.NO_CONTENT).send(comment);
})

const updatePost = catchAsync(async(req,res) =>{
    const post = await postService.updatePostById(req.params.id,req.user._id, req.body);
    res.send(post);
})

const likeComment = catchAsync(async(req,res) =>{
    const comment = await commentService.likeComment(req.params.id,req.user._id);
    res.send(comment);
})



module.exports = {
    createComment,
    deleteComment,
    likeComment
}