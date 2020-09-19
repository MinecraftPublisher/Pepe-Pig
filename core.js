var fs = require("fs");
var Discord = require("discord.js");
let mman = require("./mman.js");
var msg = null;
var amounts = [0, 0, 0, 245, 387 , 200];
var stuff = [
  "**Yourself** : Nope",
  "**John F Cenedy** : Nah, screw it",
  "**Pepe Pig** : HAHAHA no.",
  "**Shrek** : Get dis 245 coinz budd",
  "**Yourself** : Get this 387 coinz u poor thing!",
  "**Mom**: Ok, but only 200 Coins ",
];

function bal(message) {
  fs.readFile("./balance/" + message.author.id, "utf8", function(
    err,
    contents
  ) {
    var balancio = 0;
    if (contents == undefined) {
      balancio = 0;
    } else if (contents == NaN) {
      balancio = 0;
    } else {
      balancio = contents;
    }
    const balance = new Discord.MessageEmbed()
      .setColor("#f873ff")
      .setTitle(message.author.tag + " 's Balance")
      .setDescription("Wallet: " + balancio)
      .setTimestamp();
    message.channel.send(balance);
  });
}
function random(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
function beg(message) {
  msg = message;
  message.channel.send("Begging...");
  setTimeout(begged, random(3000,10000));
}
function begged() {
  var numt = random(0, 5);
  fs.readFile("./balance/" + msg.author.id,"utf8", function(contentsss) {
    mman.writeFile(
      "./balance/" + msg.author.id,
      amounts[numt] + Number(contentsss),
      function(err) {
        if (err == null) {
          msg.reply(stuff[numt]);
        } else {
          msg.reply("Oh shit error");
        }
      }
    );
  });
}
module.exports = {
  beg,
  random,
  begged,
  bal
};
