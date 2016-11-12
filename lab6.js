
var http = require('http'),fs = require('fs');
//read a regula text file and print
fs.readFile("file.txt","utf8", function(error, text){
	if(error)
		throw error;
	else
		console.log(text);
});

// read a html file and have it viewable at localhost:8000

var server = http.createServer(function(request,response){
	fs.readFile("file.html", function (error, html){
		if(error)
			throw error;
		else
			response.writeHeader(200, {"Content-Type": "text/html"});  
        	response.write(html);
        	console.log("Server started listening on 8000");
        	response.end();
	});
});
server.listen(8000);