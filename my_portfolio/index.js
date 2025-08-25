// Simple scroll animation (optional)
const sections = document.querySelectorAll("section");
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInUp");
    }
  });
}, options);

sections.forEach(sec => observer.observe(sec));
