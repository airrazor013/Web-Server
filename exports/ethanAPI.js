var color = require('./clog.js');
var clog = color.clog;

function doCall(req, res){
	clog(req.body, color.red);
  res.end();
}

module.exports = {
  doCall: doCall
}
