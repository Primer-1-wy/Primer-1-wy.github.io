const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeMeta = document.querySelector('meta[name="theme-color"]');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const savedTheme = localStorage.getItem('wy-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function applyTheme(theme) {
  root.dataset.theme = theme;
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀' : '☾';
  if (themeButton) {
    const isEnglish = root.lang.startsWith('en');
    const label = isEnglish
      ? (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
      : (theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    themeButton.setAttribute('aria-label', label);
  }
  if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#131512' : '#f4f1e8');
}

applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
if (themeButton) {
  themeButton.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('wy-theme', nextTheme);
  });
}

function closeMobileNav() {
  if (!menuButton || !mobileNav) return;
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', root.lang.startsWith('en') ? 'Open navigation menu' : '打开导航菜单');
  const icon = menuButton.querySelector('span');
  if (icon) icon.textContent = '☰';
}

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMobileNav();
      return;
    }
    mobileNav.hidden = false;
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', root.lang.startsWith('en') ? 'Close navigation menu' : '关闭导航菜单');
    const icon = menuButton.querySelector('span');
    if (icon) icon.textContent = '×';
  });
  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileNav));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMobileNav();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileNav();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
