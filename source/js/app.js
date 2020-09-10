"use strict";

// Header Menu Toggler

let toggleMenu = document.querySelector(".menu-toggler");
let header = document.querySelector(".page-header");
let headerMobile = document.querySelector(".page-header__mobile");

if (toggleMenu && header && headerMobile) {
  toggleMenu.addEventListener("click", function (event) {
    event.preventDefault();

    if (this.classList.contains("menu-toggler--open")) {
      this.classList.remove("menu-toggler--open");
      headerMobile.classList.add("page-header__mobile--closed");
    } else {
      this.classList.add("menu-toggler--open");
      headerMobile.classList.remove("page-header__mobile--closed");
    }
  });

  // Header Change

  window.addEventListener("scroll", function () {
    if (window.scrollY > header.offsetHeight) {
      header.classList.add("page-header--alternate");
      toggleMenu.classList.add("menu-toggler--fixed");
    } else {
      header.classList.remove("page-header--alternate");
      toggleMenu.classList.remove("menu-toggler--fixed");
    }
  });
}

// Select Toggler

let selectDataToggle = document.querySelectorAll(".add-plan__field--select .custom-select--choose .custom-select__label");

if (selectDataToggle) {
  selectDataToggle.forEach(element => {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      this.classList.toggle("custom-select__label--active");
      this.closest(".custom-select").classList.toggle("custom-select--active");
      this.closest(".custom-select").querySelector(".custom-select__data").classList.toggle("custom-select__data--open");
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

let searchRevealButtons = document.querySelectorAll(".search__legend");

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

      this.closest(".search__fieldset").querySelector(".search__reveal").classList.toggle("search__reveal--show");
    });
  });
}

// Validation

let form = document.querySelector(".add-plan__form");
let formSubmit = document.querySelector(".add-plan__button[type='submit']");
let textareaElements = document.querySelectorAll(".add-plan__textarea");

if (form && formSubmit && textareaElements) {
  formSubmit.addEventListener("click", function (e) {
    let errorMsgs = document.querySelectorAll(".add-plan__error-msg");
    let stopSubmit = false;

    if (errorMsgs) {
      for (let i = 0; i < errorMsgs.length; i++) {
        errorMsgs[i].remove();
      }
    }

    for (let i = 0; i < textareaElements.length; i++) {
      let textareaElement = textareaElements[i];
      textareaElement.classList.remove("add-plan__textarea--error");

      if (textareaElement.checkValidity() == false) {
        textareaElement.classList.add("add-plan__textarea--error");
        textareaElement.insertAdjacentHTML("afterend", "<div class='add-plan__error-msg'>" + "Это поле должно быть заполнено" + "</div>")

        stopSubmit = true;
      }
    }

    if (stopSubmit) {
      e.preventDefault();
    }
  });
}

// Validation Email Form

let formEmail = document.querySelector(".ask-us__form");
let formEmailSubmit = document.querySelector(".ask-us__button[type='submit']");
let inputElement = document.querySelector(".ask-us__input");

if (formEmail && formEmailSubmit && inputElement) {
  formEmailSubmit.addEventListener("click", function (e) {
    let stopSubmit = false;

    inputElement.classList.remove("ask-us__input--error");
    inputElement.value="";

    if (inputElement.checkValidity() == false) {
      inputElement.classList.add("ask-us__input--error");
      inputElement.value = "Введите e-mail";

      stopSubmit = true;
    }

    if (stopSubmit) {
      e.preventDefault();
    }
  });
}
