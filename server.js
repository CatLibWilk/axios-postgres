require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')

//figure out how to eliminate cyclical dependency or just make this less pukey
module.exports = {
    endProgram: function(){
        console.log('endprogram called in server.js')
        process.exit(0)
    }
}

const run = require('./scripts/run')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

var syncOptions = { force: false };


db.sequelize.sync(syncOptions).then(function() {
    console.log('database connection')

    run.startRetrieve(function(){
        console.log("Resources retrieved and stored successfully")
        setTimeout(run.startRetrieve, 2000)

    });
});

