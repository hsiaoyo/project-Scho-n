$(document).ready(function(){
  $('#nav .burger').click(function(e){
    $(e.currentTarget).siblings('ul').toggleClass('display-block');
  });
})
