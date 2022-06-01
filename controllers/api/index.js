const router = require('express').Router()

// const userRoutes = require('../api/user-routes')
// const commentRoutes = require('../api/comment-routes')
const postRoutes = require('./post-routes')

// router.use('/user',userRoutes)
// router.use('/comment', commentRoutes)
router.use('/post', postRoutes)

module.exports = router