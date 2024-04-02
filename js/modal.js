const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

/* const modalBtnOpenFooter = document.querySelector(".footer-modal-btn-open"); */

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

/* modalBtnOpenFooter.addEventListener("click", toggleModal); */

// Close the modal window by clicking outside of it
document.addEventListener('click', event => {
  if (event.target === modal) {
    toggleModal();
  }
});
