document.getElementById("mobile-menu").addEventListener("click", function() {
  document.querySelector(".nav-menu").classList.toggle("active");
});

toggleButton.addEventListener('click', function() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.setAttribute('aria-hidden', isExpanded);
  mobileMenu.classList.toggle('active');
});
