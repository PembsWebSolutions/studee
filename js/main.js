$(document).ready(function(){
  $(":submit").click(function(){
    alert('The Submit button was pressed');
  });

  $(".button--google a").click(function(){
    alert('The GOOGLE Link was pressed');
  });

  $(".button--facebook a").click(function(){
    alert('The FACEBOOK Link was pressed');
  });

  $(".content--textbutton-black").click(function(){
    alert('The Back button was pressed');
  });

  $(".content--textbutton").click(function(){
    alert('The Sign Up! button at the bottom of the page was pressed');
  });
});



