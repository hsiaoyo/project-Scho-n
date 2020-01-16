$(document).ready(function(){

  $('#my-product tbody').on('click', '.delete', function(e){
    var result = confirm('Are you sure to delete this product from your cart?');
    if (result){
      $(e.currentTarget).closest('tr').remove();
    }
  });

  $('.quantity').change(function(){
    var quantity = $(this).val();
    var unitPrice = $(this).closest('td').siblings('.second').find('.unit-price').text();
    unitPrice = Number(unitPrice);
    totalPrice = quantity * unitPrice;
    totalPrice = totalPrice.toFixed(2);
    $(this).closest('td').siblings('.fourth').find('.total-amount').text(totalPrice);
  });

});
