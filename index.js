// Scroll reveal effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__fadeInUp");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("h2, .card, .badge").forEach(el => observer.observe(el));

// Back to top button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme toggle (Dark/Light)
const toggleBtn = document.getElementById("theme-toggle");

// شوف لو فيه مود محفوظ في LocalStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
} else {
  toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
}

// عند الضغط على الزر
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="bi bi-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = '<i class="bi bi-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});
