//this script controls the typed.js scipt. Setting in which element should be type in and what will be typed here

$(function(){
    $("#type-here").typed({
      strings: ["&nbsp;Mgr. Klára Pitlachová"],
      typeSpeed: 30
    });
});

$(document).ready(function(){
  $("h1 .sub-headline").delay(1800).animate({opacity: 1});
  $("#mobile-portrait").delay(2100).animate({opacity: 1});
  $("#main-quotation").delay(2500).animate({opacity: 1});
  $("#phone-number").delay(3300).animate({opacity: 1});
});
