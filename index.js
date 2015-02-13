var express = require('express')
var bugsnag = require('bugsnag');
var http = require('http');
var multiparty = require('connect-multiparty')

bugsnag.register('066f5ad3590596f9aa8d601ea89af845');

var app = exports.app = express();

app.use(bugsnag.requestHandler);
app.use(app.router);
app.use(bugsnag.errorHandler);

app.set('port', process.env.PORT || 3333);

app.get('/', function (req, res) {

    res.send('<html><form method="post" action="/upload" enctype="multipart/form-data"><input type="file" name="avatar"/><input type="submit"/></form></html>');

});

app.post('/upload', multiparty(), function (req, res, next) {
    console.log(req.files);
    bugsnag.notify(new Error('ruh rho'));
    throw new Error('oops');
    res.send('ok');
});


server = http.createServer(app)
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
