var fs = require("fs");

function hi(message) {
    message.channel.send("Hello!");
}
function readfile(filename){
    fs.readfile(filename,"utf8",function(contents){
        return contents;
    });
}
module.exports = {
    hi,
    readfile
};