---
title: "Lecture"
---

<br />

# Double Spends
- Inconsistent state in a distributed network of nodes, and the mischief which can ensue!

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/k6JVGR7Jx0A"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1o_jfMuD8WJHM808Q90_5sdllt31Kzv2EQgiU-mRjfzM/edit#slide=id.g4023786b63_0_0)

<br />

# Ch2.2 Overview

Double Spend
- A double spend is when someone tries to broadcast two transactions that both spend the same account balance. This can be the result of sending a transaction again because it's doesn't look like it's being processed, or from trying to spend money you don't have. Blockchains operate in an asynchronous environment so we we never know if/when messages will be processed. To prevent double spends we use things like [nonces](../../ch1/ch1.3/lecture) to determine which messages to process and which to discard. This is important to ensure that everyone on the network agrees on the shared state of the network.




<br />

# Recommended Resources

[Double Spend Game](https://cryptoeconomics-study.github.io/visualizations/) - Visualization that lets you see what happens to a naive payments network when someone tries to double spend (click on a character to spend or double spend).

[Wikipedia](https://en.wikipedia.org/wiki/Fork_(blockchain)) - Blockchain forking explained in detail.

<br />

