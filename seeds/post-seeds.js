const {Post} = require('../models')

const postData = [
    {
        title: 'Crypto and securities, back of the postcard version',
        post_text: `Hello and welcome back to Equity, a podcast about the business of startups, where we unpack the numbers and nuance behind the headlines. Read more at https://techcrunch.com/2022/07/29/crypto-and-securities-coinbase-saga-continues/`,
        user_id: 3
    },
    {
        title: 'The Best Mobile Game Controllers',
        post_text: `Touchscreens don't always get the job done. Try one of these WIRED-tested smartphone controllers for your iPhone or Android instead. Read more at https://www.wired.com/gallery/best-mobile-game-controllers-for-iphone-android/`,
        user_id: 2
    },
    {
        title: `Apple's iPhone Is Powering Through the Slowing Economy`,
        post_text: `Google parent Alphabet and Facebook parent Meta have reported surprise drop-offs in online advertising spending. Read more at https://www.cnet.com/tech/mobile/apples-iphone-is-powering-through-the-slowing-economy/ ` ,
        user_id: 1
    },
    {
        title: `Twitter's new tests allow you to post images, videos and GIFs in one tweet`,
        post_text: 'Twitter is starting a new test that allows users to post images, videos and GIFs in one multimedia tweet. Read more at https://techcrunch.com/2022/07/29/twitters-new-tests-allows-you-to-post-images-videos-and-gifs-in-one-tweet/',
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts