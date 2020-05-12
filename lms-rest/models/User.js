const mongo = require('mongoose');

const userSchema = mongo.Schema({
    name: {
        type: String
    },
    type: {
        type: String,
        require: true
    },
    emailId: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongo.model('users', userSchema);