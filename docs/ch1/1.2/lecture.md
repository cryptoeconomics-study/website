---
title: "Lecture"
---

<br />

# Payment Processor Implementation
- Implementing a payment processor using the account model. Learn about state, state transitions, and replay protection.

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XIsn8-5Xekc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Slides

[Gooogle Sheets Link](https://docs.google.com/presentation/d/11HU5a3gVsU3N68Jfc6JMY_gH4MDTdKNlm0j0vqZETQU/edit#slide=id.g3b69596d2b_0_0)

<br />

# Ch1.2 Overview

## State

What is a state?
- A state is a particular configuration of data.

Examples of state:
- the physical world at any point in time
- a blockchain at a particular block
- a chess board after a player makes a move

## State Transition Function

What is a state transition function?
- a set of rules that determines how to transition the state from one configuration to another

Examples of state transition functions:
- the laws of physics
- the rules of a blockchain protocol
- the rules of chess


<br />

## Overview of PayPal structure

The state object which is a mapping of address->balance

There are two types of state mutations (each with their own logic)
1) `mint`
2) `send`

We start with an initial state (ie `genesis block`). We then receive transactions, and based on our state transition function reject invalid transactions and process valid transactions (ie create `blocks`). We then store the history of all transactions in a big ledger (ie a `blockchain`). Everyone's current accounts and balances is the current state (ie the latest `block`).
- The list of transactions (`blocks`) is called the “history”
- The result of computing all the transactions in the history leads to the current “state”
- In Ethereum the full history is approx 250 GB, while the state is approx 3 GB.

> Fun aside: Rent proposals say that people should pay rent on the state storage which they take up. There is no direct incentive to store the history, and so nodes today often do prune or delete historical data. If this happens too much there is a risk that we can’t recreate the chain anymore!

<br />

## Recommended Resources

[But how does a blockchain work?](https://www.youtube.com/watch?v=bBC-nXj3Ng4&feature=youtu.be) - Awesome video by 3Blue1Brown explaining how blockchains work.

[Anders Brownworth's blockchain demo](https://anders.com/blockchain/blockchain.html) - Put data in a block, "mine" (hash) it, then add data to the next block, "mine" (hash) it, etc... The "mine" button perfoms the state transition function and you can see the history (blockchain) being created right in front of you.

[Ethviewer](http://www.ethviewer.live/) - Live Ethereum blockchain visualization.

[Blockscout Ethereum block explorer](https://blockscout.com/eth/mainnet/) - You can see the current state of the Ethereum blockchain by clicking on the latest block. You can also explore the history by clicking on past blocks and seeing the transactions that were processed in that state transition function. You can also search for the current state of any account or contract.

Conways's Game Of Life
- [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) - Explains the rules of the game (state transition function) and shows some fun demos.
- [Peter Daily's React implimentation of the Game of Life](https://thepeted.github.io/game-of-life-redux/) - Let's you play the game (really start it and watch it unfold).
- [Code for the above demo](https://github.com/thepeted/game-of-life-redux)

<br />
