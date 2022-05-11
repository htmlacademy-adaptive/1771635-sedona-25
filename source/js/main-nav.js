const navMain = document.querySelector('.header-nav__list');
const navToggle = document.querySelector('.navigation__button');

navMain.classList.remove('header-nav__list--no-js');
navMain.classList.add('header-nav__list--closed');
navToggle.classList.remove('navigation__button--no-js');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('navigation__button--opened');
  navMain.classList.toggle('header-nav__list--closed');
  if (navToggle.classList.contains('navigation__button--opened')) {
    navToggle.querySelector('span').textContent = 'Закрыть меню навигации';
  } else {
    navToggle.querySelector('span').textContent = 'Открыть меню навигации';
  }
});

