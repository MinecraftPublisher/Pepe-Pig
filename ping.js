var https = require("https");
var request = require('request');
get();
function get(){
  request.post(
    'http://www.yoursite.com/formpage',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
  setTimeout(get, 5000);
}
