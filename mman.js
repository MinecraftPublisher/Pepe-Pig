var fs = require("fs");

function hi(message) {
    message.channel.send("Hello!");
}
function readfile(filename,callback){
    fs.readFile(filename,"utf8",function(err, contents){
        return callback(contents);
    });
}
function writefile(filename,contents,callback){
    fs.writeFile(filename,contents,function(err){
        return callback(err);
    });
}
module.exports = {
    hi,
    readfile,
    writefile
};