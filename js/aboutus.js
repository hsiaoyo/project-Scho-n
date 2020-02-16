$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
    }
  });

});
