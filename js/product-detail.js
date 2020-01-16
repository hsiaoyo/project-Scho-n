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

  $('.tabs li').click(function(e){
    var index = $(e.currentTarget).index();
    $('.tabs li').removeClass('active').eq(index).addClass('active');
    $('.content').removeClass('active').eq(index).addClass('active');
  });

});
