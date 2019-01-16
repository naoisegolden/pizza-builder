var price = 21;
updatePrice();

function updatePrice() {
  $('.price strong').text('$' + price);
}

function onClickIngredient(buttonClass, ingredientClass, priceClass) {
  $(buttonClass).on('click', function() {
    $(this).toggleClass('active');
    $(ingredientClass).fadeToggle();
    $(priceClass).slideToggle();

    $(this).hasClass('active') ? price += 1 : price -= 1;
    updatePrice();
  });
}

onClickIngredient('.btn-pepperonni', '.pep', '.price-pepperonni');
onClickIngredient('.btn-mushrooms', '.mushroom', '.price-mushrooms');
onClickIngredient('.btn-green-peppers', '.green-pepper', '.price-green-peppers');


$('.btn-sauce').on('click', function() {
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
  $('.price-sauce').fadeToggle();

  $(this).hasClass('active') ? price += 3 : price -= 3;
  updatePrice();
});

$('.btn-crust').on('click', function() {
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
  $('.price-crust').fadeToggle();

  $(this).hasClass('active') ? price += 5 : price -= 5;
  updatePrice();
});
