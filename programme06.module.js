module.exports = function(dir, ext, callback) {
    fs = require('fs');
    path = require('path');

    fs.readdir(dir, function(err, list){
        if (err) {
            return callback(err);
        } else {
            var filtered = [];
            list.forEach(function(data){
                if (path.extname(data) == '.' + ext) {
                    filtered.push(data);
                }
            });
            return callback(null, filtered);
        }
    });
};
