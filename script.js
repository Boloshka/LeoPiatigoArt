const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((item) => observer.observe(item));

const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach((link) => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});
