# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** people who decide whether Matt is worth hiring, booking, or quoting: hiring managers and engineering leaders, conference organizers and podcast hosts, and journalists looking for an informed voice. They usually arrive from a talk, a search for his name, a shared post, or a social link, and they need to judge his credibility and point of view quickly.
- **Secondary:** working developers (often .NET/C#, but not only) who come for a specific post or a code walkthrough and stay because the thinking is useful. Their sharing and following is what builds the reputation the primary readers see.

## Product Purpose

soucoup.com is Matt Soucoup's personal site: a blog, a portfolio, and the home of his personal brand in one place. It exists to build a reputation strong enough that opportunities (jobs, speaking slots, press requests) come to him, and that hiring him becomes an obvious decision whenever he looks.

Success means a visitor can tell within a minute who Matt is, what he thinks, and why he's credible, and that readers return, subscribe, and share his writing.

## Positioning

A working developer advocate's view on **the developer's place in an agentic, AI-assisted coding future**: where developers still add value, and which problems they are uniquely positioned to solve. The argument rests on daily hands-on work in .NET and C# and on leading .NET developer advocacy at Microsoft, not on commentary from the sidelines. Big-picture essays and down-and-dirty code posts back each other up.

## Operating Context

- Hugo static site, deployed to GitHub Pages via GitHub Actions (`.github/workflows/hugo.yml`) when changes merge to `main`.
- Posts are Markdown files in `content/posts/`, written and published through pull requests.
- Content mixes long-form essays with technical posts containing substantial code (C# first, plus other languages).
- Readers come from conference talks, search, social shares, and RSS.

## Capabilities and Constraints

- Current pages: home (post list), posts, about, subscribe, search (Hugo JSON index), RSS.
- Currently uses the PaperMod theme as a git submodule (`themes/PaperMod`); the earlier Terminal theme submodule (`themes/terminal`) is still registered. Both are scaffolding, not commitments.
- Newsletter planned through Buttondown; not yet connected (`content/subscribe.md`).
- Code highlighting, copy buttons, reading time, and table of contents are needed for technical posts.
- **Undecided:** portfolio structure (separate talks/courses/projects pages vs. a single page), newsletter launch timing, comments, and analytics.

## Brand Commitments

- **Name:** the brand is **Matt Soucoup**, the person. "soucoup" is the domain and handle, not the brand name.
- **Voice:** mostly curious and exploratory (thinking out loud, working through problems) combined with opinionated and direct (clear positions backed by experience), with a practical, hype-skeptical edge. It should read as a person, not a content operation.
- **Hard constraint:** the site must be intriguing without feeling gimmicky, and must not read as generic or AI-generated. That matters more than usual, since the subject is AI and authenticity is the credibility test.

## Evidence on Hand

Confirmed by Matt:
- Leads .NET developer advocacy at Microsoft.
- Published Pluralsight author.
- Recent speaker at Microsoft Ignite and .NET Conf.

Public record to verify and source before use (from his Microsoft advocate bio): previously founded a .NET and web development consultancy; spoke at Xamarin Evolve, CodeMash, VS Live, and Mobile Era; past Telerik Developer Network contributor.

Not yet gathered: talk recordings and links, the Pluralsight course list, article links, a headshot, and social handles (placeholders remain in `content/about.md`). No testimonials, metrics, or press quotes exist; do not fabricate any.

## Product Principles

1. **Point of view first.** Every page should make it clear what Matt thinks about developers and AI, not just which topics he covers.
2. **Show the work.** Credibility comes from real code, real talks, and real experience. Prefer concrete evidence over adjectives.
3. **Writing is the product.** The portfolio and brand exist to support the writing, not to replace it.
4. **Human, not manufactured.** Choose the specific, personal, and handmade over the templated, so nothing could pass for AI filler.
5. **Fast to judge, worth staying for.** Busy decision-makers should get the picture in a minute, and developers should find depth when they dig in.
