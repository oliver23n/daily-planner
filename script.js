

let today = dayjs();
let hour = today.format('hh');
let currentDate = dayjs('04-21-2023');


console.log(currentDate.format('Do'))

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

//display current date 
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));
$(function () {
  let textSaved = [];
  const timeblocks = $('.container-lg').children('div');
  //loop over timeblocks
  for(let i = 0; i<timeblocks.length; i++){
    //get id atr 
     let currentId = $(timeblocks[i]).attr('id');
     //compare to current time
     //update class
     if(currentId<hour){
       $(timeblocks[i]).addClass('past');
     }else if (currentId == hour){
       $(timeblocks[i]).addClass('present');
     }else{
       $(timeblocks[i]).addClass('future');
     }

  }
  //display if there was something in local storage
  render ()

  // click to save to local storage
  $('.container-lg').on('click','.saveBtn',function(){
    //get the id of the div clicked
    const theId = $(this).parent().attr('id');
    //get the text from text area
    const text = $(this).parent().children('.description').val();
    //store the id and the text in object 
    const currentText = {
      // id:  text:
      id: theId,
      t: text.trim()
    }
    //store
    textSaved.push(currentText);
    //store to local 
    console.log(textSaved)
    localStorage.setItem("stored",JSON.stringify(textSaved));
  })

  function render(){
    //check if local is empty
    //if not show all the text to coresponding div

  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


});
