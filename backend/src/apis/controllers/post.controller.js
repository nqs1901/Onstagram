const httpStatus = require('http-status')
const pick = require('../../utils/pick-keys')
const ApiError = require('../../utils/api-error');
const catchAsync = require('../../utils/catch-async')
const {postService} = require('../services')

const createPost = catchAsync(async (req,res) => {
    const {content, images} = req.body
    const newPost = {content, images, user: req.user._id}
    await postService.createPost(newPost)
    res.status(httpStatus.CREATED).send({...newPost,user:req.user})
})

const getPosts = catchAsync(async (req,res) =>{
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const usersFollowing = {user: [...req.user.followings]}
    const result = await postService.queryPosts(filter,options,usersFollowing);
    res.send({result});
})

const getPost = catchAsync(async (req,res) =>{
    const post = await postService.getPostById(req.params.id);
    const postCanView =  [...req.user.following,req.user._id]
    if(!post || !postCanView.some(u =>  {return u.equals(post.user)})){
        throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    }
    res.send(post);
})

const deletePost = catchAsync(async(req,res) =>{
    const post = await postService.deletePostById(req.params.id,req.user._id);
    res.status(httpStatus.NO_CONTENT).send(post);
})

const updatePost = catchAsync(async(req,res) =>{
    const post = await postService.updatePostById(req.params.id,req.user._id, req.body);
    res.send(post);
})

const likePost = catchAsync(async(req,res) =>{
    const post = await postService.likePost(req.params.id,req.user._id);
    res.send(post);
})



module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost,
    likePost
}