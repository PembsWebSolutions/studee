$(document).ready(function(){
  $(":submit").click(function(){
    alert('The Submit button was pressed');
  });

  $("#googlelink").click(function(){
    alert('The GOOGLE Link was pressed');
  });

  $("#facebooklink").click(function(){
    alert('The FACEBOOK Link was pressed');
  });

  $("#backbutton").click(function(){
    alert('The Back button was pressed');
  });

  $("#forgotpassword").first().click(function(){
    alert('The FORGOT PASSWORD button was pressed');
  });

  $("#signup").last().click(function(){
    alert('The Sign Up! button at the bottom of the page was pressed');
  });
});



