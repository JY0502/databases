var models = require('../models');
//use models methods
module.exports = {
  get: function (req, res, next) {
    //use models.messages.getAll
    models.messages.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
    next();
    //respond with all messages
  }, // a function which handles a get request for all messages-- this function help us get all messages
  post: function (req, res, next) {
    console.log('controller messages.js POST REQUEST:', req.body);
    models.messages.create(req.body, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
    next();
  }// a function which handles posting a message to the database
};

//user sends data to server
//server processes data
//server posts data in database
//server responds with success status code;