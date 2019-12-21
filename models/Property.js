const mongoose = require('mongoose')

// type
// address
// postalCode
// propertyName
// apartmentNumber
// rent
// reviews

const propertySchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['APARTMENT', 'HOUSE']
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    postalCode: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(v)
            }
        }
    },
    propertyName: {
        type: String,
        required: false
    },
    apartmentNumber: {
        type: Number,
        required: false
    },
    rent: {
        type: Number,
        required: false
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
})

module.exports = mongoose.model('Property', propertySchema)