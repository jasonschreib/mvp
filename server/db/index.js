const mysql = require('mysql');

//create connection with mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'exercise_log'
});

//now establish the connection
connection.connect((err) => {
  //error first callback
  if (err) {
    console.log('Connection failed');
  }
  //otherwise it succeeded
  console.log('Connection successful');
});


var entryFunctions = {};

///add an entry to the database
entryFunctions.create = (data) => {
  console.log('DAY DATA', data.day);
  //return a new promise
  return new Promise((resolve, reject) => {
    //use the connection.query method to create a new entry
    connection.query('INSERT INTO entries (day, TimeSpent, Yardage, Notes) VALUES (?, ?, ?, ?)', [data.day, data.timeSpent, data.yardage, data.notes], (err, results) => {
      //err first callback
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

///read all entries in the database
entryFunctions.readAll = () => {
  //create new promise
  return new Promise((resolve, reject) => {
    //use connection.query method to read all entries
    connection.query('SELECT * FROM entries', (err, results) => {
      //err first callback
      if (err) {
        return reject(err);
      }
      console.log(results);
      return resolve(results);
    });

  });
};

module.exports = entryFunctions;