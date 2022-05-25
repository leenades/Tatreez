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
  var oddSpeed = 0.01;
  var evenSpeed = -0.01;
  var position = $(window).scrollTop();
  // setInterval(function () {
  //   oddSpeed = oddSpeed + 0.01;
  //   evenSpeed = evenSpeed - 0.01;
  //   $(window).scroll(function (event) {
  //     var scroll = $(window).scrollTop();
  //     if (scroll > position) {
  //       //down
  //       oddSpeed = oddSpeed;
  //       evenSpeed = evenSpeed;
  //     } else {
  //       oddSpeed = -oddSpeed;
  //       evenSpeed = Math.abs(evenSpeed);
  //     }
  //   });
  //   oddElChildren.css("transform", "translate3d(" + oddSpeed + "%, 0, 0");
  //   evenElChildren.css("transform", "translate3d(" + evenSpeed + "%, 0, 0");
  //   if (oddSpeed >= 100) {
  //     oddSpeed = 0.01;
  //   }
  //   if(Math.abs(evenSpeed) >= 100){
  //     evenSpeed = -0.01;
  //   }
  // }, 1);

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      // up
      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven + 15;
      incSpeedOdd = incSpeedOdd - 15;
    } else {
      //down
      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven - 15;
      incSpeedOdd = incSpeedOdd + 15;
    }
  }
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
