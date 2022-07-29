const { User } = require('../models')

const userData = [
    {
        username: 'emusk',
        email: 'emusk@tesla.com',
        password: 'password1'
    },
    {
        username: 'virtualzuck',
        email: 'zuckerberg@meta.com',
        password: 'password2'
    },
    {
        username: 'j-dorsey',
        email: 'dorsey@twitter.com',
        password: 'password3'
    },
    {
        username: 'rhendricks',
        email: 'hendricks@piedpiper.com',
        password: 'password4'
    },
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers