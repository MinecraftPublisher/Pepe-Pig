const axios = require('axios');
  const data = {
    name: 'Pepe Pig',
    job: 'Pepe-Pig-Discord-Bot'
};
get();
function get(){
axios.post('https://pepepig.glitch.me/', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
  axios.post('https://Dynamo.dragondev15.repl.run', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
  setTimeout(get, 5000);
}
