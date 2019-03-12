const prompts = require('prompts')
const dbController = require('./dbController.js')
const process = require('./process');
const axios = require('axios');
const fs = require('fs')
const datetime = new Date().getTime()

module.exports = {
    startRetrieve: function(cb){
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
                answer.start ? module.exports.retrieveAndSave(function(){
                    cb()
                }) : (async function(){
                    const endQ = [{
                        type: 'confirm',
                        name: 'end',
                        message: 'End program?'
                    }];
                    const endAnswer = await prompts(endQ, {onCancel:cleanup, onSubmit:cleanup});
                    endAnswer.end ? module.exports.exitProgram(0): '';
                })();
            
        })();
        
        function cleanup() {
            clearInterval(interval);
        }
    },
    
    exitProgram: function(){
        console.log('Goodbye!')
        process.exit(0)
    },

    retrieveAndSave: function(cb){
        console.log("retrieve function called")
        // 'https://www.ebi.ac.uk/gwas/api/search/downloads/studies'
        axios.get('https://www.ebi.ac.uk/gwas/api/search/downloads/studies')
                .then(response => {
                    process.process(response.data, function(){
                        console.log('callback in run.js')
                        cb()
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
// module.exports.test()

