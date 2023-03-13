const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('open');
})

const pageHeaderHeight = document.getElementById('page-header').offsetHeight;
navMenu.style.setProperty('--page-header-height', `${pageHeaderHeight}px`);