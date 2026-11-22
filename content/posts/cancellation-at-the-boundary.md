---
title: "Where should a cancellation token stop?"
date: 2026-11-16
draft: true
headerSketch: "images/notebook-sketch.svg"
tags: ["C#", ".NET"]
---

Passing a cancellation token down the stack is easy. Deciding what to do with it after a payment has gone through takes a little more thought.

<!--more-->

Suppose the customer closes the browser while the receipt is being queued. The HTTP request is gone, but the payment still happened. The work that records it needs a lifetime of its own.
