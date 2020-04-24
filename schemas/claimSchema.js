const mongoose = require('mongoose');
const {Schema} = mongoose;

const claimSchema = new mongoose.Schema({
    name: String,
    address: String,
    number: Number,
    email: String,
    _user: {
        type: Schema.Types.ObjectID, ref: 'User'
    },
});

module.exports = claimSchema;
