const mongoose = require('mongoose');

const claimNumberSchema = new mongoose.Schema({
    claimNumber: String,
    myID: String
});

module.exports = claimNumberSchema;
