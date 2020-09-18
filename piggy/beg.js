var msg = null;
var amounts = [0, 0, 0, 245, 387];
var stuff = ["**Yourself** : Nope", "**John F Cenedy** : Nah, screw it", "**Pepe Pig** : HAHAHA no.", "**Shrek** : Get dis 245 coinz budd", "**Yourself** : Get this 387 coinz u poor thing"];
var fs = require("fs");

function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}
function beg(message) {
    msg = message;
    message.channel.send("Begging...");
    setTimeout(begged, 3000);
}
function begged() {
    var numt = random(0,4);
    fs.writeFile("./balance/" + msg.author.tag, amounts[numt], function (err) {
        if(err==null){
            msg.reply(stuff[numt]);
        }
        else{
            msg.reply("Oh shit error");
        }
    });
}
module.exports = {
    beg,
    random,
    begged
};