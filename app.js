const express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
const app = express();

const expressValidator = require('express-validator');

const passport = require('passport');
// setup ejs view engine
let path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//Import the mongoose module
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/cart-shop', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB Connection Successfull!")).catch((err) => {
    console.log(err);
});

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(expressValidator());
/// express sessions
app.use(session({
    secret: 'some deep deep deep secret',
    resave: true,
    saveUninitialized: true
//  cookie: { secure: true }
}));


// Express Messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
});

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req,res,next) {
   res.locals.cart = req.session.cart;
   res.locals.user = req.user || null;
   next();
});

// Set global errors variable
app.locals.errors = null;

// Set routes 
const products = require('./routes/product.js');
const cart = require('./routes/cart.js');
const users = require('./routes/users.js');;

app.use('/', products);
app.use('/cart', cart);
app.use('/users', users);

// start server
let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Server is up and running on ${PORT} ...`);
});
