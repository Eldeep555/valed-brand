// ===== Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Color mode (dark / light) with persistence
(function initTheme() {
  const stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const html = document.documentElement;

  const setTheme = (mode) => {
    html.setAttribute('data-bs-theme', mode);
    localStorage.setItem('theme', mode);
    document.getElementById('themeIcon').className = mode === 'dark'
      ? 'bi bi-moon-stars'
      : 'bi bi-sun';
  };

  setTheme(stored || (prefersDark ? 'dark' : 'light'));

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = html.getAttribute('data-bs-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
})();

// ===== Scroll reveal using IntersectionObserver
(function scrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => obs.observe(el));
})();

// ===== Smoothly update active nav link on scroll
(function activeNavOnScroll() {
  const sections = document.querySelectorAll('section[id], header#home');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  const setActive = (id) => {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      link.classList.toggle('active', href === `#${id}`);
    });
  };

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id || 'home');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

  sections.forEach(sec => spy.observe(sec));
})();

// ===== Contact form -> opens user's email client (mailto) with filled subject & body
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) return;

  const subject = encodeURIComponent(`New inquiry from ${name}`);
  const body = encodeURIComponent(
    `From: ${name} <${email}>\n\n${message}\n\n---\nSent from hassanelddeep.com portfolio`
  );

  const mailto = `mailto:hassanelddeep@yahoo.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;

  const alertBox = document.getElementById('formAlert');
  alertBox.className = 'alert alert-success mt-3';
  alertBox.textContent = 'Thanks! Your email client should open now. If not, you can email me directly at hassanelddeep@yahoo.com.';
});
