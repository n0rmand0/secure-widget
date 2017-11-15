$(document).ready(function(){
  var question = 0;
  var progress = 0;
  var pig = 0;

  var nextPig = function(){
    if (pig === 3) {
      pig = 1
    } else {
      pig++;
    }
    console.log("pig",pig);
    $(".sq__pig-group img").removeClass('is-active');
    $(".sq__pig-group img:nth-child("+pig+")").addClass('is-active');
  }


  var nextProgress = function(){
    if (progress === 3) {
      progress = 0
      $(".sq__progress").removeClass('is-active');
    } else {
      progress++;
    }
    console.log("progress",progress);

    $(".sq__progress:nth-child("+progress+")").addClass('is-active');
  }

  var nextQuestion = function() {
    if (question === 3) {
      question = 0
    } else {
      question++;
    }
    console.log("question",question);
    $(".sq__question").removeClass('is-active');
    $(".sq__question:nth-child("+question+")").addClass('is-active');

  }

  // initial functions
  nextPig();


  // buttons
  $(".sq-btn-next-pig").click( function() {
    nextPig();
  } )
  $(".sq-btn-next-progress").click( function() {
    nextProgress();
  } )
  $(".sq-btn-next-question").click( function() {
    nextQuestion();
  } )

})
