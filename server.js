const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', msg => {
  var mes = msg.content.split(" ");
  if(msg.author.bot){
    return;}
  else{
    if(mes[0]=="now"){
      if(mes[1]=="ping"){
        msg.channel.send("NOPE");
      }
    }
    else{
      console.log("regretted");
    }
  }
});
