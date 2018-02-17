//window min-width to let the code blow execute
var minWidth = 11720; //40em * 16px
$(window).scroll(function(){ //whenever window scroll run code inside

  var wScroll = $(this).scrollTop(); //This variable counts number of pixels from top

  //change color of hamburger menu if on white background
  if($('#column-content').offset().top < (wScroll + 20)){
    $('#nav-hamburger').addClass('black-hamburger').removeClass('white-hamburger');
  } else {
    $('#nav-hamburger').addClass('white-hamburger').removeClass('black-hamburger');
  }

  //window.innerWidth
  if($(window).width() > minWidth){
    $('#landing-page').css({
      'transform' : 'translate(0px, ' + wScroll / 4 + 'px)'
    });

    var landingDIM = wScroll / $('#column-content').offset().top;
    $('#landing-page-DIM').css({
      'opacity' : landingDIM
    });
  } else {
    return false;
  }
});
