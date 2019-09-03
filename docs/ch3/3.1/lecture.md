---
title: "Lecture"
---

Decentralized Consensus and Blockchains
- Learn the fundamentals of decentralized consensus and the blockchain data structure

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://youtu.be/dZp4fH0McIg"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

Google Sheets
[Part 1](https://docs.google.com/presentation/d/1KM9FExtcdvWWeQNW6SjpHswmrU1CsH1bRM9qslOYUyQ/edit#slide=id.g4023786b63_0_0)
[Part 2](https://docs.google.com/presentation/d/100f7u_DKz8mDdChzYLx3C2ALxs0_oyDp-07pppDuC-k/edit#slide=id.g56028c6a63_0_3311)
[Part 3](https://docs.google.com/presentation/d/18qFsBmOBlRziCIjRAJQIVlY0KM2DvhlX3vQtkWlnl5I/edit#slide=id.g5609d5c0b9_2_3522)

<br />

# Ch3.1 Overview

Block
- A bunch of data that is hashed and propagated to the network (often the data is transactions that change the state).

Blockchain
- Adding a pointer from each block to the block before it, creating a chain of blocks. This way if something changes in a past block it would change the hashes for all future blocks too. The dependency of each block on the block that came before it ties them together in a "chain".

Fork Choice Rule
- The rules that determine how nodes on a network choose forks. In Bitcoin this is to always choose the longest valid fork.

Confirmations
- When a block is added on top of another block, signalling that everything in that original block is valid

Consensus
- Making sure that all nodes on a network agree on the same state.

<br />

# Recommended Resources

[Wikipedia: blockchain](https://en.wikipedia.org/wiki/Blockchain)

[But how does a blockchain work?](https://www.youtube.com/watch?v=bBC-nXj3Ng4&feature=youtu.be) - Awesome video by 3Blue1Brown explaining how blockchains work.

[Anders Brownworth's blockchain demo](https://anders.com/blockchain/blockchain.html) - Put data in a block, "mine" (hash) it, then add data to the next block, "mine" (hash) it, etc... The "mine" button perfoms the state transition function and you can see the history (blockchain) being created right in front of you.

[Ethereum Stack Exchange: Fork Choice Rule](https://bitcoin.stackexchange.com/questions/88777/fork-choice-rule-a-general-term-or-a-specific-algorithm) - Fork choice rule explained.

<br />

