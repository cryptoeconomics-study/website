---
title: "Lecture"
---

<br />

# Networks & Synchrony
- Synchronous, and partially synchronous, and asynchronous networks.. oh my!

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/DcCe_dnMNJI"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1pj4Vs7CDJbYaBOTRQgTBVQzLlMmjpizz0Uyn7LqQGJE/edit#slide=id.g4023786b63_0_0)

<br />

# Ch2.1 Overview

Synchronous network
- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance: "all messages propagate in 5 seconds."

Partially Synchronous network
- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.

Asynchronous network
- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).

In a decentralized system, we cannot assume synchrony: perhaps some users are firewalled or censored, and messages take an extremely long time to get to them. We need some way to prevent multiple clients from 'forking'--disagreeing on or having different copies of the current state--even in the case of asynchrony. We need a way to reach *consensus* on which state is the 'right one.'

<br />

# Recommended Resources

[Wikipedia: message passing](https://en.wikipedia.org/wiki/Message_passing#Synchronous_versus_asynchronous_message_passing) - Synchronous vs asynchronous message passing.

<br />
