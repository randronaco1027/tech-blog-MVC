const {Post} = require('../models')

const postData = [
    {
        title: 'Analogue releases video game from 1962 on the Pocket',
        post_text: `The world's first video game is coming to an Analogue Pocket near you. Today, Analogue announced that it's launching Spacewar!, a game originally designed for the PDP-1 minicomputer that predates Pong by a full decade, on the Pocket as a part of its larger strategy to bring pioneering video games into the modern era. Read more at https://www.theverge.com/2022/7/29/23282660/analogue-pocket-spacewar-1962`,
        user_id: 3
    },
    {
        title: 'The Best Mobile Game Controllers',
        post_text: `Touchscreens don't always get the job done. Try one of these WIRED-tested smartphone controllers for your iPhone or Android instead. Read more at https://www.wired.com/gallery/best-mobile-game-controllers-for-iphone-android/`,
        user_id: 2
    },
    {
        title: `Apple's iPhone Is Powering Through the Slowing Economy`,
        post_text: `Over the past week, many of tech's biggest names have sounded alarms about the economy. Google parent Alphabet and Facebook parent Meta have reported surprise drop-offs in online advertising spending. And Intel shocked investors with a 22% drop in sales, its biggest revenue drop in more than a decade. Read more at https://www.cnet.com/tech/mobile/apples-iphone-is-powering-through-the-slowing-economy/ ` ,
        user_id: 1
    },
    {
        title: `Twitter's new tests allow you to post images, videos and GIFs in one tweet`,
        post_text: 'Twitter is starting a new test that allows users to post images, videos and GIFs in one multimedia tweet. Until now, users could post only one form of media per tweet. But this new format will shake things up and let people combine multiple formats in one tweet. Read more at https://techcrunch.com/2022/07/29/twitters-new-tests-allows-you-to-post-images-videos-and-gifs-in-one-tweet/',
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts