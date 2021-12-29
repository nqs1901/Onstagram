const mongoose = require('mongoose')
const validator = require('validator')

const {toJSON, paginate} = require('./plugins')

const postSchema = mongoose.Schema(
    {
        content: {
            type: String,
            default: ''
        },
        images: {
            type: Array,
            required: true
        },
        likes: [{
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }],
        comments: [{
            type: mongoose.Types.ObjectId,
            ref: 'comment'
        }],
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    },
    {
        timestamps: true
    }
)

postSchema.plugin(toJSON);
postSchema.plugin(paginate);
/**
 * @typedef Post
 */

const Post = mongoose.model('post', postSchema)

module.exports = Post