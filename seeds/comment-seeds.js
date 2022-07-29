const {Comment} = require('../models')

const commentData = [
    {
        comment_text: 'perfect for candy crush!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'glad i kept my blackberry',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'still using a palm pilot',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'love this!',
        user_id: 2,
        post_id: 4
    },
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments