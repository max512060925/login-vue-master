const mongoose = require('mongoose')
const config = require('config-lite')

// mongodb
mongoose.connect(config.mongodb, {
        useMongoClient: true
    })
    // node.js - Mongoose: mpromise
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function() {
    console.log('Mongodb started successfully')
})


var userSchema = mongoose.Schema({
    email: String,
    password: String,
    recheck: String,
    token: String,
    create_time: Date
})

var model = {
    //model
    // Article: mongoose.model('Article', articleSchema),
    User: mongoose.model('User', userSchema)
}

module.exports = model