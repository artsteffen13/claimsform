const requireLogin = require('../middlewares/loginRequired');

const ClaimInfo = require('../schemas/claimSchema');
const ClaimNumber = require('../schemas/claimNumberSchema');

module.exports = (app) => {
    app.post('/claims/initial', requireLogin, (req, res) => {
        ClaimNumber.findOne({myID: 'claimNumber'}, function (err, number) {
            if (err) {
                res.send(alert('something went wrong'));
            }
            if (number) {
                try {
                    const newClaim = new ClaimInfo({
                        firstName: req.user.firstName,
                        lastName: req.user.lastName,
                        claimNumber: number.claimNumber,
                        reportedOn: new Date(),
                        selectedDate: req.body.selectedDate,
                        driverValues: {
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            injured: '',
                            injuryType: '',
                            streetAddress: '',
                            city: '',
                            state: '',
                            zipcode: '',
                            alternateContact: '',
                            altContactPhoneNumber: '',
                            altContactEmail: ''
                        },
                        vehicleValues: {
                            year: '',
                            make: '',
                            model: '',
                            color: '',
                            plate: '',
                            drivable: '',
                            safeToDrive: '',
                            lightsWork: '',
                            airbags: '',
                            vehicleTowed: '',
                            towLocationName: '',
                            towStreetAddress: '',
                            towCity: '',
                            towState: '',
                            towZipcode: '',
                            towPhoneNumber: ''
                        },
                        accidentValues: {
                            accidentDetails: '',
                            accidentStreet: '',
                            accidentCity: '',
                            accidentState: '',
                            mobileDevice: '',
                            handsFree: '',
                            seatBelt: '',
                            passengers: '',
                            howManyPassengers: '',
                            passengersInjured: '',
                            howManyPassengersInjured: '',
                            weather: '',
                            damagePhotos: '',
                            scenePhotos: '',
                            atFault: ''
                        },
                        thirdPartyValues: {
                            thirdPartyInvolved: '',
                            firstName: '',
                            lastName: '',
                            phoneNumber: '',
                            email: '',
                            injured: '',
                            injuryType: '',
                            streetAddress: '',
                            city: '',
                            state: '',
                            zipcode: '',
                            year: '',
                            make: '',
                            model: '',
                            color: '',
                            plate: '',
                            damagePhotos: '',
                            drivable: '',
                            ownerSameAsDriver: '',
                            ownerFirstName: '',
                            ownerLastName: '',
                            ownerPhoneNumber: '',
                            ownerEmail: '',
                            ownerStreetAddress: '',
                            ownerCity: '',
                            ownerState: '',
                            ownerZipcode: ''
                        },
                        policeValues: {
                            policeContacted: '',
                            policeDepartmentName: '',
                            policeReportNumber: '',
                            policePhoneNumber: '',
                            wereCitationsIssued: '',
                            whoReceivedCitation: ''
                        },
                        repairShopValues: {
                            vehicleDamaged: '',
                            repairShopName: '',
                            repairShopPhoneNumber: '',
                            repairShopStreetAddress: '',
                            repairShopCity: '',
                            repairShopState: '',
                            repairShopZipcode: ''
                        }
                    })
                    newClaim.save();
                    ClaimNumber.updateOne({myID: "claimNumber"}, {$set: {claimNumber: number.claimNumber + 1}}).exec();
                } catch (err) {
                    res.send(err.message)
                }
            }
            res.send(number);
        });
    });

    app.post('/claims/new', requireLogin, (req, res) => {
        const driverValues = req.body.driverValues;
        const vehicleValues = req.body.vehicleValues;
        const accidentValues = req.body.accidentValues;
        const thirdPartyValues = req.body.thirdPartyValues;
        const policeValues = req.body.policeValues;
        const repairShopValues = req.body.repairShopValues;
        ClaimInfo.updateOne({claimNumber: req.body.claimID}, {
            $set: {
                selectedDate: req.body.selectedDate,
                driverValues: {
                    firstName: driverValues.firstName,
                    lastName: driverValues.lastName,
                    phoneNumber: driverValues.phoneNumber,
                    email: driverValues.email,
                    injured: driverValues.injured,
                    injuryType: driverValues.injuryType,
                    streetAddress: driverValues.streetAddress,
                    city: driverValues.city,
                    state: driverValues.state,
                    zipcode: driverValues.zipcode,
                    alternateContact: driverValues.alternateContact,
                    altContactPhoneNumber: driverValues.altContactPhoneNumber,
                    altContactEmail: driverValues.altContactEmail
                },
                vehicleValues: {
                    year: vehicleValues.year,
                    make: vehicleValues.make,
                    model: vehicleValues.model,
                    color: vehicleValues.color,
                    plate: vehicleValues.plate,
                    drivable: vehicleValues.drivable,
                    safeToDrive: vehicleValues.safeToDrive,
                    lightsWork: vehicleValues.lightsWork,
                    airbags: vehicleValues.airbags,
                    vehicleTowed: vehicleValues.vehicleTowed,
                    towLocationName: vehicleValues.towLocationName,
                    towStreetAddress: vehicleValues.towStreetAddress,
                    towCity: vehicleValues.towCity,
                    towState: vehicleValues.towState,
                    towZipcode: vehicleValues.towZipcode,
                    towPhoneNumber: vehicleValues.towPhoneNumber
                },
                accidentValues: {
                    accidentDetails: accidentValues.accidentDetails,
                    accidentStreet: accidentValues.accidentStreet,
                    accidentCity: accidentValues.accidentCity,
                    accidentState: accidentValues.accidentState,
                    mobileDevice: accidentValues.mobileDevice,
                    handsFree: accidentValues.handsFree,
                    seatBelt: accidentValues.seatBelt,
                    passengers: accidentValues.passengers,
                    howManyPassengers: accidentValues.howManyPassengers,
                    passengersInjured: accidentValues.passengersInjured,
                    howManyPassengersInjured: accidentValues.howManyPassengersInjured,
                    weather: accidentValues.weather,
                    damagePhotos: accidentValues.damagePhotos,
                    scenePhotos: accidentValues.scenePhotos,
                    atFault: accidentValues.atFault
                },
                thirdPartyValues: {
                    thirdPartyInvolved: thirdPartyValues.thirdPartyInvolved,
                    firstName: thirdPartyValues.firstName,
                    lastName: thirdPartyValues.lastName,
                    phoneNumber: thirdPartyValues.phoneNumber,
                    email: thirdPartyValues.email,
                    injured: thirdPartyValues.injured,
                    injuryType: thirdPartyValues.injuryType,
                    streetAddress: thirdPartyValues.streetAddress,
                    city: thirdPartyValues.city,
                    state: thirdPartyValues.state,
                    zipcode: thirdPartyValues.zipcode,
                    year: thirdPartyValues.year,
                    make: thirdPartyValues.make,
                    model: thirdPartyValues.model,
                    color: thirdPartyValues.color,
                    plate: thirdPartyValues.plate,
                    damagePhotos: thirdPartyValues.damagePhotos,
                    drivable: thirdPartyValues.drivable,
                    ownerSameAsDriver: thirdPartyValues.ownerSameAsDriver,
                    ownerFirstName: thirdPartyValues.ownerFirstName,
                    ownerLastName: thirdPartyValues.ownerLastName,
                    ownerPhoneNumber: thirdPartyValues.ownerPhoneNumber,
                    ownerEmail: thirdPartyValues.ownerEmail,
                    ownerStreetAddress: thirdPartyValues.ownerStreetAddress,
                    ownerCity: thirdPartyValues.ownerCity,
                    ownerState: thirdPartyValues.ownerState,
                    ownerZipcode: thirdPartyValues.ownerZipcode
                },
                policeValues: {
                    policeContacted: policeValues.policeContacted,
                    policeDepartmentName: policeValues.policeDepartmentName,
                    policeReportNumber: policeValues.policeReportNumber,
                    policePhoneNumber: policeValues.policePhoneNumber,
                    wereCitationsIssued: policeValues.wereCitationsIssued,
                    whoReceivedCitation: policeValues.whoReceivedCitation
                },
                repairShopValues: {
                    vehicleDamaged: repairShopValues.vehicleDamaged,
                    repairShopName: repairShopValues.repairShopName,
                    repairShopPhoneNumber: repairShopValues.repairShopPhoneNumber,
                    repairShopStreetAddress: repairShopValues.repairShopStreetAddress,
                    repairShopCity: repairShopValues.repairShopCity,
                    repairShopState: repairShopValues.repairShopState,
                    repairShopZipcode: repairShopValues.repairShopZipcode
                }
            }
        }).exec();
        res.send(req.body);
    });

    app.get('/claims/recent', (req, res) => {
        ClaimInfo.find({}, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
            .limit(10);
    });

    app.get('/claims/searchbyclaimnumber', (req, res) => {
        ClaimInfo.findOne({claimNumber: req.query.claimID}, function (err, claimInfo) {
            if (err) {
                res.send(err)
            }
            res.send(claimInfo);
        });
    });
}
