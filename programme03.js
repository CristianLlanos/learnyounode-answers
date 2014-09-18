var fs = require('fs')

var path = process.argv[2]

var file = fs.readFileSync(path)

var st = file.toString().split('\n')

console.log(st.length - 1)
