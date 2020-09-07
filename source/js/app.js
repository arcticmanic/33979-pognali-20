"use strict";

// Header Menu Toggler

let toggleMenu = document.querySelector(".menu-toggler");
let headerMenu = document.querySelector(".page-header__menu");

toggleMenu.addEventListener("click", function (event) {
  event.preventDefault();

  headerMenu.classList.toggle("page-header__menu--closed");
  this.classList.toggle("menu-toggler--open");
});

// Add Select

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

// Tariff Block Toggler

let toggleTariffsShow = document.querySelector(".add-profile__show");
let toggleTariffsHide = document.querySelector(".tariffs__close");
let toggleBlock = document.querySelector(".tariffs");

toggleTariffsShow.addEventListener("click", function (event) {
  event.preventDefault();

  toggleBlock.classList.add("tariffs--show");
})

toggleTariffsHide.addEventListener("click", function (event) {
  event.preventDefault();

  toggleBlock.classList.remove("tariffs--show");
});
