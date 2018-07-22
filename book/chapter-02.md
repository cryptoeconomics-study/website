# Chapter 2: Client-Side Validation, Networks & Double Spends

**What is it?**

* All clients download all transactions and run the PayPal code to generate their belief of the current state.

**What does it give you?**

* The ability to verify that the history is correct

**This introduces a couple new challenges**

* Throughput limited by client hardware -- because clients are running all transactions, the transactions per second is limited by whatever the clients use to run those transactions.

* Privacy -- because clients must download all transactions, everyone knows everyone else’s balances. This can be mitigated using zero knowledge proofs, but generating them is computationally expensive and complex to implement.

### Double spend problem
A simple way to decentralize PayPal is to make clients run all transactions. In this section we see why this is not enough.
How to mentally model a network & synchrony assumptions

* Synchronous network -- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance all messages propagate in 5 seconds.

* Partially Synchronous network -- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.

* Asynchronous network -- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).

In a decentralized system, we cannot rely on a global clock, and we cannot assume a constant latency for all messages to be delivered.

This is the root cause of the double spend problem: an attacker can send one message to Jing & another message to Aparna each spending the same coins. If Jing and Aparna both accept those transactions, their states will diverge and we will have a fork. Not good! We need decentralized consensus!

### Proof of Authority

The simplest way to solve the double spend problem is by electing some of the users to sign off on ordering.

**Creating a blockchain**

* To compactly sign off on ordering, we bundle a bunch of transactions into a block

* Each block has a pointer to the hash of a previous block.

* We construct a chain of blocks, and so now by signing off on one block, you are implicitly signing off on every block in that chain.

* Users download blocks, check signatures of authorities, and use that to construct their opinion on the current balances.

Compared to our centralized payment processor this has benefits, but it’s not great

* Pro: Simple; provides client-side validation.
* Con: [censorship] Central authority cannot change the history, but they can censor transactions from being included; [not robust] single point of failure means if the authorities go offline, there isn’t a clean way to recover.

We’re still largely centralized! Let’s really decentralize this time.
