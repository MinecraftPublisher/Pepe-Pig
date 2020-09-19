var fs = require("fs");

function hi(message) {
  message.channel.send("Hello!");
}
function readFile(filename, callback) {
  fs.readFile(filename, "utf8", function(err, contents) {
    if(err==null){
      return callback(contents);
    }
    else{
      return callback(err);
    }
  });
}
function writeFile(filename, contents, callback) {
  fs.writeFile(filename, contents, function(err) {
    return callback(err);
  });
}
function CRASH(){
  var crash = "";
  console.log(crash.hello);
}
function debug(message, value) {
  message.channel.send("```DEBUG MESSAGE\n" + value + "```");
}
module.exports = {
  hi,
  readFile,
  writeFile,
  debug,
  CRASH
};
