$(document).ready(function(){


  var $window = $(window);
  var width = $window.width();
  $sidebar = $('#sidebar'),
  $sidebarAfter = $sidebar.next(),
  sidebarY = $sidebar.height(),
  navY = $('#nav').outerHeight(true),
  headerY = $('#header').outerHeight(true),
  scrollY = navY + headerY


//  原始寬度小於768，執行scroll finished
if (width < 768){
  $window.on('scroll', scroll);
  $window.trigger('scroll');
};
// resize後移除scroll
$window.resize(function(){
  var newWidth = $window.width();

  $(this).off('scroll', scroll);
//    若寬度小於768，執行scroll
  if(newWidth<768){
    $(this).on('scroll', scroll);
    $(this).trigger('scroll');
  }
});


  function scroll(){
     (scrollY <= $window.scrollTop())?
       _fixed():
       _static();
     function _fixed(){
       $sidebar.css({
         'position':'fixed',
         'top':0,
         'left':0
       });
     };
     function _static(){
       $sidebar.css({
         'position': 'static',
         'top': '',
         'left': ''
       });
     }
   };


  $( "#slider-range" ).slider({
    range: true,
    min: 10,
    max: 599,
    values: [ 30, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + "  -  $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );


  $('.sidebar-title').click(function(e){
    $(e.currentTarget).siblings().addClass('display-block')
  });

  $('.close').click(function(e){
    $(e.currentTarget).parent().removeClass('display-block')
  });

  $('.brand-filter li').click(function(e){
    $(e.currentTarget).find('i').toggleClass('display-block')
  });

  $('.list').click(function(e){
    $(this).parents('.show').siblings('.row').find('.product').removeClass('col-sm-6 col-lg-4').addClass('list-style');
    $(this).parents('.show').siblings('.row').find('img').addClass('list-style');
    $(this).parents('.show').siblings('.row').find('.stars').addClass('list-style');
    $(this).parents('.show').siblings('.row').find('.discount-sticker').addClass('list-style');
  });
  $('.thumbnail').click(function(e){
    $(this).parents('.show').siblings('.row').find('.product').removeClass('list-style').addClass('col-sm-6 col-lg-4');
    $(this).parents('.show').siblings('.row').find('img').removeClass('list-style');
    $(this).parents('.show').siblings('.row').find('.stars').removeClass('list-style');
    $(this).parents('.show').siblings('.row').find('.discount-sticker').removeClass('list-style');
  });

});
