const Discord = require("discord.js");
const bot = new Discord.Client();
let mman = require("./mman.js");
var http = require("http");
let mysql = require("mysql");
let fs = require("fs");

const TOKEN = process.env.TOKEN;
bot.login(TOKEN);
bot.on("ready", () => {
  bot.user.setActivity(" with " + bot.users.cache.size + " people");
});
bot.on("message", msg => {
  bot.user.setActivity(" with " + bot.users.cache.size + " people");

  var mes = msg.content.split(" ");
  if (msg.author.bot) {
    return;
  } else {
    if (mes[0] == "now") {
      var run = mes[1];
      if (run == "ping") {
        msg.channel.send("NOPE");
      } else if (run == "help") {
        const helpEmbed = new Discord.MessageEmbed()
          .setColor("#f873ff")
          .setTitle("Help")
          .addFields(
            {
              name: ":robot: Bot Info ",
              value:
                "`restart` -> Restart the bot \n`now` -> Bot's Prefix\nUse `pepe` at the beginning of your sentence & i'll read it"
            },
            {
              name: ":family: Creators",
              value:
                "<:Mforoudpfp:756462950780371015> Mforoud86#5928 -> Owner \n<:Tom_15:756461098445832212> Tom_15#6969 -> Co-Owner"
            }
          );
        msg.channel.send(helpEmbed);
      } else if (run == "hi") {
        mman.hi(msg);
      } else if (run == "restart") {
        mman.CRASH();
      } else if (run == "auth") {
        if (
          msg.author.id == "497695386513965056" ||
          msg.author.id == "677776340803649557"
        ) {
          fs.writeFile(
            "./teachers/" + msg.mentions.members.first().id,
            "yes&&&" + msg.author.tag,
            function(err) {
              if (err == null) {
                msg.channel.send(
                  ":white_check_mark: `Authorized` :white_check_mark:"
                );
              } else {
                msg.channel.send(":x: `Failed to authorize` :x:");
              }
            }
          );
        } else {
          msg.channel.send(":x: unauthorized :x:");
        }
      } else if (run == "deauth") {
        if (
          msg.author.id == "497695386513965056" ||
          msg.author.id == "677776340803649557"
        ) {
          fs.writeFile(
            "./teachers/" + msg.mentions.members.first().id,
            "no&&&" + msg.author.tag,
            function(err) {
              if (err == null) {
                msg.channel.send(
                  ":white_check_mark: `Deauthorized` :white_check_mark:"
                );
              } else {
                msg.channel.send(":x: `Failed to deauthorize` :x:");
              }
            }
          );
        } else {
          msg.channel.send(":x: unauthorized :x:");
        }
      } else if (run == "author") {
        if (
          msg.author.id == "497695386513965056" ||
          msg.author.id == "677776340803649557"
        ) {
          fs.readFile(
            "./teachers/" + msg.mentions.members.first(),
            "utf8",
            function(err, isTeacher) {
              msg.channel.send(
                ":exclamation: This person was authorized by `" +
                  isTeacher.split("&&&")[1] +
                  "` :exclamation:"
              );
            }
          );
        } else {
          msg.channel.send(":x: unauthorized :x:");
        }
      } else if (run == "forget") {
        fs.readFile("./teachers/" + msg.author.id, "utf8", function(
          err,
          isTeacher
        ) {
          if (isTeacher.split("&&&")[0] == "yes") {
            var remove = msg.content.toLowerCase().replace("now forget ", "");
            var tree = remove.split(" -> ");
            var name = tree[0];
            fs.unlink("./data/" + name, function(err) {
              var hasSucceeded = ":sob: `Fail`";
              if (err == null) {
                hasSucceeded = ":sunglasses: `Success!`";
              }
              const helpEmbed = new Discord.MessageEmbed()
                .setColor("#f873ff")
                .setTitle("Report")
                .addFields({
                  name: "Report Body",
                  value:
                    "Raw Message: `" +
                    msg.content +
                    "`\nModified Message: `" +
                    remove +
                    "`\nName: `" +
                    name +
                    "`\nStatus: " +
                    hasSucceeded
                });
              msg.channel.send(helpEmbed);
            });
          } else {
            msg.channel.send("HAHAHA no.");
          }
        });
      }
        else if(run == "id"){
        msg.channel.send(msg.mentions.members.first().id);
      }
      else if (run == "learn") {
        fs.readFile("./teachers/" + msg.author.id, "utf8", function(
          err,
          isTeacher
        ) {
          if (isTeacher.split("&&&")[0] == "yes") {
            var remove = msg.content.toLowerCase().replace("now learn ", "");
            var tree = remove.split(" -> ");
            var name = tree[0];
            var data = tree[1];
            fs.writeFile("./data/" + name, data, function(err) {
              var hasSucceeded = ":sob: `Fail`";
              if (err == null) {
                hasSucceeded = ":sunglasses: `Success!`";
              }
              const helpEmbed = new Discord.MessageEmbed()
                .setColor("#f873ff")
                .setTitle("Report")
                .addFields({
                  name: "Report Body",
                  value:
                    "Raw Message: `" +
                    msg.content +
                    "`\nModified Message: `" +
                    remove +
                    "`\nName: `" +
                    name +
                    "`\nData: `" +
                    data +
                    "`\nStatus: " +
                    hasSucceeded
                });
              msg.channel.send(helpEmbed);
            });
          } else {
            msg.channel.send("HAHAHA no.");
          }
        });
      } else {
        msg.channel.send("ummm...");
      }
    } else if (msg.content.split(" ")[0] == "pepe") {
      var edited = msg.content.toLowerCase().replace("pepe ", "");
      console.log('Messagd with "' + edited + '"');
      fs.readFile("./data/" + edited, "utf8", function(err, data) {
        if (data == null) {
          msg.channel.send(":man_shrugging: dunno what that means!");
        } else {
          msg.channel.send(data);
        }
      });
    }
  }
});
