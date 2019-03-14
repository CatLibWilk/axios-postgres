require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

//figure out how to eliminate cyclical dependency or just make this less pukey
module.exports = {
    endProgram: function(){
        console.log('Program will exit, goodbye!')
        setTimeout(end, 1500)
        function end(){
            process.exit(0)
        }
    }
}

const run = require('./scripts/run')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

var syncOptions = { force: false };

const startAndRetrieve = function() {

    run.startRetrieve(function(){
        console.log("Resources retrieved and stored successfully")
        setTimeout(startAndRetrieve, 2000)
    
    });
}

db.sequelize.sync(syncOptions).then(function() {
    console.log('database connection')
    startAndRetrieve();
});

