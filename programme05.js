var path = require('path');
var fs = require('fs');
var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
	for(var i in list) {
		if(path.extname(list[i]) == ext) {
			console.log(list[i])
		}
	}
})	
