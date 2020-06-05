var models = require('../models');
//use models methods
module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        console.log(err);

      } else {
        res.status(200).json(results);
      }
    });
  }, //get usernames
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json(results);
      }
    });
  }
};
