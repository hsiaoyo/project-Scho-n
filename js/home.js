$(document).ready(function(){
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


})
