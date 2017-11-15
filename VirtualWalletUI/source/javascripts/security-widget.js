console.log("Gains");


$(document).ready(function(){

  var pig = 0;

  var nextPig = function(){
    if (pig === 3) {
      pig =1
    } else {
      pig = pig+1;
    }
    console.log("pig",pig);
    $(".sq__pig-group img").hide();
    $(".sq__pig-group img:nth-child("+pig+")").show();
  }


  
  // initial functions
  nextPig();


  // buttons
  $(".sq-btn-next").click( function() {
    nextPig();
  } )

})
