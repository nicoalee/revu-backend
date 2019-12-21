const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    rentStartDate: {
        type: Date
    },
    rentEndDate: {
        type: Date
    },
    reviewPostDate: {
        type: Date,
        default: Date.now
    },
    apartmentQualityRating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    locationRating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    landlordRating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    wouldRecommend: {
        type: Number,
        required: true
    },
    amenitiesList: [String],
})

module.exports = mongoose.model('Review', reviewSchema)