
//Model

//if the submit button is clicked, then trigger the post request
// function post() {
//   console.log('This is the request');
//   //prevent page from reloading
//   // event.preventDefault();
//   //create formdata
//   var myForm = document.getElementById('userInput');
//   var fd = new FormData(myForm);
//   console.log(fd);
//   $.ajax({
//     url: '/addEntry',
//     type: 'POST',
//     data: {
//       formdata: fd
//     },
//     processData: false,
//     contentType: false,
//     //successful req and res, receive the data back
//     success: (responseData) => {
//       console.log('RESPONSE DATA in client ajax', responseData);
//       //call the templating iteration function on the received data
//       templateOnData(responseData);
//     },
//     error: () => {
//       console.log('There was an error - this in the client ajax method');
//     }
//   });
// };
function postWithAxios(inputData) {
  console.log('This is the request');
  console.log(inputData);
  axios({
    method: 'post',
    url: '/addEntry',
    data: inputData
  })
  .then((responseData) => {
    console.log('RESPONSE DATA in client ajax', responseData.data);
    //call the templating iteration function on the received data
    templateOnData(responseData.data);
  }, (error) => {
    console.log(error);
  });
};





//View

//create function to iterate over results array and apply templating to array -> table of data appears on screen
var templateOnData = (data) => {
  var html = '';
  //iterate over the results array
  for (var i = 0; i < data.length; i++) {
    //edit the day property so that it only has date-month-year
    //splice this string at index 10
    var newDate = data[i].day.slice(0, 10);
    //set this new var to be the date prop
    data[i].day = newDate;
    //console.log(data[i]);
    //add the template for each index to html var
    html += template(data[i]);
  }
  // console.log('APPENDED', html)
  //append to the body
  $('#logTable').append(html);
};

//create html template for the response
var template = _.template(
  "<div class='entry'>" +
    "<table>" +
      "<tr>" +
        "<td><%= day %></td>" +
        "<td><%= time %></td>" +
        "<td><%= yardage %></td>" +
        "<td><%= notes %></td>" +
      "</tr>" +
    "</table>" +
  "</div>"
  );



//Controller

//event handler
function handleClick(e) {
  e.preventDefault();

  //create formdata
  var myForm = document.getElementById('userInput');
  console.log('FORM', myForm.elements);
  var fd = {
    'day': myForm.elements[0].value,
    'timeSpent': myForm.elements[1].value,
    'yardage': myForm.elements[2].value,
    'notes': myForm.elements[3].value
  };
  console.log('FORM DATA', fd);
  postWithAxios(fd);
}


//Create event-listener for the submit button

$('.submitButton').on('click', handleClick);

