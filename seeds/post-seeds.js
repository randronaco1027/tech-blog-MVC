const {Post} = require('../models')

const postData = [
    {
        title: 'Title 1',
        post_text: 'Test 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 3
    },
    {
        title: 'Title 2',
        post_text: 'Test 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2
    },
    {
        title: 'Title 3',
        post_text: 'Test 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1
    },
    {
        title: 'Title 4',
        post_text: 'Test 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts