$(document).ready(function() {
  var stickyNavTop = $('nav').offset().top;
   
  var stickyNav = function(){
    var scrollTop = $(window).scrollTop();
          
    if (scrollTop > stickyNavTop) { 
        $('nav').addClass('sticky-nav');
        $('body').css('margin-top','50px');
    } else {
        $('nav').removeClass('sticky-nav');
        $('body').css('margin-top','0px');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
        console.log('yolo');
    }
  };
   
  stickyNav();
   
  $(window).scroll(function() {
    stickyNav();
  });
});
