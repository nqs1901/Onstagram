const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { Comment, Post, User } = require('../models')
const postService = require('./post.service')

/**
 * Create a user
 * @param {Object} commentBody
 * @returns {Promise<Comment>}
 */
const createComment = async (commentBody) => {
    return Comment.create(commentBody);
}

/**
 * Query for posts
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
 const queryComments = async (filter, options) => {
    const comments = await Comment
                            .sort('createdAt')
                            .exec(Comment.paginate(filter, options));
    return comments;
  };

/**
 * Get post by id
 * @param {String} id
 * @returns {Promise<Comment>}
 */
 const getCommentById = async (id) => {
    return Comment.findById(id)
}

/**
 * Delete comment
 * @param {String} commentId
 * @param {ObjectId} userId
 * @returns {Promise<Comment>}
 */
 const deleteCommentById = async (commentId,userId) => {
    const comment = await getCommentById(commentId);
    if (!comment || ! userId.equals(comment.user) ) {
      throw new ApiError(httpStatus.NOT_FOUND, 'comment not found');
    }
    await comment.remove();
    return comment;
  };

/**
 * Update post by id
 * @param {ObjectId} commentId
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Post>}
 */
 const updateCommentById = async (commentId,userId,updateBody) => {
    const comment = await getCommentById(commentId);
    if (!comment || ! userId.equals(comment.user)) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Comment not found');
    }
    Object.assign(comment, updateBody);
    await comment.save();
    return comment;
};

/**
 * Like post
 * @param {String} commentId
 * @param {ObjectId} userId
 * @returns {Promise<Post>}
 */
const likeComment = async (commentId,userId) => {
    const comment = await getCommentById(commentId);
    if (!comment) {
      throw new ApiError(httpStatus.NOT_FOUND, 'comment not found');
    }
    comment.likes.some(u => {return u.equals(userId)}) 
    ? commentUpdate = await Comment.findByIdAndUpdate({_id: commentId}, {$pull: {likes: userId}}, {new: true})
    : commentUpdate = await Comment.findByIdAndUpdate({_id: commentId}, {$push: {likes: userId}}, {new: true});
    return commentUpdate;
};


module.exports = {
    createComment,
    // queryComments,
    getCommentById,
    deleteCommentById,
    updateCommentById,
    likeComment
}
