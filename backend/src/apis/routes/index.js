const express = require('express')

const authRoute = require('./v1/auth.route')
const userRoute = require('./v1/user.route')
const postRoute = require('./v1/post.route')
const commentRoute = require('./v1/comment.route')



const router = express.Router()

const defaultRoutes = [
    {
        path: '/v1/auth',
        route: authRoute,
    },
    {
        path: '/v1/users',
        route: userRoute,
    },
    {
        path: '/v1/posts',
        route: postRoute,
    },
    {
        path: '/v1/comments',
        route: commentRoute,
    },
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

module.exports = router
