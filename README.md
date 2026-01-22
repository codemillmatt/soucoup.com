# soucoup.com

A developer blog built with Hugo and the Terminal theme, hosted on GitHub Pages.

## Local Development

```bash
# Install Hugo (macOS)
brew install hugo

# Clone with submodules
git clone --recurse-submodules https://github.com/msoucoup/soucoup.com.git

# Run local server
cd soucoup.com
hugo server -D
```

Visit `http://localhost:1313` to preview.

## Writing Posts

Create a new post in `content/posts/`:

```bash
hugo new posts/my-new-post.md
```

Or manually create a markdown file:

```markdown
---
title: "Your Post Title"
date: 2026-01-22
draft: false
tags: ["ai", "tutorial"]
categories: ["how-to"]
---

Your content here...
```

## Deployment

The site automatically deploys when you push to `main`:

1. Write your post in `content/posts/`
2. Open a pull request
3. Merge to `main`
4. GitHub Actions builds and deploys to GitHub Pages

## Enabling GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**, select **GitHub Actions**
3. Push to `main` to trigger the first deploy

## Newsletter

The subscribe page has a placeholder for [Buttondown](https://buttondown.email). 
To enable it:

1. Sign up at buttondown.email
2. Edit `content/subscribe.md`
3. Uncomment the form and add your username

## Theme

Using [Terminal](https://github.com/panr/hugo-theme-terminal) theme. 
To switch themes, change `theme` in `hugo.toml`.
