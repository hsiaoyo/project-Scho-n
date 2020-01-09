$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        }
     }
  });

  $( '#spinner' ).spinner();

  $('.plus').click(function(e){
    $(e.currentTarget).siblings('.ui-spinner').find('.ui-spinner-up').click();
  });
  // $('.slider-img img').click(function(e){
  //   var imgFile = $(e.currentTarget).attr('src');
  //
  //   $(e.currentTarget).parent().siblings().attr('src', 'imgFile');
  //
  // });


  $('.tabs li').click(function(e){

   var index = $(e.currentTarget).index();
   $('.tabs li').removeClass('active').eq(index).addClass('active');
   $('.content').removeClass('active').eq(index).addClass('active');

 });


});
