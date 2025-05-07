// Toggle mobile menu
const toggleButton = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggleButton.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.setAttribute('aria-hidden', isExpanded);
  mobileMenu.classList.toggle('active');
});
// Toggle mobile menu
document.querySelector('.mobile-toggle').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.toggle('active');
});
