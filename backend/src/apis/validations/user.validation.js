const Joi = require('joi')


const createPostSchema = {
    body: Joi.object().keys({
        content: Joi.string().required(),
        images: Joi.array().length(min=1).required(),
        likes: Joi.array(),
        user: Joi.object()
    }),
}

const getPostsSchema = {
    query: Joi.object().keys({
        name: Joi.string(),
        role: Joi.string(),
        sortBy: Joi.string(),
        limit: Joi.number().integer(),
        page: Joi.number().integer(),
    }),
};

const getPostSchema = {
    params: Joi.object().keys({
      id: Joi.string(),
    }),
};

const deletePostSchema = {
    params: Joi.object().keys({
      id: Joi.string(),
    }),
};

const updatePostSchema = {
    params: Joi.object().keys({
      id: Joi.string(),
    }),
    body: Joi.object()
      .keys({
        content: Joi.string(),
        images: Joi.array().length(min=1),
      })
      .min(1),
  };

module.exports = {
    createPostSchema,
    getPostsSchema,
    getPostSchema,
    deletePostSchema,
    updatePostSchema
}
