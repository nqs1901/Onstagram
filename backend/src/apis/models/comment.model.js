const mongoose = require('mongoose')
const validator = require('validator')

const {toJSON, paginate} = require('./plugins')

const commentSchema = mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        likes: [{
            type:  mongoose.Types.ObjectId,
            ref: 'user'
        }],
        user: {
            type:  mongoose.Types.ObjectId,
            ref: 'user'
        },
        postId: {
            type:   mongoose.Types.ObjectId,
        },
        tag: {
            type: Object
        }
    },
    {
        timestamps: true
    }
)

commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);
/**
 * @typedef Comment
 */

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment