var color = require('./clog.js');
var clog = color.clog;

function doCall(req, res){
	clog(JSON.stringify(req.body), color.red);
  res.end();
}

module.exports = {
  doCall: doCall
}
