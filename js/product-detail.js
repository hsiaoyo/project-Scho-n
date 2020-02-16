$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },

     },
    thumbs: true,

    // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
    thumbImage: false,

    // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
    thumbsPrerendered: true,

    // Class that will be used on the thumbnail container
    thumbContainerClass: 'owl-thumbs',

    // Class that will be used on the thumbnail item's
    thumbItemClass: 'owl-thumb-item'
  });

  $('.tabs li').click(function(e){
    var index = $(e.currentTarget).index();
    $('.tabs li').removeClass('active').eq(index).addClass('active');
    $('.content').removeClass('active').eq(index).addClass('active');
  });

});
