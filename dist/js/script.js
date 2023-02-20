// Navbar fixed
window.onscroll = function () {
 const header = document.querySelector('header');
 const fixedNav = header.offsetTop;
 const toTop = document.querySelector('#toTop');

 if (window.pageYOffset > fixedNav) {
  header.classList.add('navbar-fixed');
  toTop.classList.remove('hidden');
  toTop.classList.add('flex');
 } else {
  header.classList.remove('navbar-fixed');
  toTop.classList.remove('flex');
  toTop.classList.add('hidden');
 }
};

// Humberger Menu
const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function () {
 humburger.classList.toggle('humburger-active');
 navMenu.classList.toggle('hidden');
});

// Hidden links
window.addEventListener('click', function (e) {
 if (e.target !== humburger && e.target !== navMenu) {
  humburger.classList.remove('humburger-active');
  navMenu.classList.add('hidden');
 }
});

// Dark mode
const darkToggle = document.querySelector('#darkToggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
 darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
 darkToggle.checked ? (localStorage.theme = 'dark') : (localStorage.theme = 'light');
});

// Dark mode on load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 darkToggle.checked = true;
} else {
 darkToggle.checked = false;
}
