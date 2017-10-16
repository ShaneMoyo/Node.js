var exec = require('child_process').exec; 


function start(response){
    console.log('request handler start was called');
    var content = "empty";

    var body ='<html>'+
    '<head>'+
    '<meta http-equiv="content-type" content="text/html; ' +
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<input type="submit" value="submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

        response.writeHead(200, {"content-type":"text/html"});
        response.write(stdout);
        response.end();
}


function upload(response){
    console.log('Request handler upload was called');
    response.writeHead(200, {"content-type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;