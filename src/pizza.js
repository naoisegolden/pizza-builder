var price = 21;
updatePrice();

function updatePrice() {
  $('.price strong').text('$' + price);
}

function onClickIngredient(buttonClass, ingredientClass) {
  $(buttonClass).on('click', function() {
    $(this).toggleClass('active');
    $(ingredientClass).fadeToggle();

    $(this).hasClass('active') ? price += 1 : price -= 1;
    updatePrice();
  });
}

onClickIngredient('.btn-pepperonni', '.pep');
onClickIngredient('.btn-mushrooms', '.mushroom');
onClickIngredient('.btn-green-peppers', '.green-pepper');


$('.btn-sauce').on('click', function() {
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');

  $(this).hasClass('active') ? price += 3 : price -= 3;
  updatePrice();
});

$('.btn-crust').on('click', function() {
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');

  $(this).hasClass('active') ? price += 5 : price -= 5;
  updatePrice();
});
