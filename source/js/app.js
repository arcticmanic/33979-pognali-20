"use strict";

let toggleMenuOpen = document.querySelector(".page-header__toggle--open");
let toggleMenuClose = document.querySelector(".page-header__toggle--close");
let headerMenu = document.querySelector(".page-header__menu");

toggleMenuOpen.addEventListener("click", function(event) {
  event.preventDefault();

  headerMenu.classList.remove("page-header__menu--closed");
});

toggleMenuClose.addEventListener("click", function (event) {
  event.preventDefault();

  headerMenu.classList.add("page-header__menu--closed");
});

let selectDataClose = document.querySelectorAll(".custom-select__data-close");
let selectDataOpen = document.querySelectorAll(".add-plan__field--select .custom-select__label");
let customSelectAdd = document.querySelectorAll(".custom-select--add .custom-select__label");

selectDataClose.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    this.closest(".custom-select__data").classList.remove("custom-select__data--open");
  });
});

selectDataOpen.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    this.closest(".custom-select").querySelector(".custom-select__data").classList.add("custom-select__data--open");
  });
});

customSelectAdd.forEach(element => {
  element.addEventListener("click", function (event) {
    event.preventDefault();

    function insertAfter(newNode, referenceNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    let oldSelect = document.querySelector(".custom-select--empty").closest(".add-plan__field--select");
    let newSelect = oldSelect.cloneNode(true);
    let allSelects = document.querySelectorAll(".add-plan__field--select");
    let lastSelect = allSelects[allSelects.length - 1];
    // let parentNode = this.closest(".add-plan__step");

    insertAfter(newSelect, lastSelect);

    console.log(newSelect)
  });
});
