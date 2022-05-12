$(document).ready(function () {
//   var h3 = document.querySelectorAll(".scrolltitle__item");
var oddEl = $('.scrolltitle:nth-child(odd) .scrolltitle__item');
var evenEl = $('.scrolltitle:nth-child(even) .scrolltitle__item');
  var scrollableElement = document.body; 

  scrollableElement.addEventListener('wheel', checkScrollDirection);
  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        //up
        

        
    } else {
        //down
       
    }
  }
  
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
