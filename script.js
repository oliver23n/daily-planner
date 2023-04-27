

let date = new Date();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let hour = date.getHours();
let month = date.getMonth();
let day = date.getUTCDay();
let currentDate = date.getUTCDate();
let year = date.getFullYear();
let abr = '';


switch (currentDate){
  case 1:
  case 21:
  case 31:
    abr = 'st';
    break;
  case 2:
  case 22:
    abr ='nd'
    break;
  default:
    abr='th'
};
const days = {
  1:'Monday',
  2:'Tuesday',
  3:'Wednesday',
  4:'Thursday',
  5:'Friday',
  6:'Saturday',
  7:'Sunday'
};
const months = {
  0:'January',
  1:'February',
  2:'March',
  3:'April',
  4:'May',
  5:'June',
  6:'July',
  7:'August',
  8:'September',
  9:'October',
  10:'November',
  11:'December'
};

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$('#currentDay').text(days[day]+ ', ' + months[month]+' '+currentDate+abr);
$(function () {
  const timeblocks = $('.container-lg').children();
  //loop over timeblocks
  for(let i = 0; i<timeblocks.length; i++){
    //get id atr 
    // let currentId = timeblocks[i].attr('id');
   
    //compare to current time
    //update class

  }
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
});
