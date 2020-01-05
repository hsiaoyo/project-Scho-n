$(document).ready(function(){

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

  $('.hot-sale-slick').slick({});

  $('.sidebar-title').click(function(e){
    $(e.currentTarget).siblings().addClass('display-block')
  });

  $('.close').click(function(e){
    $(e.currentTarget).parent().removeClass('display-block')
  });

});
