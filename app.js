var express = require("express");
var app = express();
var port = 8080;
var fs = require('fs');
var bodyParser = require('body-parser');
var url = require('url');
var color = require('./exports/clog.js');
var clog = color.clog;

app.use(express.static('public'));

app.use(function(req, res, next){
	var host = req.hostname;
	clog("Inbound request on: "+host, color.magenta);
	switch(host){
		case "ethanryoung.com":
			req.pageDir = "./pages/ethanryoung";
			break;
		case "localhost":
		case "camdent.net":
			req.pageDir = "./pages/camdent";
	}
	next();
});

app.get("/", (req, res) => {
	sendPage(req.pageDir, "/index", res);
});

app.get("/*", (req, res) => {
	sendPage(req.pageDir, req.path, res);
});

function sendPage(pageDir, path, res){
	clog("Got page request for: "+pageDir + path, color.yellow);
	fs.readFile(pageDir + path+".html", function(err, page){
		if(err){
			sendError(pageDir, res);
		}else{
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(page);
			clog('Sent page as response.\n', color.green);
		}
	});
}

function sendError(path, res){
	fs.readFile(path+"/404.html", function(err, page){
		res.writeHead(404);
		res.end(page);
		clog('Error:\tpage not found.\n\tReturning 404 page.\n', color.red);
	});
}

app.listen(port);

clog('Server started listening on '+port+' for requests.',color.blue);