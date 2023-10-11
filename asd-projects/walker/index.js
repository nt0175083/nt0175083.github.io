/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var KEY = {
    ENTER: "LEFT",
  };

  var KEY = {
    ENTER: "UP",
  };

  var KEY = {
    ENTER: "RIGHT",
  };

  var KEY = {
    ENTER: "DOWN",
  };

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  function handleKeyDown(event) {
    console.log(keydown);
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }

    else if (event.which === KEY.ENTER) {
      console.log("left pressed");
  }

    else if (event.which === KEY.ENTER) {
      console.log("up pressed");
  }

    else if (event.which === KEY.ENTER) {
      console.log("right pressed");

  }
    
   else if (event.which === KEY.ENTER) {
      console.log("down pressed");
  }
}
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
