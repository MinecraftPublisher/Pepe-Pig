const Discord = require('discord.js');
const bot = new Discord.Client();
let mman = require("./mman.js");

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', msg => {
  var mes = msg.content.split(" ");
  if (msg.author.bot) {
    return;
  }
  else {
    if (mes[0] == "now") {
      var run = mes[1];
      if (run == "ping") {
        msg.channel.send("NOPE");
      }
      else if (run == "help") {
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .setTitle('Help')
          .setDescription('Lemme explain:\nMy prefix is now, so saying now ping will ping.\n\nCommands:')
          .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: 'ping', value: 'Pong!', inline: true },
            { name: 'hi', value: 'say hi to me, be nice!', inline: true },
            { name: 'help', value: 'shows help, i guess...?', inline: true },
          )
          .setTimestamp();

        msg.channel.send(exampleEmbed);
      }
      else if (run == "hi") {
        mman.hi(msg);
      }
      else if(run=="proc"){
        msg.channel.send("The Procfile:\n\n" + mman.readfile("Procfile"));
      }
      else {
        msg.channel.send("ummm...");
      }
    }
    else {
      console.log("regretted");
    }
  }
});
