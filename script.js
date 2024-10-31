// Select navbar and set its height dynamically
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

// Update CSS variable with the actual navbar height
document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
