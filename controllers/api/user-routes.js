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
        where: {
            id: req.params.id
        },
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
        password: req.body.password,
        email: req.body.email
    })
    .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.email = dbUserData.email;
          req.session.loggedIn = true;
  
          res.json(dbUserData);
        });
      })
    .catch(err => {
        console.log(err)
    }) 
})

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
});

module.exports = router