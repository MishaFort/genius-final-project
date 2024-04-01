let valueSet = false;

const nameInput = document.getElementById('user-tel');

nameInput.addEventListener('focus', () => {
  if (!valueSet) {
    nameInput.value = '+380';
    valueSet = true;
  }
});

let valueSetModal = false;

const nameInputModal = document.getElementById('user-tel-modal');

nameInputModal.addEventListener('focus', () => {
  if (!valueSetModal) {
    nameInputModal.value = '+380';
    valueSetModal = true;
  }
});
