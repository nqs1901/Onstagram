const httpStatus = require('http-status')

const ApiError = require('../../utils/api-error')
const { Post } = require('../models')

/**
 * Create a user
 * @param {Object} postBody
 * @returns {Promise<Post>}
 */
const createPost = async (postBody) => {
    return Post.create(postBody)
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
 const queryPosts = async (filter, options, usersFollowing) => {
    const posts = await Post
                            .find(usersFollowing)
                            .sort('createdAt')
                            .exec(Post.paginate(filter, options));
    return posts;
  };

/**
 * Get post by id
 * @param {String} id
 * @returns {Promise<Post>}
 */
 const getPostById = async (id) => {
    return Post.findById(id)
}

/**
 * Delete post
 * @param {String} postId
 * @param {ObjectId} userId
 * @returns {Promise<Post>}
 */
 const deletePostById = async (postId,userId) => {
    const post = await getPostById(postId);
    if (!post || ! userId.equals(post.user) ) {
      throw new ApiError(httpStatus.NOT_FOUND, 'post not found');
    }
    await post.remove();
    return post;
  };

/**
 * Update post by id
 * @param {ObjectId} postId
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Post>}
 */
 const updatePostById = async (postId,userId,updateBody) => {
  const post = await getPostById(postId);
  if (!post || ! userId.equals(post.user)) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  Object.assign(post, updateBody);
  await post.save();
  return post;
};


module.exports = {
    createPost,
    queryPosts,
    getPostById,
    deletePostById,
    updatePostById
}
