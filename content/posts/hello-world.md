---
title: "Hello World: Building This Blog"
date: 2026-01-22
draft: false
tags: ["meta", "hugo"]
categories: ["how-to"]
---

Welcome to soucoup! This is the first post on my new developer blog.

## Why Another Blog?

I wanted a space to share thoughts on AI, write technical tutorials, and occasionally rant about the tech industry. Instead of using a platform like Medium or Substack, I decided to build something I fully own.

## The Stack

This blog runs on:

- **Hugo** - A blazing fast static site generator
- **Terminal Theme** - Because retro is cool
- **GitHub Pages** - Free, reliable hosting
- **GitHub Actions** - Automatic deploys on every merge

## How It Works

The workflow is simple:

1. Write a markdown file
2. Open a pull request
3. Merge it
4. GitHub Actions builds and deploys automatically

Here's an example of how posts are structured:

```markdown
---
title: "Your Post Title"
date: 2026-01-22
draft: false
tags: ["ai", "tutorial"]
---

Your content here...
```

## Code Highlighting

Since this is a developer blog, code snippets are essential. Here's some Python:

```python
def greet(name: str) -> str:
    """Return a greeting message."""
    return f"Hello, {name}! Welcome to soucoup."

if __name__ == "__main__":
    print(greet("World"))
```

And some TypeScript:

```typescript
interface BlogPost {
  title: string;
  date: Date;
  tags: string[];
  draft: boolean;
}

const createPost = (title: string): BlogPost => ({
  title,
  date: new Date(),
  tags: [],
  draft: true,
});
```

## What's Next

I'll be writing about:

- AI tools and how to use them effectively
- Code tutorials and best practices  
- Hot takes on the tech world

Stay tuned, and consider [subscribing](/subscribe) to get notified of new posts.

---

*Thanks for reading!*
