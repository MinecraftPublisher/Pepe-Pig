var fs = require("fs");
var Discord = require("discord.js");
function bal(message) {
    fs.readFile("./balance/" + message.author.tag, "utf8", function (err, contents) {
        const balance = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(message.author.tag + " 's Balance")
            .setDescription("Wallet:" + contents)
            .setTimestamp();
        message.channel.send(balance);
    });
}
module.exports = {
    bal
};