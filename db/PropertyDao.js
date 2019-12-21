const Property = require('../models/Property')

// type
// address
// postalCode
// propertyName
// apartmentNumber
// rent
// reviews
function create(req, res) {

    const property = new Property({
        type: req.body.type,
        address: req.body.address,
        postalCode: req.body.postalCode,
        propertyName: req.body.propertyName,
        apartmentNumber: req.body.apartmentNumber,
        rent: req.body.reviews,
    })

    property.save()
        .then(() => {
            res.status(201).send("Property Created")
        })
        .catch((err) => {
            res.status(400).send(err.errmsg)
        })
}

function findAll(req, res) {
    Property.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

function findByAddress(req, res) {
    Property.findOne({address: req.params.address})
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
}

module.exports = {
    findByAddress,
    create,
    findAll
}