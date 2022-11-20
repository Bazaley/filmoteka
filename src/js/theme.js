const bulbRef = document.querySelector('.bulb');
const siteMainRef = document.querySelector('.site-main');
const footerRef = document.querySelector('.footer');
const footerTextREf = document.querySelector('.footer-text');

bulbRef.addEventListener('click', onBulbClick);

function onBulbClick() {
  bulbRef.classList.toggle('is-off');
  siteMainRef.classList.toggle('theme-dark');
  footerRef.classList.toggle('theme-dark');
  footerTextREf.classList.toggle('theme-dark-text');
}
