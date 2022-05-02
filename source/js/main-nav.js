
let tabletWidth = 768;

function hideMobileMenuResize() {

    if (window.innerWidth < tabletWidth) {
        let headerNav = document.getElementsByClassName("header-nav");
        if (headerNav.length > 0) {
          headerNav[0].classList.remove("header-nav__opened");
          headerNav[0].classList.add("header-nav__closed");
      }
  } else {
      let headerNav = document.getElementsByClassName("header-nav");
      if (headerNav.length > 0) {
          headerNav[0].classList.remove("header-nav__closed");
          headerNav[0].classList.add("header-nav__opened");
      }
  }
}

function toggleMobileMenu() {
        let headerNav = document.getElementsByClassName("header-nav");
        if (headerNav.length > 0) {
            headerNav[0].classList.toggle("header-nav__opened");
            headerNav[0].classList.toggle("header-nav__closed");
        }
}

function openNavButtonHandler() {
    let elements = document.getElementsByClassName("page-header__open-nav-button");
    if (elements.length > 0) {
        elements[0].addEventListener('click', toggleMobileMenu);
    }
}

function navCloseButtonHandler() {
    let elements = document.getElementsByClassName("header-nav__close-button");
    if (elements.length > 0) {
        elements[0].addEventListener('click', toggleMobileMenu);
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    hideMobileMenuResize();
    openNavButtonHandler();
    navCloseButtonHandler();
    window.addEventListener('resize', hideMobileMenuResize);

});
