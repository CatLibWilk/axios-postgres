const dbController = require('./dbController.js')

module.exports = {
    process: function(data, cb){    
        saveSync = new Promise(function(resolve,reject){
            const doSave = function(){
                let array = data.toString().split('\n')
                const sendArray = new Promise(function(resolve, reject){
                    let count = 0;
                    let lengthVar = 5
                    array.map((item, i) => {
                        if(i<=lengthVar){
                            const parsed = item.split('\t')
                            dbController.save(parsed, function(){
                                count++;
                                console.log(`Count is now: ${count}`)
                                if(count === lengthVar){
                                    console.log('length var reached')
                                    resolve('promise 1 resolved')
                                }
                            })
                        }
                    });
                   
                });

                sendArray.then(pres => {
                    console.log(pres)
                    resolve('promise 2 resolved')
                })

            }
            ///
            doSave();
        });

        saveSync.then(promiseRes => {
            console.log(promiseRes)
            cb()
        })
    }
}
