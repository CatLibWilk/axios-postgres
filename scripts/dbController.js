const db = require('../models');

module.exports = {
    test: function(){
        console.log('dbController function reached')
    },

    save: function(data){
        console.log(data)
    }
}