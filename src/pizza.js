// Write your Pizza Builder JavaScript in this file.


function onClickIngredient(buttonClass, ingredientClass) {
  $(buttonClass).on('click', function() {
    $(ingredientClass).fadeToggle();
  });
}

onClickIngredient('.btn-pepperonni', '.pep');
onClickIngredient('.btn-mushrooms', '.mushroom');
onClickIngredient('.btn-green-peppers', '.green-pepper');
