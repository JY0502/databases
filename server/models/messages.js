var db = require('../db');
//use db.query
module.exports = {
  getAll: function (callback) {
    //send a query to db to get all messages
    //create a queryString variable
    var queryString = `SELECT * FROM messages INNER JOIN users ON messages.userId = users.Id`;
    db.query(queryString, (err, results) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, results);
        console.log('SUCCESS getAll', results);
      }
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    console.log('PARAMS:', params);
    var newMessage = 'insert into messages(userId, msgText) values ((select users.id from users where users.username = ?), ?})';
    //insert into message values (0,(select users.id from users where users.name = message.username), message.message, message.createdAt);
    db.query(newMessage, params, (err, results, fields) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        callback(null, results);
        console.log('SUCCESS Message created', results);
      }
    });
  } // a function which can be used to insert a message into the database
};

// json: {
//   username: 'Valjean',
//   message: 'In mercy\'s name, three days is all I need.',
//   roomname: 'hello'
// }
