$(document).ready(function(){

  $('.popup').delay(3000).fadeIn(1000).css({'position':'fixed'});
  $('.dialog').delay(3000).fadeIn(1000).css({'position':'fixed','top':'27%','left':'10%'});

  $('.user-tool .burger').click(function(e){
    $(e.currentTarget).parent().siblings('ul').toggleClass('display-block');
  });
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
})
  $('.dialog .close').click(function(e){
    $(this).parent('.dialog').fadeOut(500);
    $(this).parent('.dialog').siblings('.popup').fadeOut(500);
  });
  $('.popup').click(function(e){
    $('.dialog .close').click();
  });

})
