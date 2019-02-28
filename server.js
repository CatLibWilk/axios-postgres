require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

var syncOptions = { force: false };

db.sequelize.sync(syncOptions).then(function() {
    console.log('database connected, will now call other utility')
});