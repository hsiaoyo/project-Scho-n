$(document).ready(function(){
  $('.user-tool .burger').click(function(e){
    $(e.currentTarget).parent().siblings('ul').toggleClass('display-block');
  });


})
