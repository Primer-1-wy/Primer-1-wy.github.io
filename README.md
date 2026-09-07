# Primer-1-wy.github.io

wy-1226 的个人主页与技术博客，发布地址：<https://primer-1-wy.github.io/>。

## 网站结构

- `index.html`：现代个人主页，包含简介、技能、项目和博客入口。
- `css/home.css`：个人主页专用样式，包括响应式布局与深浅色主题。
- `js/home.js`：主题切换、滚动显示动画和页脚年份。
- `images/og.png`：网站链接在社交平台分享时使用的预览图片。
- `archives/`、`categories/`、`tags/`：原 Hexo 博客的归档页面。
- `2022/`：原有博客文章。为保证历史链接有效，请勿随意修改目录名称。

## 日常修改

### 修改个人资料

编辑 `index.html` 中的个人介绍、技能和联系方式。

### 修改精选项目

在 `index.html` 的 `projects` 区域增删项目卡片，同时确认项目链接可以公开访问。

### 更新首页博客入口

在 `index.html` 的 `writing` 区域更新文章标题、摘要、日期和链接。旧文章页面仍使用原 Hexo 样式。

### 调整视觉风格

颜色、间距和字体变量集中定义在 `css/home.css` 顶部的 `:root` 中。深色主题变量位于 `:root[data-theme="dark"]`。

## 本地预览

在仓库目录运行：

```bash
python3 -m http.server 4173
```

然后访问 <http://127.0.0.1:4173/>。

## 发布

本站由 GitHub Pages 托管。确认修改无误后，将提交推送到 `main` 分支，GitHub Pages 会自动更新线上内容。

每次发布时请同步更新 [`CHANGELOG.md`](CHANGELOG.md)，简要记录新增、修改和修复的内容。

