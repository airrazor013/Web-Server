var color = require("./clog.js");
var clog = color.clog;
var file = require("./files.js");

function isInBlacklist(req, callback){
  var ip = req.ip;
  file.read(__dirname+"/../logs/", "blacklist.txt", function(data){
    var list = data.toString().split("\n");
    for(var i = 0; i < list.length; i++){
      if((typeof(ip) != undefined) && ip != undefined && ip.toString() == list[i].toString().trim()){
        clog("BLACKLIST IP DETECTED!",color.red);
        file.write(__dirname + "/../logs/", "banHammer.txt",
        "Timestamp: " + Date.now() +"\n"+
        "Blacklisted ip request blocked: "+ip+"\n"+
        "Requested page: "+req.hostname+req.path+"\n\n", true);
        callback(true);
        return;
      }
    }
    if(shouldAutoBan(req)){
      callback(true);
      return;
    }
    callback(false);
  });
}

function shouldAutoBan(req){
  var path = req.path.toString();
  if(path.includes(".php")||
     path.includes(".xml")||
     path.includes(".js")||
     path.includes("/cms/")||
     path.includes("/shell")||
     path.includes(".asp")){
       clog("Blacklisting: " + req.ip, color.red);
       file.write(__dirname+"/../logs/","blacklist.txt", req.ip+"\n",true);
       return true;
     }
     return false;


}
module.exports = {
  check: isInBlacklist
}
