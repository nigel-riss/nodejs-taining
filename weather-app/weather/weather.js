const request = require('request');

let getWeather = (latitude, longitude, callback) => {
    request(`https://api.darksky.net/forecast/b44749dfed3821158618a36c1c439b57/${latitude},${longitude}`,
        {json: true},
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                });
            } else {
                callback(`Unable to fetch weather. Status code: ${response.statusCode}`);
            }
        }
    )
}

module.exports.getWeather = getWeather;
