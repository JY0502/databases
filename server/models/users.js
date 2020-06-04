var db = require('../db');
//use db.query
module.exports = {
  getAll: function (callback) {
    var allUsers = 'SELECT * From users;';
    db.query(allUsers, (err, results, fields) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, results);
        console.log('SUCCESS getAll users', results);
      }
    });
  },
  create: function (user, callback) {
    var newUser = `INSERT INTO users values (0, ${user.username});`;
    db.query(newUser, (err, results, fields) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, results);
        console.log('SUCCESS user created', results);
      }
    });
  }
};
