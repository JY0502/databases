DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  userId INT,
  msgText VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */
-- create a table for users


-- maybe create a table for rooms

-- id primary
-- roomname


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

