var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authRouter = require('./routes/auth');


// after the logger and before the router imports
const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const basketsRouter = require('./routes/baskets');
const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// add this right after the middleware using `express.static()`
// just before the router middleware
app.use(
    session({
      secret: 'COR123',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/auth', authRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Made routers for the corresponding routes

// ...

app.use('/baskets', basketsRouter);
app.use('/items', itemsRouter);
app.use('/orders', ordersRouter);

module.exports = app;
