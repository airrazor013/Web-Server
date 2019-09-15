var express = require("express");
var app = express();
var port = 8080;
var fs = require('fs');
var bodyParser = require('body-parser');
var url = require('url');
var color = require('./exports/clog.js');
var clog = color.clog;
var file = require('./exports/files.js');
var ethanApi = require('./exports/ethanAPI.js');
var camdenApi = require('./exports/camdenAPI.js');
var api = null;
var reqIP = null;
app.use(express.static('public'));

app.use(function(req, res, next){
	var host = req.hostname;
	reqIP = req.ip;
	clog("Inbound request on: " + host, color.magenta);
	switch(host){
		case "ethanryoung.com":
			req.pageDir = "./pages/ethanryoung";
			api = ethanApi;
			break;
		case "localhost":
		case "camdent.net":
		default:
			req.pageDir = "./pages/camdent";
			api = camdenApi;
	}
	next();
});

app.post("/api/*", (req, res) => {
	if(api == null)
		clog("API unavailible", color.red);
	else{
		api.doCall(req, res);
		api = null;
	}
});

app.get("/", (req, res) => {
	sendPage(req.pageDir, "/index", res);
});

app.get("/*", (req, res) => {
	sendPage(req.pageDir, req.path, res);
});

function sendPage(pageDir, path, res){
	clog("Got page request for: "+pageDir + path, color.yellow);
	file.read(pageDir, path + ".html", function(page){
		if(page == null){
			sendError(pageDir, path, res);
		}else{
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(page);
			clog('Sent page as response.\n', color.green);
			reqIP = null;
		}
	});
}

function sendError(pageDir, path, res){
	file.read(pageDir, "/404.html", function(page){
		if(page == null) clog('File reader is broken!!', color.red);
		else{
			res.writeHead(404);
			res.end(page);
			clog('Error:\tpage not found.\n\tReturning 404 page.', color.red);
			file.write("./logs/","404.txt", "Timestamp: " + Date.now()+"\nPage requested: " + pageDir + path + "\nRequesting IP: " + reqIP +"\n\n",true);
			reqIP = null;
		}
	});
}

app.listen(port);
clog('Server started listening on '+port+' for requests.',color.blue);
