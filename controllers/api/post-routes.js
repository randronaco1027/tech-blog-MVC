const router = require('express').Router()
const {Post, User} = require('../../models')

router.get('/', (req, res) => {
    Post.findAll({
        include: {
            model: User,
            attributes: ['id', 'username', 'password']
        }
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: User,
            attributes: ['id', 'username', 'password']
        }
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
    }) 
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_text: req.body.post_text,
        user_id: req.body.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
    }) 
})

router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            post_text: req.body.post_text
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
    }) 
})

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => res.json(postData))
    .catch(err => {
        console.log(err)
    }) 
})

module.exports = router