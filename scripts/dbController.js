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

        //ABOVE move this array and split action to process.js, pass result to the save function above

        let item1 = array[1].split('\t')
        db.Entry.create({
            date_added: item1[0],
            pubmedid: item1[1],
            first_author: item1[2],
            pub_date: item1[3],
            journal: item1[4],
            link: item1[5],
            study_title: item1[6],
            disease_trait: item1[7],
            sample_size_desc: item1[8],
            replication_sample_size_desc: item1[9],
            platform: item1[10],
            assoc_count: item1[11],
            createdAt: item1[12],
            updatedAt: item1[13]
        }).then(response => {
            console.log(response || 'no reponse but action complete')
        })
        

    }
}

//for testing without server start
module.exports.saveFromLog();