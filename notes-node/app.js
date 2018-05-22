console.log('Starting app.');

const fs = require('fs');
const os = require('os');

// console.log(os.userInfo());

fs.appendFile('greetings.txt', `Hello: ${os.userInfo().username}`, function(err) {
    if (err) {
        console.log('Unable to write to file');
    }
});