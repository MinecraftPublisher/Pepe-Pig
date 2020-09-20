var https = require("https");
get();
function get(){
  console.log("exec");
  https.get("https://pepepig.glitch.me/");
  setTimeout(get, 1000);
}
