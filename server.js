require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')
const run = require('./scripts/run')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

var syncOptions = { force: false };


db.sequelize.sync(syncOptions).then(function() {
    console.log('database connected, will now call other utility')
    run.startRetrieve(function(){
        console.log("Resources retrieved and stored successfully")
        setTimeout(endMessage, 2000)
        function endMessage() {
            console.log('Program will now end')
            setTimeout(endProgram, 2000)
        }
        function endProgram(){
            process.exit(0)
        }
    });
});

