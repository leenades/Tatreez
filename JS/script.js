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
  // var speed = .30;
  // setInterval(function () {
  //   oddElChildren.css("transform", "translate3d(" + speed + "%, 0, 0");
  //   evenElChildren.css("transform", "translate3d(-" + speed + "%, 0, 0");
  //   speed = speed + .30;
  //   if (speed >= 100) {
  //     speed = .30;
  //     console.log('speed is ', speed);
  //   }
  // }, 100);

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      //up
      oddElChildren.addClass("odd-class");
      evenElChildren.addClass("even-class");
      oddElChildren.removeClass("og-odd");
      evenElChildren.removeClass("og-even");

      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven + 5;
      incSpeedOdd = incSpeedOdd - 5;
    } else {
      //down
      if (
        oddElChildren.hasClass("odd-class") ||
        evenElChildren.hasClass("even-class")
      ) {
        oddElChildren.addClass("og-odd");
        evenElChildren.addClass("og-even");
        oddElChildren.removeClass("odd-class");
        evenElChildren.removeClass("even-class");
      }
      if (oddEl) {
        oddEl.css("transform", "translate3d(" + incSpeedOdd + "px, 0, 0)");
      }
      if (evenEl) {
        evenEl.css("transform", "translate3d(" + incSpeedEven + "px, 0, 0)");
      }
      incSpeedEven = incSpeedEven - 5;
      incSpeedOdd = incSpeedOdd + 5;
    }
  }
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
