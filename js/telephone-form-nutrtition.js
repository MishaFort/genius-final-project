let valueSetModalNutrition = false;

const nameInputModalNutrition = document.getElementById(
  'user-tel-modal-nutrition'
);

nameInputModalNutrition.addEventListener('focus', () => {
  if (!valueSetModalNutrition) {
    nameInputModalNutrition.value = '+380';
    valueSetModalNutrition = true;
  }
});
