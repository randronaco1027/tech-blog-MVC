const {Post} = require('../models')

const postData = [
    {
        title: 'Title 1',
        post_url: 'google.com',
        user_id: 3
    },
    {
        title: 'Title 2',
        post_url: 'facebook.com',
        user_id: 2
    },
    {
        title: 'Title 3',
        post_url: 'github.com',
        user_id: 1
    },
    {
        title: 'Title 4',
        post_url: 'youtube.com',
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts