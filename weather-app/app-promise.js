// TODO
// 1. Add default location feature (additional flag, fs module)
// 2. Try some additional info
// 3. Convert co Celsius by default
// 4. Add emoji and formated output

const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const googleAPIKey = 'AIzaSyAyR1WfQRqvsr5MEqd0sodQH-g-PwkXXtM';
let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`;

axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }

        let latitude = response.data.results[0].geometry.location.lat;
        let longitude = response.data.results[0].geometry.location.lng;
        let weatherUrl = `https://api.darksky.net/forecast/b44749dfed3821158618a36c1c439b57/${latitude},${longitude}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
    })
    .then((response) => {
        let temperature = response.data.currently.temperature;
        let apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
    })
    .catch((error) => {
        if (error.code === 'ENOTFOUND') {
            console.log('Unable to connect to API servers');
        } else {
            console.log(error.message);
        }
    });