const request = require('request');
const yargs = require('yargs');

const googleAPIKey = 'AIzaSyAyR1WfQRqvsr5MEqd0sodQH-g-PwkXXtM'

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weathre for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

if (argv.address) {
    request(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}&key=${googleAPIKey}`,
        {json: true},
        (error, response, body) => {
            if (error) {
                console.log('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                console.log('Unable to find that address.');
            } else if (body.status === 'OK') {
                // console.log(JSON.stringify(body, undefined, 2));
                console.log(`Address: ${body.results[0].formatted_address}`);
                console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
                console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
            }
    });
}
