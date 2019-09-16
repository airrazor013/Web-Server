var color = require("./clog.js");
var clog = color.clog;
var file = require("./files.js");
var blacklist = {
  0: "::ffff:134.90.149.139",
  1: "::ffff:188.166.189.163",
  2: "::ffff:103.133.104.71",
}

function isInBlacklist(ip, callback){
    for(var key in blacklist){
      if(ip == blacklist[key]){
        clog("BLACKLIST IP DETECTED!",color.red);
        file.write(__dirname + "/../logs/", "banHammer.txt",
        "Blacklisted ip request blocked: "+ip+"\nTimestamp: " + Date.now() +"\n\n", true);
        callback(true);
        return;
      }
    }
    callback(false);
}

module.exports = {
  check: isInBlacklist
}
