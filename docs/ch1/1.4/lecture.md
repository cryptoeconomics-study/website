---
title: "Lecture"
---

<br />

# Account Model vs UTXOs
- Compare and contract the account model with the UTXO model which was popularized with Bitcoin.

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
- A global mapping of `accounts -> balances`
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

> Neither the Account model or the UTXOs model are privacy preserving on their own! Just because the numbers/letters of addresses look funny to you does not mean that a computer programmer, crypto-currency exchange, or data scientist can't trace blockchain addresses to real world identities. The only purely private way to send transactions is with a cryptocurrency that uses zero knowledge proofs like ([zcash](https://z.cash)).


## Recommended Resources

- [Blockchain in JS](https://blockchain.nambrot.com/) - A Bitcoin style interactive blockchain demo by [nambrot](https://github.com/nambrot) ([tutorial to build your own](https://github.com/nambrot/blockchain-in-js))
- [UTXOs on Substrate](https://www.parity.io/utxo-on-substrate/) - A walkthrough on what UTXOs are and how you would replicate a UTXO network on an account based network like Substrate. ([tutorial to build your own](https://github.com/substrate-developer-hub/utxo-workshop))
- [UTXO Stats](https://utxo-stats.com/) - Visual statistics on the UTXOs in the Bitcoin blockchain.
- [BitBonkers](https://www.bitbonkers.com/) - Abstract (yet awesome) visualization of the Bitcoin blockchain in real time.
- [BitInfoCharts Bitcoin history visualization](https://bitinfocharts.com/bitcoin/visualization.html) - Displays Bitcoin UTXOs on a timeline, showing how they "jump" from one point to another.
- [More Bitcoin Visualizations](http://www.bitcoinlinks.net/tag/transaction-visualizations) - Because you can never have too many visualizations :)
- [Etherscan](https://etherscan.io) - Ethereum uses an account model, so just click on any transaction to see the history of the account that sent it.

<br />

