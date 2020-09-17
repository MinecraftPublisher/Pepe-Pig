const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});
bot.on('message', msg => {
  if(msg.author.bot){
    return;}
  else{
    if(msg.content.split(" ")[0]=="now"){
    }
    else{
      console.log("regretted");
    }
  }
});
