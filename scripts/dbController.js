const db = require('../models');
const fs = require('fs');

module.exports = {
    test: function(){
        console.log('dbController function reached')
    },

    save: function(data){
        console.log(data)
    },

    saveFromLog: function(){
        let array = fs.readFileSync(__dirname + '/../logs/reponse-save-1551789042030.txt').toString().split('\n')
        //array is the column names and then individual articles separated into array elements.  split on \t (tab) to then
        //split into elements (e.g. item1 = array[1].split('\t) => clog item1[0] will return date added to catalog)

        let item1 = array[1].split('\t')
        console.log(item1[0])
        

    }
}

//for testing without server start
module.exports.saveFromLog();