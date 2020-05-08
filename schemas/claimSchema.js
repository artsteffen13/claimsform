const mongoose = require('mongoose');
const {Schema} = mongoose;

const claimSchema = new mongoose.Schema({
    claimNumber: String,
    _user: {
        type: Schema.Types.ObjectID, ref: 'User'
    },
    _firstName: {
        type: Schema.Types.ObjectID, ref: 'User'
    },
    _lastName: {
        type: Schema.Types.ObjectID, ref: 'User'
    },
    name: String,
    address: String,
    number: Number,
    email: String,
});

module.exports = claimSchema;
