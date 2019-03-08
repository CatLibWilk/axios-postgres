const dbController = require('./dbController.js')

module.exports = {
    process: function(data, cb){
        let array = data.toString().split('\n')
       
        //for loop for small-sample testing
        for(let i = 1; i < 16; i++){
            const parsed = array[i].split('\t')
            dbController.save(parsed)
        }

    }
}