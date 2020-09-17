var fs = require("fs");

function hi(message) {
    message.channel.send("Hello!");
}
function readfile(filename,callback){
    fs.readFile(filename,"utf8",function(err, contents){
        return callback(contents);
    });
}
module.exports = {
    hi,
    readfile
};