const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const engineName = 'ejs';

app.set('view engine', engineName);
app.set('views','views');

const addBookRoute = require('./routes/add-book');
const printBookRoute = require('./routes/print-book-info');
const errorRoute = require('./routes/error404');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(addBookRoute.routes);
app.use(printBookRoute);
app.use(errorRoute);

app.listen(3000);