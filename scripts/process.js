const dbController = require('./dbController.js')

module.exports = {
    process: function(data, cb){
        console.log('process.js reached')
        // console.log(data)
        cb(data)
    }
}