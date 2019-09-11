var express = require("express");
var app = express();
var port = 8080;
var fs = require('fs');
var bodyParser = require('body-parser');
var url = require('url');
var color = require('./exports/clog.js');
var clog = color.clog;


app.get("/", (req, res) => {
	sendPage("/index", res);
});
app.get("/*", (req, res) => {
		sendPage(req.path, res);
});

	
function sendPage(path, res){
	clog("Got page request for: " + path , color.yellow);
	fs.readFile("pages"+path+".html", function(err, page){
		if(err){
			sendError(res);
		}else{
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(page);
			clog('Sent page as response.\n', color.green);
		}
	});
}

function sendError(res){
	fs.readFile("pages/404.html", function(err, page){
		res.writeHead(404);
		res.end(page);
		clog('Error:\tpage not found.\n\tReturning 404 page.\n', color.red);
	});
}

app.listen(port);
 
clog('Server started listening on '+port+' for requests.',color.blue);
    