var fs = require("fs");

function hi(message) {
    message.channel.send("Hello!");
}
function readfile(filename,callback){
    fs.readfile(filename,"utf8",function(contents){
        return callback(contents);
    });
}
module.exports = {
    hi,
    readfile
};