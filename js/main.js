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

  $('#cart').on('click', '.remove', function(e){
    var result = confirm('You are deleting a product from your cart');
    if (result){
      $(e.currentTarget).closest('li').remove();
      subtotal();
    }
  });

  function subtotal(){
    var s = 0
    $('#cart li').each(function(){
      var price = $(this).find('.price').text();
      price = Number(price);
      var quantity = $(this).find('.quantity').text();
      quantity = Number(quantity);
      total = price * quantity;
      s += total
    });
    $('#subtotal').text(s.toFixed(2));
  }

});
