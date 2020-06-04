var models = require('../models');
//use models methods
module.exports = {
  get: function (req, res, next) {
    models.users.getAll((err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
    next();
  }, //get usernames
  post: function (req, res, next) {
    models.users.create(req.body, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
    next();
  }
};
