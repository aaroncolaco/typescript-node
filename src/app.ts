'use strict';

import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import Config from './config';

const users = require('./users/router');

const app: express.Express = express();

app.use(Config.getEnv() === 'development' ? logger('dev') : logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  console.error(`\nError: ${err.status || 500}`, err, '\n\n'); // print to console even in production

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.json({
    status: err.status || 500,
    message: 'Check logs'
  });
});


export {
  app
}

