const mongoose = require('mongoose')
const claimSchema = require('../schemas/claimSchema');
const ClaimInfo = mongoose.model('ClaimInfo', claimSchema);
const requireLogin = require('../middlewares/loginRequired');

module.exports = (app) => {
    app.post('/claims/new', requireLogin, (req, res) => {
        console.log(req.user)
        try {
            const newClaim = new ClaimInfo({
                name: req.body.name,
                address: req.body.address,
                number: req.body.number,
                email: req.body.email,
                _user: req.user.id
            })
            newClaim.save();
            res.send('Success');
        } catch (error) {
            res.send(error.message);
        }
    });
}
