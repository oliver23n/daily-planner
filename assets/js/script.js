

let today = dayjs();
let hour = today.format('HH');
let currentDate = dayjs('04-21-2023');

console.log(currentDate.format('Do'))




//display current date 
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

$(function () {
  let textSaved = [];
  const timeblocks = $('.container-lg').children('div');
  //loop over timeblocks
  for (let i = 0; i < timeblocks.length; i++) {
    //get id atr 
    let currentId = $(timeblocks[i]).attr('id');
    //compare to current time
    //update class
    if (currentId < hour) {
      $(timeblocks[i]).addClass('past');
    } else if (currentId == hour) {
      $(timeblocks[i]).addClass('present');
    } else {
      $(timeblocks[i]).addClass('future');
    }

  }
  //display if there was something in local storage
  render();

  // click to save to local storage
  $('.container-lg').on('click', '.saveBtn', function () {
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

    localStorage.setItem("stored", JSON.stringify(textSaved));
  })

  function render() {
    //get local
    const stored = JSON.parse(localStorage.getItem("stored"));
    //check if local is not empty
    if (stored !== null) {
      textSaved = stored;
      //loop over stored 
      for (let j = 0; j < stored.length; j++) {
        //get the id
        let current = stored[j];
        let id = current.id;
        //place using id to coresponding timeblock
        $('#' + id).children('.description').val(current.t);
        console.log($('#' + id));
      }
    }
  }
});
