const request = require('request');

request('https://maps.googleapis.com/maps/api/geocode/json?address=236005', {json: true}, (error, response, body) => {
    console.log(body);
});