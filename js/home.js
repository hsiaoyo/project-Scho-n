$(document).ready(function(){
  $('.user-tool .burger').click(function(e){
    $(e.currentTarget).parent().siblings('ul').toggleClass('display-block');
  });

  // $('.thumbnail').hover(function(e){
  //   $(e.currentTarget).find('.add').fadeToggle();
  // });
  //
  // $('.thumbnail').hover(function(e){
  //   $(e.currentTarget).find('.browse').fadeToggle();
  // })
})
