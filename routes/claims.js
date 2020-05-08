const mongoose = require('mongoose')
const claimSchema = require('../schemas/claimSchema');
const ClaimInfo = mongoose.model('ClaimInfo', claimSchema);
const claimNumberSchema = require('../schemas/claimNumberSchema');
const ClaimNumber = mongoose.model('ClaimNumber', claimNumberSchema)
const requireLogin = require('../middlewares/loginRequired');

module.exports = (app) => {
    app.post('/claims/initial', requireLogin, (req, res) => {
        ClaimNumber.findOne({myID: 'claimNumber'}, function (err, number) {
            if (err) {
                res.send(alert('something went wrong'))
                res.redirect('/')
            }
            if (number) {
                try {
                    const newClaim = new ClaimInfo({
                        _user: req.user.id,
                        _firstName: req.user.firstName,
                        _lastName: req.user.lastName,
                        claimNumber: number
                    })
                    newClaim.save();
                    res.redirect('/newclaim');
                } catch (err) {
                    res.send(err.message)
                }
            }

        })
    })

    app.post('/claims/new', requireLogin, (req, res) => {
        ClaimInfo.findOne({user: req.body.user}, function (err, user) {
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
        })
    });
}
