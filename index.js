const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
const CONFIG=require('./config/config');
let app = express(); // Export app for other routes to use
mongoose.Promise = global.Promise;

app.use(session({secret: 'kak', saveUninitialized: true,
resave: true, maxAge: 20000}));
 
  const port = process.env.PORT || 8700;
  app.use(bodyParser.urlencoded({ // Middleware
    extended: true
  }));

  mongoose.connect(CONFIG.DB, {   useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );

  app.use(cookieParser());

/**
 * Add & register body parser
 */

//  app.set('view-engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
 app.use(express.static('public'));

  app.use(bodyParser.json());

  const v1 = require('./router/v1');
app.use('/api/v1', v1);
app.use(require('./router/page'));

  app.listen(port, () => console.log(`Server is listening on port: ${port}`));