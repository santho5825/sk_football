

//AUDIO FILES, HERE TO RENDER BETTER
var goalSound = new Audio('Media/Audio/goalSound.mp3')
var crowd = new Audio('Media/Audio/crowd.mp3')
var crowd2 = new Audio('Media/Audio/crowd2.mp3')
var missedSound = new Audio('Media/Audio/missed.mp3')
var intro = new Audio('Media/Audio/intro.mp3')
var retry = new Audio('Media/Audio/retry.mp3')
var sCor, eCor;
var starts, xCor, yCor;

$(document).ready(function () {
  $(document).ready(function () {
  //save boolean
  var pause = false;
  //save items that with number
  var item=  $('.select-item');
  //save blocks
  var block=  $('.bg-block');
  //variable for counter
  var k =0;
  
  
   //interval function works only when pause is false
    setInterval(function () {
        if (!pause) {
            var $this = item.eq(k);
          
          if (item.hasClass('active'))  {
            item.removeClass('active');
          };
           block.removeClass('active').eq(k).addClass('active');
            $this.addClass('active');
          //increase k every 1.5 sec
            k++;
          //if k more then number of blocks on page
            if (k >= block.length ) {
              //rewrite variable to start over
                k = 0;
            }
        }
      //every 1.5 sec
    }, 1000);


  item.hover(function () {
    //remove active class from all except this
        $(this).siblings().removeClass("active");
       $(this).addClass('active');
      //remove active class from all
      block.removeClass('active');
    //add active class to block item which is accounted as index cliked item
      block.eq($(this).index()).addClass('active');
    //on hover stop interval function
        pause = true;
    }, function () {
    
    //when hover event ends, start interval function
        pause = false;
    });

});
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  $('.bet1').click(function () {
    $('input[name="pname"]').val('1000');
  });
  $('.bet2').click(function () {
    $('input[name="pname"]').val('5000');
  });
  $('.bet3').click(function () {
    $('input[name="pname"]').val('10000');
  });
  $("#hide-div").click(function(){
    $(".popup").hide();
  });
  $("#info-icon").click(function(){
    $(".popup").show();
  });
  $("#close_tab").click(function(){
    $(".popup2").show();
  });
  $("#popup_cancel").click(function(){
    $(".popup2").hide();
  });
  $(".play").click(function(){
    $(".bg_play").hide();
    $(".play").hide();
    $(".timer").show();
    $("#level").show();
    $(".levels").show();
    $(".showOdd").show();

   
  });
  $(".soccer-ball-icon").click(function(){
    $("#keepDiv").show();
    $("#keeper_center_down").show();
    $("#keeper_center_up").show();
    $("#keeper_save_down_left").show();
    $(".cashOut").show();
    if($('.level1').css('display')!='none'){
      $('.level1').html($('.level2').html()).show().siblings('p').hide();
    
    }else if($('.level2').css('display')!='none'){
      $('.level1').show().siblings('div').hide(); }
  });
 
  $("#toggle1").click(function(){
    $(".popup_text").show();
    $(".popup_text2").hide();
   
  });
 
  $("#toggle2").click(function(){
    $(".popup_text2").show();
    $(".popup_text").hide();
   
  });
  $("#volume").click(function(){
    crowd.pause()
          crowd2.pause()
          goalSound.pause()
          missedSound.pause()
   
  });
  
  $("#toggle1").click(function () {
    $('#toggle1').removeClass('active');
    $(this).addClass('active');
});
$('.betvalue p').click(function(e) {
  e.preventDefault(); //prevent the link from being followed
  $('.betvalue p').removeClass('selected');
  $(this).addClass('selected');
});
$('.popup p').click(function(e) {
  e.preventDefault(); //prevent the link from being followed
  $('.popup p').removeClass('activetab');
  $(this).addClass('activetab');
});

$(document).ready(function () {

      //save boolean
  var pause = false;
  //save items that with number
  var item2=  $('.select-item2');
  //save blocks
  var block1=  $('.bg-block-keeper');
  //variable for counter
  var k =0;
  
  
   //interval function works only when pause is false
    setInterval(function () {
        if (!pause) {
            var $this = item2.eq(k);
          
          if (item2.hasClass('active'))  {
            item2.removeClass('active');
          };
           block1.removeClass('active').eq(k).addClass('active');
            $this.addClass('active');
          //increase k every 1.5 sec
            k++;
          //if k more then number of blocks on page
            if (k >= block1.length ) {
              //rewrite variable to start over
                k = 0;
            }
        }
      //every 1.5 sec
    }, 1500);


  item2.hover(function () {
    //remove active class from all except this
        $(this).siblings().removeClass("active");
       $(this).addClass('active');
      //remove active class from all
      block1.removeClass('active');
    //add active class to block item which is accounted as index cliked item
      block1.eq($(this).index()).addClass('active');
    //on hover stop interval function
        pause = true;
    }, function () {
    
    //when hover event ends, start interval function
        pause = false;
    });
  

 

});
$(document).ready(function () {

  //save boolean
var pause = false;
//save items that with number
var item3=  $('.select-item3');
//save blocks
var block3=  $('.bg-block-keeper-up');
//variable for counter
var k =0;


//interval function works only when pause is false
setInterval(function () {
    if (!pause) {
        var $this = item3.eq(k);
      
      if (item3.hasClass('active'))  {
        item3.removeClass('active');
      };
       block3.removeClass('active').eq(k).addClass('active');
        $this.addClass('active');
      //increase k every 1.5 sec
        k++;
      //if k more then number of blocks on page
        if (k >= block3.length ) {
          //rewrite variable to start over
            k = 0;
        }
    }
  //every 1.5 sec
}, 1500);


item3.hover(function () {
//remove active class from all except this
    $(this).siblings().removeClass("active");
   $(this).addClass('active');
  //remove active class from all
  block3.removeClass('active');
//add active class to block item which is accounted as index cliked item
  block3.eq($(this).index()).addClass('active');
//on hover stop interval function
    pause = true;
}, function () {

//when hover event ends, start interval function
    pause = false;
});




});
$(document).ready(function () {

  //save boolean
var pause = false;
//save items that with number
var item4=  $('.select-item4');
//save blocks
var block4=  $('.bg-block-keeper_down_left');
//variable for counter
var k =0;


//interval function works only when pause is false
setInterval(function () {
    if (!pause) {
        var $this = item4.eq(k);
      
      if (item4.hasClass('active'))  {
        item4.removeClass('active');
      };
       block4.removeClass('active').eq(k).addClass('active');
        $this.addClass('active');
      //increase k every 1.5 sec
        k++;
      //if k more then number of blocks on page
        if (k >= block4.length ) {
          //rewrite variable to start over
            k = 0;
        }
    }
  //every 1.5 sec
}, 1500);


item4.hover(function () {
//remove active class from all except this
    $(this).siblings().removeClass("active");
   $(this).addClass('active');
  //remove active class from all
  block4.removeClass('active');
//add active class to block item which is accounted as index cliked item
  block4.eq($(this).index()).addClass('active');
//on hover stop interval function
    pause = true;
}, function () {

//when hover event ends, start interval function
    pause = false;
});




});


  var supportTouch = $.support.touch,
    scrollEvent = "touchmove scroll",
    touchStartEvent = supportTouch ? "touchstart" : "mousedown",
    touchStopEvent = supportTouch ? "touchend" : "mouseup",
    touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
  $.event.special.swipeupdown = {
    setup: function () {
      var thisObject = this;
      var $this = $(thisObject);
      $this.bind(touchStartEvent, function (event) {
        var data = event.originalEvent.touches ?
          event.originalEvent.touches[0] :
          event,
          start = {
            time: (new Date).getTime(),
            coords: [data.pageX, data.pageY],
            origin: $(event.target)
          },
          stop;

          starts = {
            time: (new Date).getTime(),
            coords: [data.pageX, data.pageY],
            origin: $(event.target)
          }


        function moveHandler(event) {
          if (!start) {
            return;
          }
          var data = event.originalEvent.touches ?
            event.originalEvent.touches[0] :
            event;
          stop = {
            time: (new Date).getTime(),
            coords: [data.pageX, data.pageY]
          };
          // sCor = start.coords;
          // eCor = stop.coords;
          if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
            event.preventDefault();
          }


        }
        $this
          .bind(touchMoveEvent, moveHandler)
          .one(touchStopEvent, function (event) {
            $this.unbind(touchMoveEvent, moveHandler);
            if (start && stop) {

              // if (stop.time - start.time < 1000 &&
              //   Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
              //   Math.abs(start.coords[0] - stop.coords[0]) < 75) {

              //   start.origin
              //     .trigger("swipeupdown")
              //     .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
              // }
              start.origin
                .trigger("swipeupdown")
                .trigger("swipeup")
            }
            start = stop = undefined;
          });
      });
    }
  };
  $.each({
    swipedown: "swipeupdown",
    swipeup: "swipeupdown"
  }, function (event, sourceEvent) {
    $.event.special[event] = {
      setup: function () {
        $(this).bind(sourceEvent, $.noop);
      }
    };
  });

  // setTimeout(() => {
  //   intro.play()
  // }, 1000);
  var counter = 60;
var interval = setInterval(function() {
    counter--;
    
    if (counter == -1) {
     		clearInterval(interval);
        return;
    }else{
    	$('#time').text(counter);
    }
}, 1000);


  var $timer = $('#timer')
  var $kick = $('#shot')
  var turn = 0
  var player1 = {
    team: 'Your Score',
    score: 0,
    attemptNum: 0,
    attempts: ['1stP1', '2ndP1', '3rdP1', '4thP1', '5thP1']
    // scoreBoard: $('#player1Score')
  }
  var kicked = false
  // var result = (($kick.height() / $timer.height()) * 100)
  var currentPlayer = player1



  window.onload = function () {

    setTimeout(() => {
      $('#home').text(player1.team)
      soundControl()
      $('#modal').css('display', 'none')

      // crowd.play()
      // crowd.onended = function () {
      //   this.play()
      // }
      // crowd2.play()
      // crowd2.onended = function () {
      //   this.play()
      // }
      newShot()


    }, 10000);

    $(document).on('mouseup', function(event){
      xCor = event.pageX;
      yCor = event.pageY;
      console.log(xCor, yCor)

      if(!starts) return;

      starts.origin
                .trigger("swipeupdown")
                .trigger("swipeup")
    })

    var leftCoordsX = [308, 253, 369, 273, 115];
    var leftCoordsY = [18, 23, 56, 10, 83];

    var rightCoordsX = [586 , 644 , 549 , 576, 727];
    var rightCoordsY = [18, 23, 56, 10, 83];

    var upCoordsX = [400, 440];
    var upCoordsY = [18];


    $('#ball').on('swipeup', function (p, p2) {
     // $('#ball').css({'top':yCor, 'left': xCor});

    var goalKeeper = {
      width: $('.gk-idle').outerWidth(),
      left: $('.gk-idle').offset().left
    }

    var ovelapped = isOverlap('.gk-idle', event);
    //var isDirection = parseInt($('#goal_post').outerWidth() / 2) <= (xCor + goalKeeper.width) ? "right" : "left";
    var isDirection = '';

    if(!ovelapped){
      if(goalKeeper.left > xCor){
        isDirection = 'left';
      }else {
        isDirection = 'right';
      }
    }else{
       if(yCor < $('.gk-idle').height() / 2){
         isDirection = 'up'
       }else {
         isDirection = 'down';
       }
    }

    switch(isDirection){
      case 'left':
        xCor = leftCoordsX[Math.floor(Math.random()*leftCoordsX.length)];
        yCor = leftCoordsY[Math.floor(Math.random()*leftCoordsY.length)];;
        break;
      case 'right':
        xCor = rightCoordsX[Math.floor(Math.random()*rightCoordsX.length)];
        yCor = rightCoordsY[Math.floor(Math.random()*rightCoordsY.length)];;
        break;
      case 'up':
        xCor = upCoordsX[Math.floor(Math.random()*upCoordsX.length)];
        yCor = upCoordsY[Math.floor(Math.random()*upCoordsY.length)];
      break;
      default:
          
    }
    
          
    $('#ball').css({'position':'absolute'}).animate({
      top: yCor,
      left: xCor,
    }, 200, function(){
      setTimeout(function(){
        $('#ball').removeAttr('style');
        $('.goal_post').removeClass('kicked');
        $('.goal_post').removeClass(isDirection);
        starts = null;
      }, 1500);
    })

    $('.goal_post').addClass('kicked');
    $('.goal_post').addClass(isDirection);
      // console.log("BBDD:",sCor);
      // console.log("BBFF:",eCor);
      // var scrWidth = window.innerWidth;
      // var isDirection = parseInt(scrWidth / 2) <= eCor[0] ? "R" : "L";
      // var getRandom = Math.floor(Math.random() * 7);
      // var leftBall = "ballLeft" + isDirection + getRandom;

      // $.Animation( this, {
      //   x: eCor[0],
      //   y: eCor[1]
      // }, { 
      //   duration: 10
      // })
    
      // if (getRandom > 3) {
      //   $("#" + currentPlayer.attempts[currentPlayer.attemptNum]).addClass('missed');
      //   currentPlayer.attemptNum++
      //   $('#notGoal').addClass('pop')
      //   $('#ball').addClass('ballCatched')
      //   $('#goalkeeper').addClass('keeperCatched')
      //   missedSound.play()
      //   turn++
      // } else {
      //   currentPlayer.score += 1
      // //  $('#ball').addClass(leftBall)
      //   $('#goalkeeper').addClass('keeperMissed')
      //   $('#goal').addClass('pop')
      //   // goalSound.play()
      //   $('#ball').css({'transform': 'translate(' + xCor + 'px, ' + yCor + 'px)'})
      //   turn++
      // }
      // setTimeout(newShot, 3000)
      // $('#homeScore').text(player1.score);

      // $('.goal_post').addClass('kicked');
      // $('.goal_post').addClass('right');
 
      // if (winner()) {
      //   setTimeout(restart, 1000)
      // }

    });

  }
  //==Prepare to shoot

  console.log('running')

  function isOverlap(idOne,event){
    var objOne=$(idOne)
         offsetOne = objOne.offset(),
        topOne=offsetOne.top,
        topTwo=event.pageY,
        leftOne=offsetOne.left,
        leftTwo=event.pageX,
        widthOne = objOne.width()- 100,
        widthTwo = $('#ball').outerWidth(),
        heightOne = objOne.height(),
        heightTwo = $('#ball').height();
    var leftTop = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             rightTop = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo > topOne && topTwo < topOne+heightOne,             leftBottom = leftTwo > leftOne && leftTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne,             rightBottom = leftTwo+widthTwo > leftOne && leftTwo+widthTwo < leftOne+widthOne                  && topTwo+heightTwo > topOne && topTwo+heightTwo < topOne+heightOne;
    return leftTop || rightTop || leftBottom || rightBottom;
}

  function newShot() {
    //currentPlayer = whoseTurn();
    currentPlayer = player1;
    ($kick).animate({
      height: '0%'
    }, 1000).promise().done(function () {
      kicked = false
      $('#playerOn').addClass('playing')
      $('.playing').html(currentPlayer.team + "'s turn")
      $('#onGameFeed').removeClass('pop')
      $('#notGoal').removeClass('pop')
      $('#goal').removeClass('pop')
      $('#ball').removeClass('ballLeftL0 ballLeftL1 ballLeftL2 ballLeftL3 ballLeftR0 ballLeftR1 ballLeftR2 ballLeftR3')
      $('#ball').removeClass('ballOut')
      $('#ball').removeClass('ballCatched')
      $('#goalkeeper').removeClass('keeperCatched')
      $('#goalkeeper ').removeClass('keeperMissed')
     
     
    })
  }

  function winner() {
    if (player1.score == 1) {
      return "wins the game!"
    } else {
      return "Loose the game!"
    }

  }


  function restart() {
    $('.goal_post').removeClass('kicked');
    $('.goal_post').removeClass('right');
    // var msg = confirm(winner() + " , Play Again?");
    // if (msg) {
    //   player1.score = 0
    //   player1.attemptNum = 0
    //   $('.attempt').removeClass('missed goal')
    //   $('#homeScore').text(player1.score)
    //   turn = 0
    // } else {
    //   if (winner !== "It's a Tie")
    //     alert('Thank you for playing')
    // }
  }

  function soundControl(e) {
    $('#audio').prop('type', 'button')
    $('#audio').click(function (e) {
      e.preventDefault()
      if ($(e.target).is('#audio')) {
        if ($('#audio').hasClass("unmuted")) {
          crowd.pause()
          crowd2.pause()
          goalSound.pause()
          missedSound.pause()
          $('#audio').removeClass('unmuted').addClass('muted')
        } else {
          $('#audio').removeClass('muted').addClass('unmuted')
          // crowd.play()
          // crowd2.play()
          crowd.pause()
          crowd2.pause()
        }
      }
    })
  }
  // function onTie() {
  //
  // }

})

