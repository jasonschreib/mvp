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