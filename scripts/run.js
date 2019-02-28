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
        
            const answers = await prompts(questions, {onCancel:cleanup, onSubmit:cleanup});
            try {
                answers.start ? module.exports.retrieve() : ''
            }
            catch(err){
                err ? (console.log('retrieve function not called'), module.exports.test()) : ''
            }
        })();
        
        function cleanup() {
            clearInterval(interval);
        }
    },

    retrieve: function(){


        // dbController.test()
    }
}
//testing without starting app each time
module.exports.test()