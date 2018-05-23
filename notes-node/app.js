console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

// console.log(os.userInfo());

// fs.appendFile('greetings.txt', `Hello: ${os.userInfo().username}! You are ${notes.age}. \n`, function(err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// let res = notes.addNote();
// console.log(res);
console.log(notes.add(9, -2));