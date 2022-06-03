$(document).ready(function () {
  //   var h3 = document.querySelectorAll(".scrolltitle__item");
  var oddEl = $(".scrolltitle:nth-child(odd)");
  var evenEl = $(".scrolltitle:nth-child(even)");
  var oddElChildren = $(".scrolltitle:nth-child(odd) .scrolltitle__item");
  var evenElChildren = $(".scrolltitle:nth-child(even) .scrolltitle__item");
  var scrollableElement = document.body;

  scrollableElement.addEventListener("wheel", checkScrollDirection);
  var incSpeedEven = 0;
  var incSpeedOdd = 0;
  var oddSpeed = 0.05;
  var evenSpeed = -0.05;
  var position = $(window).scrollTop();
  //what needs to be done is that, when scrolling up we subtract but when scrolling down we add. 
  //but by default the logical operation is addition
  setInterval(function () {
    oddSpeed = oddSpeed - 0.05;
    evenSpeed = evenSpeed + 0.05;
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > position) {
        //down
        oddSpeed = oddSpeed - 0.05;
        evenSpeed = evenSpeed + 0.05;
      } else {
        oddSpeed = oddSpeed + 0.05;
        evenSpeed = evenSpeed - 0.05;
      }
    });
    oddElChildren.css("transform", "translate3d(" + oddSpeed + "%, 0, 0");
    evenElChildren.css("transform", "translate3d(" + evenSpeed + "%, 0, 0");
    if (Math.abs(oddSpeed) >= 100) {
      oddSpeed = 0.05;
    }
    if(Math.abs(evenSpeed) >= 100){
      evenSpeed = 0.05;
    }
  }, 15);


  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      // up
      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven - 15;
      incSpeedOdd = incSpeedOdd + 15;
    } else {
      //down
      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven + 15;
      incSpeedOdd = incSpeedOdd - 15;
    }
  }
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
