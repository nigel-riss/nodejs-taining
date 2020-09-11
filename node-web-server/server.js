const express = require('express');
const hbs = require('hbs');
const pug = require('pug');
const fs = require('fs');

const port = process.env.PORT || 8000;
let app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// app.set('view engine', 'pug');

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.protocol}://${req.hostname}${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Hello Dear User!'
    });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('about.hbs', {
    // res.render('about.pug', {
        pageTitle: 'About Page'
    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs', {
        pageTitle: 'Portfolio'
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(port, () => {
    console.log(`Sever is up on port ${port}`);
});