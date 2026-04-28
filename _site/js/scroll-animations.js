// scroll-animations.js
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '0px 0px -50px 0px' 
  });

  // Observe semua elemen
  document.querySelectorAll('h1, h2, h3, h4, p, .quarto-grid-item, .about-entity, .section-label, .quarto-title h1.title, .about-image img')
    .forEach(el => observer.observe(el));
});