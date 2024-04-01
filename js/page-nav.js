let currentPage = 1;
let prevPage = 1;
let nextPage = 2;

function showPage(page) {
  // Hide all pages
  var pages = document.getElementsByClassName('page-grid');
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  // Show the selected page
  var selectedPage = document.getElementsByClassName('page-grid')[page - 1];
  selectedPage.style.display = 'grid';

  // Remove the active class from all buttons
  const buttons = document.querySelectorAll('.page-navigation__button');
  buttons.forEach(button => {
    button.classList.remove('page-navigation__button--active');
  });

  // Add the active class to the button for the current page
  const currentButton = document.querySelector(
    `.page-navigation__button[onclick="showPage(${page})"]`
  );
  currentButton.classList.add('page-navigation__button--active');

  // Disable the "Previous" button if we're on the first page
  if (page === 1) {
    document
      .querySelector('.page-navigation__button[onclick="showPage(prevPage)"]')
      .classList.add('disabled');
  } else {
    document
      .querySelector('.page-navigation__button[onclick="showPage(prevPage)"]')
      .classList.remove('disabled');
  }

  // Disable the "Next" button if we're on the last page
  if (page === 8) {
    document
      .querySelector('.page-navigation__button[onclick="showPage(nextPage)"]')
      .classList.add('disabled');
  } else {
    document
      .querySelector('.page-navigation__button[onclick="showPage(nextPage)"]')
      .classList.remove('disabled');
  }

  // Update the page variables
  prevPage = Math.max(1, page - 1);
  nextPage = Math.min(8, page + 1);
}
// Show the first page by default
showPage(1);
