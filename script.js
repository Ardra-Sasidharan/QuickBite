// Get the elements
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('nav ul');

// Toggle the menu when clicking on the menu icon
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
