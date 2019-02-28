const prompts = require('prompts')
const dbController = require('./dbController.js')


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
           
                answer.start ? module.exports.retrieve() : ''
            
        })();
        
        function cleanup() {
            clearInterval(interval);
        }
    },

    retrieve: function(){
        console.log("retrieve function called")
        // 'ftp://ftp.ncdc.noaa.gov/pub/data/ghcn/daily/ghcnd-stations.txt'
        

        dbController.test()
    }
}
//testing without starting app each time
module.exports.test()