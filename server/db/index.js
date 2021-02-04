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
//use the connection.query method to create a new entry
connection.query('INSERT INTO entries (day, TimeSpent, Yardage, Notes) VALUES (?, ?, ?, ?)', [data.day, data.timeSpent, data.yardage, data.notes], (err, results) => {
  //err first callback
  if (err) {
    throw err;
  }

});
};

///read all entries in the database
entryFunctions.readAll = () => {
  //use connection.query method to read all entries
};

module.exports = entryFunctions;