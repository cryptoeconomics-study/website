---
title: "Lecture"
---

Learn how to implement the UTXO model & why you might want to!

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-xoCoZGJ9AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/19On3bioVn0oT10oiAq-OR1PJ7f-HCvem74pzyTycmw0/edit?usp=sharing)

<br />

# Ch1.4 Overview

## Account Model vs UTXO Model

Account model (Ethereum) :
- A global mapping of `account->balance`
- Sends reduce one account’s balance and increase another account's balance
- Easy to understand
- Easy to count and measure (wallets, dApps, etc...)
- Allows for double spends and replay attacks if you're not careful

UTXO model (Bitcoin)
- Every send must include the entire account balance.
- Sends can specify multiple recipients.
- Sends can originate from multiple senders.
- Transactions depend on a specific set of unspent outputs (thus double spends are impossible because once spent there's new UTXOs and old ones are invalid)
- Because double spends are impossible and dependencies are explicit, ordering does not matter so transactions can be processed in parallel
- Can be complex to create wallets and infrastructure around this architecture

> Neither Account model or UTXOs model addresses are privacy preserving on their own! Just because the numbers/letters of addresses look funny to you does not mean that a computer programmer, crypto-currency exchange, or statistician can't trace blockchain addresses to real world identities. The only purely private way to send transactions is zero knowledge proofs ([zcash](https://z.cash)).


## Recommended Resources
- interactive utxo thing (there's gotta be some good ones)
- account tx viz thing (I think we already made one of these?)

<br />
