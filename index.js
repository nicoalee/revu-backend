// allows loading from a .env file for configs ----
require('dotenv').config()

// external modules -------------------------------
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

// internal modules -------------------------------
const propertyController = require('./controllers/PropertyController')

// other setup ------------------------------------
const app = express()
const port = process.env.NODE_PORT || 3000

// setup mongoose ---------------------------------
mongoose.connect(`${process.env.MONGO_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: "revu",
})
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.error("Unable to connect to Mongo", err);
    })

// setup body parser ------------------------------
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// setup routes -----------------------------------
app.use('/property', propertyController)

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})