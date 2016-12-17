// Write your Pizza Builder JavaScript in this file.


function onClickIngredient(buttonClass, ingredientClass) {
  $(buttonClass).on('click', function() {
    $(this).toggleClass('active');
    $(ingredientClass).fadeToggle();
  });
}

onClickIngredient('.btn-pepperonni', '.pep');
onClickIngredient('.btn-mushrooms', '.mushroom');
onClickIngredient('.btn-green-peppers', '.green-pepper');


$('.btn-sauce').on('click', function() {
  $(this).toggleClass('active');
  $('.sauce').toggleClass('sauce-white');
});

$('.btn-crust').on('click', function() {
  $(this).toggleClass('active');
  $('.crust').toggleClass('crust-gluten-free');
});