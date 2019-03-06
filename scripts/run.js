const prompts = require('prompts')
const dbController = require('./dbController.js')
const process = require('./process');
const axios = require('axios');
const fs = require('fs')
const datetime = new Date().getTime()

module.exports = {
    test: function(){
        let interval
        (async function(){
            const questions = [
                {
                    type: 'confirm',
                    name: 'start',
                    message: `Start retrieval?`,

                }
            ];
        
            const answer = await prompts(questions, {onCancel:cleanup, onSubmit:cleanup});
           
                // answer.start ? module.exports.retrieveAndLog() : ''
                answer.start ? module.exports.retrieveAndSave() : ''
            
        })();
        
        function cleanup() {
            clearInterval(interval);
        }
    },

    retrieveAndSave: function(){
        console.log("retrieve function called")
        // 'https://www.ebi.ac.uk/gwas/api/search/downloads/studies'
        axios.get('https://www.ebi.ac.uk/gwas/api/search/downloads/studies')
                .then(response => {
                    // console.log(response.data)
                    process.process(response.data, function(cb){
                        dbController.save(cb)
                    });
                });

    },

    retrieveAndLog: function(){
        console.log("retrieve function called")
        // 'https://www.ebi.ac.uk/gwas/api/search/downloads/studies'
        axios.get('https://www.ebi.ac.uk/gwas/api/search/downloads/studies')
                .then(response => {
                    // console.log(response.data)
                    fs.writeFile(`${__dirname}/../logs/response-save-${datetime}.txt`, response.data, function(err){
                        if (err) throw err;
                        console.log('New logfile saved')
                    })
                })
        
    }
}
//testing without starting app each time
module.exports.test()

