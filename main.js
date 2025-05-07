// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) for elements
    const animateElements = document.querySelectorAll('.feature-card, .course-card, .testimonial-card, .note-card, .faculty-card, .category-card, .job-card');
    
    const animateOnScroll = function() {
      animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial state
    animateElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Floating animation for hero image
    const floatImage = document.querySelector('.float-animation');
    if (floatImage) {
      let position = 0;
      let direction = 1;
      const floatSpeed = 0.5;
      
      const float = function() {
        position += floatSpeed * direction;
        
        if (position > 10) direction = -1;
        if (position < -10) direction = 1;
        
        floatImage.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(float);
      };
      
      float();
    }
    
    // Gallery hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.querySelector('.gallery-overlay').style.bottom = '0';
      });
      
      item.addEventListener('mouseleave', function() {
        this.querySelector('.gallery-overlay').style.bottom = '-100%';
      });
    });
  });
const toggleButton = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggleButton.addEventListener('click', () => {
  const isVisible = mobileMenu.getAttribute('aria-hidden') === 'false';
  mobileMenu.setAttribute('aria-hidden', isVisible ? 'true' : 'false');
  mobileMenu.classList.toggle('show');
});
