const seedUsers = require('./user-seeds')
const seedComments = require('./comment-seeds')
const seedPosts = require('./post-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    console.log('Sequelize')

    await seedUsers()
    console.log('Users seeded')

    await seedPosts()
    console.log('Posts seeded')
    
    await seedComments()
    console.log('Comments seeded')

    process.exit(0)
}

seedAll()