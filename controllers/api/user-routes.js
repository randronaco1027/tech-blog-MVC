const router = require('express').Router()
const {User, Post, Comment} = require('../../models')

router.get('/', (req, res) => {
    User.findAll({
        include: [{
            model: Post,
            attributes: ['id', 'title', 'post_text']
        },
        {
            model: Comment,
            attributes: ['id','comment_text']
        }]
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    User.findOne({
        include: [{
            model: Post,
            attributes: ['id', 'title', 'post_text']
        },
        {
            model: Comment,
            attributes: ['id','comment_text']
        }]
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err)
    }) 
})

module.exports = router