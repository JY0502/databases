var db = require('../db');
//use db.query
module.exports = {
  getAll: function (callback) {
    var allUsers = 'SELECT * From users';
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
  create: function (params, callback) {

    var newUser = 'INSERT INTO users (username) values (?)';
    db.query(newUser, params, (err, results, fields) => {
      console.log(db.sql);
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
