# Primer-1-wy.github.io

wy-1226 的个人主页与技术博客，发布地址：<https://primer-1-wy.github.io/>。

## 网站结构

- `index.html`：网站主入口与作品集，优先展示项目，并提供简短介绍、博客和技能入口。
- `about/index.html`：独立的英文 `Profile / CV` 页面，以简历式结构介绍个人方向、技术能力、写作和联系方式。
- `blog/index.html`：独立博客首页，集中展示文章以及归档、分类和标签入口。
- `css/home.css`：个人主页专用样式，包括响应式布局、手机端导航与深浅色主题。
- `css/profile.css`：个人档案页的独立布局与响应式样式。
- `js/home.js`：主题切换、手机端菜单、滚动显示动画和页脚年份。
- `css/article.css`：文章、归档和其他旧博客页面的现代阅读样式。
- `js/article-shell.js`：统一博客子页面的导航、主页链接、站点标题和主题切换，由旧博客共用的 `js/next-boot.js` 加载。
- `images/og.png`：网站链接在社交平台分享时使用的预览图片。
- `archives/`、`categories/`、`tags/`：原 Hexo 博客的归档页面。
- `2022/`：原有博客文章。为保证历史链接有效，请勿随意修改目录名称。

## 日常修改

### 修改个人资料

编辑 `index.html` 中的主页介绍、技能和联系方式；完整个人介绍位于 `about/index.html`。教育经历、工作经历、奖项等正式简历信息应在内容确认后再加入，避免发布未经核实的信息。

主页是网站的主要入口，以项目展示为核心；个人档案页是补充入口，用于访客进一步了解个人背景。两者应避免重复大段介绍。

### 修改项目展示

在 `index.html` 的 `projects` 区域增删项目卡片，同时确认项目链接可以公开访问。项目尚未准备好时保留紧凑的私密项目准备状态，不公开项目名称、图片或详情链接。

### 更新博客内容

在 `blog/index.html` 的 `blog-list` 区域更新文章标题、摘要、日期和链接；需要在个人主页推荐时，再同步修改 `index.html` 的 `writing` 区域。旧文章内容与地址继续保留。

文章页内容仍来自原 Hexo 静态文件，现代阅读外观由 `css/article.css` 和 `js/article-shell.js` 统一维护。

### 文章管理方式

GitHub Pages 只负责托管静态文件，目前没有站内登录或数据库后台。现阶段可直接在 GitHub 编辑文章文件；长期维护建议先把文章迁移为 Markdown 并通过静态站点生成器构建，再按需要接入带身份验证的 CMS 管理界面。

### 调整视觉风格

主页与博客首页的颜色、间距和字体变量集中定义在 `css/home.css` 顶部的 `:root` 中；子页面的对应变量在 `css/article.css`。深色主题变量位于各文件的 `:root[data-theme="dark"]`。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 4173
```

然后访问 <http://127.0.0.1:4173/>。

## 发布

本站由 GitHub Pages 托管。确认修改无误后，将提交推送到 `main` 分支，GitHub Pages 会自动更新线上内容。

每次发布时请同步更新 [`CHANGELOG.md`](CHANGELOG.md)，简要记录新增、修改和修复的内容。
