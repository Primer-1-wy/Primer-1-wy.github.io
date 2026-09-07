const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const savedTheme = localStorage.getItem('wy-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  themeButton.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
  themeMeta.setAttribute('content', theme === 'dark' ? '#131512' : '#f4f1e8');
}

applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
themeButton.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem('wy-theme', nextTheme);
});

document.querySelector('#year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
