var createError  = require('http-errors');
var express      = require('express');
var path         = require('path');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var nodemailer   = require('nodemailer');

var indexRouter    = require('./routes/index');
var usersRouter    = require('./routes/users');
var pastriesRouter = require('./routes/pastries');

var mailAccount = require('./data/secret');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pastries', pastriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.post('/send', (req, res) => {
  const output = `
  <h3>Clarendon Pastry Report</h3>
  <ul>
  </ul>
  <h3>Other Requests:</h3>
  <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: mailAccount.user, 
      pass: mailAccount.pass
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"The Clarendon Buttery" <beurreClarendon@gmail.com>', // sender address
    to: 'themoose3@gmail.com', // list of receivers
    subject: 'Pastry Report', // Subject line
    text: 'Hello world?', // plain text body
    html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.redirect('http://www.google.com');
  });
});

module.exports = app;
