const mongoose = require('mongoose');

const Users = mongoose.Schema({
    name: String,
    age: Number,
})

module.exports =mongoose.models.User || mongoose.model('User', Users);