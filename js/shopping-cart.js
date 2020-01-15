$(document).ready(function(){

  $('#my-product tbody').on('click', '.delete', function(e){
    var result = confirm('Are you sure to delete this product from your cart?');
    if (result){
      $(e.currentTarget).closest('tr').remove();
    }
  });

  // $('.quantity').on('click', 'option', function(e){
  //   var quantity = $(e.currentTarget).attr('value');
  //   var unitPrice = $(e.currentTarget).closest('td').sibilngs('.unit-price').html().praseFloat();
  //   $(this).closest('td').sibilngs('.total-amount').html(quantity*unitPrice);
  // });
  // 選擇數量
  // 讀出option中的value
  // 找到unit-price
  // 找到total-amount
  // total-amount=unit-price*value
});
