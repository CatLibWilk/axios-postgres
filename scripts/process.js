const dbController = require('./dbController.js')

module.exports = {
    process: function(data, cb){    
        saveSync = new Promise(function(resolve,reject){
            const doSave = function(){
                let array = data.toString().split('\n')
                const sendArray = new Promise(function(resolve, reject){
                    
                    array.map((item, i) => {
                        if(i<5){
                            const parsed = item.split('\t')
                            dbController.save(parsed)
                        }else{
                            resolve('promise 1 resolved')
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
