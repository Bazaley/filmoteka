const bulbRef = document.querySelector('.bulb');
const footerRef = document.querySelector('.footer');
const footerTextREf = document.querySelector('.footer-text');

if (document.body.dataset.page === 'main') {
  const siteMainRef = document.querySelector('.site-main');
  bulbRef.addEventListener('click', onBulbMainClick.bind(this, siteMainRef));
}

if (document.body.dataset.page === 'library') {
  const mainLibraryRef = document.querySelector('.main-library');
  bulbRef.addEventListener(
    'click',
    onBulbLibraryClick.bind(this, mainLibraryRef)
  );
}

function onBulbLibraryClick(mainLibraryRef) {
  bulbRef.classList.toggle('is-off');
  mainLibraryRef.classList.toggle('theme-dark');
  footerRef.classList.toggle('theme-dark');
  footerTextREf.classList.toggle('theme-dark-text');
}

function onBulbMainClick(siteMainRef) {
  bulbRef.classList.toggle('is-off');
  siteMainRef.classList.toggle('theme-dark');
  footerRef.classList.toggle('theme-dark');
  footerTextREf.classList.toggle('theme-dark-text');
}
