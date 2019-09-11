//node js consol color
var reset = "\x1b[0m"
module.exports = {
	reset : reset,
	bright : "\x1b[1m",
	dim : "\x1b[2m",
	underscore : "\x1b[4m",
	blink : "\x1b[6m",
	reverse : "\x1b[7m",
	hidden : "\x1b[8m",
	black	: 30,
	red		: 31,
	green	: 32,
	yellow	: 33,
	blue	: 34,
	magenta	: 35,
	cyan	: 36,
	white 	: 37,
	clog : 
		function clog(msg, fg){
			console.log('\x1b[1m'+'\x1b['+fg+'m'+'%s'+reset,msg);
		}
};
