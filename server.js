var express = require('express')
  app = express(),
  port = process.eventNames.PORT || 80,
  mongoose = require('mongoose'),
  Episode = require('./api/models/feedModel'),
  bodyParser = require('body-parser');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Feeddb');

  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(bodyParser.json());

  var routes = require('./api/routes/apiRoutes');
  routes(app);

  app.listen(port);

  console.log('feed list RESTful API server started on: ' + port);