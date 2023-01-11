const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use EJS
app.set('view engine', 'ejs');

// Thrid-party Middleware
app.use(expressLayouts);
app.use(morgan('dev'));

// Application level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
  });

// Built-in middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { 
        layout: 'layouts/main-layout',
        title: 'Home Page'});
});

// Call routes
var routes = require('./routes');
routes(app);

app.get('/add', (req, res) => {
    res.render('add', { 
        layout: 'layouts/main-layout',
        title: 'Add Page'});
});

app.get('/edit', (req, res) => {
    res.render('edit' , { 
        layout: 'layouts/main-layout',
        title: 'Edit Page'});
});

app.get('/about', (req, res) => {
    res.render('about' , { 
        layout: 'layouts/main-layout',
        title: 'About Page'});
});

app.use((req, res) => {
    res.status(404);
    res.send('<h1>404</>');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});