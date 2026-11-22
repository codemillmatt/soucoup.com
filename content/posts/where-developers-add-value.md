---
title: "Who decides when a retry is safe?"
date: 2026-11-22
draft: false
description: "An HTTP timeout looks different when the request places an order."
tags: ["AI", ".NET", "software development"]
---

Say I ask a coding agent to retry an HTTP request when it times out. It gives me a few lines of C#. The test passes: the first request fails, the second succeeds.

Now suppose that request places an order. Did it time out before the shop received it, or after the shop put the order through? From my end, those two cases look exactly the same. From the customer's end, the difference might be a second coffee grinder.

<!--more-->

That changes what I'd ask for in a code review. Instead of another test where the server returns an error, I'd want one where the server accepts the order and the reply never arrives. What happens when the client tries again?

If the shop's API lets us send the same order ID twice and get back the original order, we have a way forward. If it doesn't, I'd rather show “We're checking your order” than quietly send another one. That's a decision about what we owe the person buying the grinder. There's no retry count in .NET that makes it for us.

This is the part of working with agents I want to spend more time on. The original request sounded precise enough to implement. It took a look at the other end of the connection to notice what I'd left out.
