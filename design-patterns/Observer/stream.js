let fs = require('fs');
let path = require('path');

let rs = fs.createReadStream(path.join(__dirname, '1.txt'), 'utf-8');

rs.on('data', function(data) {
    console.log(data);
})

rs.on('end', function(data) {
    console.log('end');
})