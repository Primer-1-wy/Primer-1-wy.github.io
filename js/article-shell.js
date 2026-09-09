const articleRoot = document.documentElement;
const canonicalHome = 'https://primer-1-wy.github.io/';
const storedArticleTheme = localStorage.getItem('wy-theme');
const articlePrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setArticleTheme(theme) {
  articleRoot.dataset.theme = theme;
  const toggle = document.querySelector('.article-theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'dark' ? '☀' : '☾';
    toggle.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
  }
}

document.querySelectorAll('a.brand, .menu-item-home a').forEach((link) => {
  link.href = canonicalHome;
});

const articleTitle = document.querySelector('.site-title');
if (articleTitle) articleTitle.textContent = 'wy-1226';

const articleMenu = document.querySelector('.site-nav .menu');
if (articleMenu) {
  const currentPath = window.location.pathname;
  const links = [
    { label: '主页', href: '/' },
    { label: '博客', href: '/blog/' },
    { label: '归档', href: '/archives/' },
    { label: '分类', href: '/categories/' },
    { label: '标签', href: '/tags/' },
    { label: '个人档案', href: '/about/' }
  ];

  articleMenu.replaceChildren(...links.map(({ label, href }) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    item.className = 'menu-item';
    link.href = href;
    link.textContent = label;

    const isBlogHome = href === '/blog/' && currentPath === '/blog/';
    const isSection = href !== '/' && href !== '/blog/' && currentPath.startsWith(href);
    if (isBlogHome || isSection) item.classList.add('menu-item-active');

    item.append(link);
    return item;
  }));
}

const articleHeader = document.querySelector('.header-inner');
if (articleHeader) {
  const toggle = document.createElement('button');
  toggle.className = 'article-theme-toggle';
  toggle.type = 'button';
  toggle.addEventListener('click', () => {
    const nextTheme = articleRoot.dataset.theme === 'dark' ? 'light' : 'dark';
    setArticleTheme(nextTheme);
    localStorage.setItem('wy-theme', nextTheme);
  });
  articleHeader.append(toggle);
}

setArticleTheme(storedArticleTheme || (articlePrefersDark ? 'dark' : 'light'));
