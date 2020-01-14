$(document).ready(function(){

  $('li.languages').click(function(e){
    $(this).find('.language').toggleClass('display-block')
  });

  $('#nav .burger').click(function(e){
    $(this).siblings('ul').addClass('display-block');
    $(this).parents().siblings('.modal-background').addClass('display-block')
  });

  $('#nav .cart').click(function(e){
    $(this).parents().siblings('#cart').addClass('display-block');
    $(this).parents().siblings('.modal-background').addClass('display-block')
  });
  $('.modal-background').click(function(e){
    $(this).removeClass('display-block');
    $(this).siblings().find('#cart').removeClass('display-block');
    $(this).siblings().find('.navbar').removeClass('display-block');
  });

});
