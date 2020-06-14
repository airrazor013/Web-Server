var color = require("./clog.js");
var clog = color.clog;

var file = require("./files.js");



function doCall(req, res){
  var path = req.path;
  switch(path){
    case "/api/contact":
      contactMeAPI(req, res);
    break;
  }
  res.end();
}

function contactMeAPI(req, res){
  clog("Got contact request.", color.yellow);
  var data = req.body;
  if(data.phoneNumber == ""){
    data.phoneNumber = "NA";
    data.bestContactTime = "NA";
    data.bestContactTimeRadio = "";
    data.contactMethod = "Email";
  }
  var toWrite = "";
  toWrite += "Timestamp: " + Date.now() + "\n";
  toWrite += "Sender IP: " + req.ip+"\n";
  toWrite += "Name: " + data.name + "\n";
  toWrite += "Email: " + data.email +"\n";
  toWrite += "Phone: " + data.phoneNumber + "\n";
  toWrite += "Best contact time: " +data.bestContactTime+" "+data.bestContactTimeRadio+"\n";
  toWrite += "Contact method: " + data.contactMethod + "\n";
  toWrite += "Message: " + data.message+"\n\n";

  file.write(__dirname+"/../logs/camdent/","contactRequest.txt", toWrite, true);
}

module.exports = {
  doCall: doCall
}
