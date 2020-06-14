var fs = require('fs');
var color = require('./clog');
var clog = color.clog;


function readFile(path, filename, callback){
	fs.readFile(path+filename, function (err, data){
		if(err) callback(null);
		else callback(data);
	});
}

function writeFile(path, filename, data, append){
	if(append)
		fs.appendFile(path+filename,data,function(err){
			if(err) clog(filename + ' could not be written to.\n', color.red);
			//else clog(filename + ' was appened with data.\n', color.green);
		});
	else
		fs.writeFile(path+filename, data, function(err){
			if(err) clog(filename + ' could not be written to.\n',color.red);
			//else clog(filename + ' was written to with data.\n', color.green);
		});
}

module.exports = {
	read : readFile,
	write : writeFile
}
