$(document).ready(function(){
  var question = 0;
  var progress = 0;
  var pig = 0;
  score=0;

  var nextPig = function(){
    if (pig === 3) {
      pig = 1
    } else {
      pig++;
    }
    console.log("pig",pig);
    $(".sq__pig-group img").removeClass('is-active');
    $(".sq__pig-group img:nth-child("+pig+")").addClass('is-active');
    if (pig != 1) {
      $(".sq__pig-group img:nth-child("+pig+")").addClass('is-animated');
    }
  }


  var nextProgress = function(){

    progress++;
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

  var showIntro = function(){
    $(".sq__intro").addClass("is-active");
  }



  var checkIfWin = function() {
    if (progress === 4){
      $(".sq__progress-group").hide();
      $(".sq__more").show();
    }

    if ( score === 0 && progress === 4 ){
      $(".sq__win-screen").addClass('is-active');

    } else if (score === 1 && progress === 4 ) {
      $(".sq__lose-screen").show();
    }
  }


  // initial functions
  nextPig();

  // buttons

  // show intro
  $(".sq__btn-start").click(function(){
    // $(".sq__pig-group img:nth-child(1)").addClass('is-animated');
    $(this).hide();
    setTimeout(function () {
      nextProgress();
      showIntro();
    }, 100);
  });

  // go to first Question
  $(".sq__btn-go").click(function(){
    $(".sq__intro").hide();
    setTimeout(function () {
      $(".sq__pig-group img:nth-child(1)").addClass('is-animated');
    }, 500);
    setTimeout(function () {
      nextQuestion();
      nextProgress();
    }, 2000);
  });


  // question answer right
  $("[data-answer=true]").click(function(){
    // $(".sq__question").hide();
    $(".sq__question:nth-child("+question+")  .sq__question-copy").hide();
    $(".sq__question:nth-child("+question+")  .sq__response__true").addClass('is-active');
  });
  // answer question wrong
  $("[data-answer=false]").click(function(){
    // $(".sq__question").hide();
      score++;
      $(".sq__question:nth-child("+question+")  .sq__response__false").addClass('is-active');
    $(".sq__question:nth-child("+question+")  .sq__question-copy").hide();

  });


  // next pig
  $(".sq-btn-next-pig, .next-pig").click( function() {
    $(".sq__block").removeClass('is-active');
    setTimeout(function () {
      nextPig();
    }, 500);

    setTimeout(function () {
      nextQuestion();
      nextProgress();
      checkIfWin();

    }, 2000);
  } )

  // no next pig
  $(".no-next-pig").click( function() {
    $(".sq__block").removeClass('is-active');
    nextQuestion();
    nextProgress();
    checkIfWin();

  })


  // close intro
  $('.sq__block-close').click(function(){
    $('.sq__block').removeClass('is-active');
    $(".sq__btn-start").show();
    progress = 0;
    $(".sq__progress").removeClass('is-active');


  });

  $(".sq-btn-next-progress").click( function() {
    nextProgress();
  } )
  $(".sq-btn-next-question").click( function() {
    nextQuestion();
  } )

})
