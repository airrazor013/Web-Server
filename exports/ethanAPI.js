var nodemailer = require('nodemailer');
var color = require('./clog.js');
var clog = color.clog;
var credentials = require('./emailCridentials.json');

function doCall(req, res){
	clog(JSON.stringify(req.body), color.red);

  var transporter = nodemailer.createTransport(credentials);
	var mailOptions = {
		from: 'ethansammyserver@gmail.com',
		to: 'ethansammyserver@gmail.com',
		subject: req.body.name + " " + req.body.email,
		text: req.body.message
	};
	transporter.sendMail(mailOptions, function(err, info){
		if (err){
			clog(err, color.red);
		} else {
			clog('email sent' + info.response, color.red);
		}
	});
  res.end();
}

module.exports = {
  doCall: doCall
}
