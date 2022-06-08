const { User } = require('../models')

const userData = [
    {
        username: 'user1',
        email: 'email1@com',
        password: 'password1'
    },
    {
        username: 'user2',
        email: 'email2@com',
        password: 'password2'
    },
    {
        username: 'user3',
        email: 'email3@com',
        password: 'password3'
    },
    {
        username: 'user4',
        email: 'email4@com',
        password: 'password4'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers