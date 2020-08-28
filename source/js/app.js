let toggleMenuOpen = document.querySelector(".page-header__toggle--open");
let toggleMenuClose = document.querySelector(".page-header__toggle--close");
let headerMenu = document.querySelector(".page-header__menu");

toggleMenuOpen.addEventListener("click", function(event) {
  event.preventDefault();

  headerMenu.classList.remove('page-header__menu--closed');
});

toggleMenuClose.addEventListener("click", function (event) {
  event.preventDefault();

  headerMenu.classList.add('page-header__menu--closed');
});
