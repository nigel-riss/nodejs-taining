const express = require('express');
const hbs = require('hbs');
const pug = require('pug');

let app = express();

// app.set('view engine', 'hbs');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.pug', {
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello Dear User!'
    })
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    // res.render('about.hbs');
    res.render('about.pug', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(8000, () => {
    console.log('Sever is up on port 8000');
});