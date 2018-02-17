$('#close-nav').click(function(){
  $('#nav-hamburger').removeClass('menu-opened').addClass('menu-closed');
  $('#nav-mobile-bar').removeClass('menu-opened').addClass('menu-closed');
});

$('#nav-hamburger').click(function(){
  $('#nav-hamburger').removeClass('menu-closed').addClass('menu-opened');
  $('#nav-mobile-bar').removeClass('menu-closed').addClass('menu-opened');
});

//if clicked on link, hamburger icon will change to default
$('#nav-mobile-bar a').click(function(){
  $('#nav-hamburger').removeClass('menu-opened').addClass('menu-closed');
  $('#nav-mobile-bar').removeClass('menu-opened').addClass('menu-closed');
});
