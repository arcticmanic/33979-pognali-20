"use strict";

// Header Menu Toggler

let toggleMenu = document.querySelector(".menu-toggler");
let headerMenu = document.querySelector(".page-header__menu");

if (toggleMenu && headerMenu) {
  toggleMenu.addEventListener("click", function (event) {
    event.preventDefault();

    headerMenu.classList.toggle("page-header__menu--closed");
    this.classList.toggle("menu-toggler--open");
  });
}

// Add Select

let selectDataToggle = document.querySelectorAll(".add-plan__field--select .custom-select__label");
let customSelectAdd = document.querySelectorAll(".custom-select--add .custom-select__label");

if (selectDataToggle && customSelectAdd) {
  selectDataToggle.forEach(element => {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      this.classList.toggle("custom-select__label--active");
      this.closest(".custom-select").classList.toggle("custom-select--active");
      this.closest(".custom-select").querySelector(".custom-select__data").classList.toggle("custom-select__data--open");
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

      insertAfter(newSelect, lastSelect);

    });
  });
}

// Tariff Block Toggler

let toggleTariffsShow = document.querySelector(".add-profile__show");
let toggleTariffsHide = document.querySelector(".tariffs__close");
let toggleBlock = document.querySelector(".tariffs");

if (toggleTariffsShow && toggleTariffsHide && toggleBlock) {
  toggleTariffsShow.addEventListener("click", function (event) {
    event.preventDefault();

    toggleBlock.classList.add("tariffs--show");
  })

  toggleTariffsHide.addEventListener("click", function (event) {
    event.preventDefault();

    toggleBlock.classList.remove("tariffs--show");
  });
}

// Filter Block Toggler

let closeFilterClose = document.querySelector(".filter__collapse");
let toggleFilter = document.querySelector(".filter__button");
let filter = document.querySelector(".filter");

if (closeFilterClose && toggleFilter && filter) {
  toggleFilter.addEventListener("click", function (event) {
    event.preventDefault();

    filter.classList.toggle("filter--expanded");
    this.classList.toggle("filter__button--show");

    if (filter.classList.contains("filter--expanded")) {
      this.querySelector("span").textContent = "Свернуть";
    } else {
      this.querySelector("span").textContent = "Показать все";
    }
  })

  closeFilterClose.addEventListener("click", function (event) {
    event.preventDefault();

    filter.classList.remove("filter--expanded");
    toggleFilter.classList.toggle("filter__button--show");

    if (filter.classList.contains("filter--expanded")) {
      toggleFilter.querySelector("span").textContent = "Свернуть";
    } else {
      toggleFilter.querySelector("span").textContent = "Показать все";
    }
  })
}

// Search Block Toggler

let searchRevealButtons = document.querySelectorAll(".search__reveal");

if (searchRevealButtons) {
  searchRevealButtons.forEach(element => {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      let fieldset = this.closest(".search__fieldset").querySelector(".search__list");

      if (fieldset) {
        fieldset.classList.toggle("search__list--show");
      } else {
        fieldset = this.closest(".search__fieldset").querySelector(".search__level");
        fieldset.classList.toggle("search__level--show");
      }

      this.classList.toggle("search__reveal--show");
    });
  });
}
