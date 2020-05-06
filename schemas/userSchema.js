const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = userSchema;
