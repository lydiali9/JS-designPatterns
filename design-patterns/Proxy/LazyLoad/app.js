let express = require('express');
let path = require('path');
let app = express();

app.get('/images/:name', function(req, res) {
    setTimeout(function() {
        res.sendFile(path.join(__dirname, req.path));
    }, 2000);
})

app.get('/loading.png', function(req, res) {
    res.sendFile(path.resolve('loading.png'));
})

app.use(express.static(__dirname));
app.listen(8088);
