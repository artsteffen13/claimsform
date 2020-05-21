const mongoose = require('mongoose');

const claimNumberSchema = new mongoose.Schema({
    claimNumber: Number,
    myID: String
});

module.exports = mongoose.model('ClaimNumber', claimNumberSchema);
