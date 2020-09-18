const https = require('https');
ping();
function ping(){
  https.get("https://pepe-pig-discord.glitch.me/");
  setTimeout(5000, ping);
}
