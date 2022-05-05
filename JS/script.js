$(document).ready(function () {
//   var h3 = document.querySelectorAll(".scrolltitle__item");
var oddEl = $('.scrolltitle:nth-child(odd) .scrolltitle__item');
var evenEl = $('.scrolltitle:nth-child(even) .scrolltitle__item');
oddEl.addClass('og-odd');
evenEl.addClass('og-even');
  var scrollableElement = document.body; 

  scrollableElement.addEventListener('wheel', checkScrollDirection);
  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        //up
        oddEl.removeClass('og-odd');
        evenEl.removeClass('og-even');
        oddEl.addClass('odd-class');
        evenEl.addClass('even-class');

        
    } else {
        //down
        oddEl.animate({scrollTop: 10}, 200);
        oddEl.removeClass('odd-class');
        evenEl.removeClass('even-class');
        oddEl.addClass('og-odd');
        evenEl.addClass('og-even');
    }
  }
  
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
