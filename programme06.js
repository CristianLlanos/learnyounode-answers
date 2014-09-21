var mym = require('./programme06.module.js');

mym(process.argv[2],process.argv[3],function(err, list){
    if (err) {
        console.log(err);
    } else {
        list.forEach(function(data){
            console.log(data);
        })
    }
})
