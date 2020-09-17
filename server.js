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
      var run = mes[1];
      if(run=="ping"){
        msg.channel.send("NOPE");
      }
      else if(run=="help"){
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Help')
	.setDescription('Lemme explain:\nMy prefix is now, so saying now ping will ping.\n\nCommands:\nping: pong!\nhelp: shows help...? i guess...?')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(exampleEmbed);
      }
      else{
        msg.channel.send("ummm...");
      }
    }
    else{
      console.log("regretted");
    }
  }
});
