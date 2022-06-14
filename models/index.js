const Comment = require('./Comment')
const User = require('./User')
const Post = require('./Post')

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
})

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
})

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "cascade"
})

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
})

module.exports = {User, Comment, Post}