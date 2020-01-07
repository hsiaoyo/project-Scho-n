$(document).ready(function(){

  var $window = $(window),
  $sidebar = $('#sidebar'),
  $sidebarAfter = $sidebar.next(),
  sidebarY = $sidebar.height(),
  navY = $('#nav').outerHeight(true),
  headerY = $('#header').outerHeight(true),
  scrollY = navY + headerY

  if($window.width() < 768) {
      $window.on('scroll', scroll);$window.trigger('scroll');
    };
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
        $sidebarAfter.css('marginTop', sidebarY);
      };
      function _static(){
        $sidebar.css({
          'position': 'static',
          'top': '',
          'left': ''
        });
        $sidebarAfter.css('marginTop', 0);
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

});
