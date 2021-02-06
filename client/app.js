
//Model

//if the submit button is clicked, then trigger the post request
function post() {
  console.log('This is the request');
  //prevent page from reloading
  $.ajax({
    url: '/addEntry',
    type: 'POST',
    dataType: 'json',
    //successful req and res, receive the data back
    success: (responseData) => {
      console.log('RESPONSE DATA in client ajax', responseData);
      //call the templating iteration function on the received data
      templateOnData(responseData);
    },
    error: () => {
      console.log('There was an error - this in the client ajax method');
    }
  });
};
post();
//View

//create function to iterate over results array and apply templating to array -> table of data appears on screen
var templateOnData = (data) => {
  var html = '';
  //iterate over the results array
  for (var i = 0; i < data.length; i++) {
    //add the template for each index to html var
    html += template(data[i]);
  }
  console.log('APPENDED', html)
  //append to the body
  $('logTable').append(html);
};

//create html template for the response
var template = _.template(
  "<div class='entry'>" +
    "<table>" +
      "<tr>" +
        "<td><%= day %></td>" +
        "<td><%= TimeSpent %></td>" +
        "<td><%= Yardage %></td>" +
        "<td><%= Notes %></td>" +
      "</tr>" +
    "</table>" +
  "</div>"
  );



//Controller

//Create event-listener for the submit button
$('submitButton').on('click', post);
