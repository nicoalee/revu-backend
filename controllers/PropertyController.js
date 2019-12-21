const express = require('express')
const router = express.Router()
const propertyDAO = require('../db/PropertyDao')

router.route('/')
    .get(propertyDAO.findAll)

router.route('/:address')
    .get(propertyDAO.findByAddress)

router.route('/new')
    .post(propertyDAO.create)


module.exports = router