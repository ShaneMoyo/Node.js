var exec = require('child_process').exec; 
var querystring = require('querystring'),
    fs = require("fs");


function start(response){
    console.log('request handler start was called');
    
    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="content-type" content="text/html; ' +
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multi/form-data" ' +
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

        response.writeHead(200, {"content-type":"text/html"});
        response.write(body);
        response.end();
}


function upload(response, postData){
    console.log('Request handler upload was called');
    response.writeHead(200, {"content-type": "text/plain"});
    response.write("You've sent: +" 
    + querystring.parse(postData).text);
    response.end();
}

function show(response) {
    console.log('Request handler show was called.')
    response.writeHead(200, {'content-type': 'image/png'});
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;