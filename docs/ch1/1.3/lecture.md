---
title: "Lecture"
---

<br />

# Replay Protection
- Protecting against undesired resubmission of transactions. Learn how signed messages can be used for unsavory ends! Replay protection is critical!

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j7Mbx8laZwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/14ReNvptUeIKGoYQf-M0r5NvGbLkjRAcr2URu48CaPcQ/edit)

<br />

# Ch1.3 Overview

## Replay Protection

What is replay protection?
- making sure that a transaction can only be processed once (no double spends!)

What is a nonce?
- A nonce is a number that is unique to every Ethereum account and attached to every transaction from that account. This number is incremented with every new transaction.

Why are nonces important?
- Every transaction's signature is a hash of many things including the data of the transaction, the account nonce, and the account key. Thus every authentic transaction signature is unique and every unique transaction is recorded in the history. If someone tries to resend the same transaction twice, the signature will match another transaction in the history. According to the rules of Ethereum (the state transition function) this is invalid. Invalid transactions are not processed by the network. Because all nodes on the network follow the same rules, this works.

What if a node makes up their own rules?
- Then it wouldn't be an Ethereum node because Ethereum nodes all follow the Ethereum protocol (state transition function) which determines what is and is not valid.
- If a node goes rouge and tries to process invalid transactions they would have a different state than the rest of the blockchain. This would make all their future transactions and blocks different than the rest of the Ethereum nodes, and thus would be rejected by the blockchain.

What if the node really wants to do it anyways?
- This is called a fork. Because nodes receive rewards for processing blocks that other nodes deem valid, it is in everyone's interest to follow the same rules. Yay cryptoeconomics.

## Recommended Resources

[Replay Attack](https://en.wikipedia.org/wiki/Replay_attack) - Wikipedia says it how it is.

[Making Sense of Ethereum Nonce(sense)](https://medium.com/kinblog/making-sense-of-ethereum-nonce-sense-3858d5588c64) - A walkthrough of nonces in Ethereum.

[What is a nonce?](https://ethereum.stackexchange.com/questions/27432/what-is-nonce-in-ethereum-how-does-it-prevent-double-spending) - Ethereum.StackExchange answer to the question: "what is a nonce?"

[Ethereum Wiki](https://github.com/ethereum/wiki/wiki/Ethereum-Development-Tutorial#basics-of-the-ethereum-blockchain) - If you want a more detailed (and equaly dry) walkthrough of how exactly Ethereum uses nonces.

<br />

