---
title: "Overview"
---

An overview of all the content we will be covering in Chapter 1!

<br />
<br />
<iframe 
	width="560" 
	height="315" 
	src="https://www.youtube-nocookie.com/embed/VaUTTE5xb54" 
	frameBorder="0" 
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
	allowFullScreen></iframe>
<br />
<br />

# Ch1 Overview

* Basic crypto concepts
   * Hashes -- not how they work but instead what they do (collision resistance, second preimage resistance [given x and H(x), cannot find y such that H(y) = H(x)], preimage resistance, random oracle)
   * Public / private keys -- Sign with private key, verify with public key
* Overview of PayPal structure
   * State object which is simply a mapping of address->balance
   * Two types of state mutations: 1) `mint` and 2) `send` -- each with their own logic
   * We start with an initial state (ie `genesis block`) and apply transactions (ie `blocks`) to get our most recent state.
      * The list of transactions (blocks) is called the “history”
      * The result of computing all transactions is called the “state”
      * Note: In Ethereum the full history is approx 250 GB, while the state is approx 3 GB.
         * Fun aside: Rent proposals say that people should pay rent on the state storage which they take up. There is no direct incentive to store the history, and so nodes today often do prune or delete historical data. If this happens too much there is a risk that we can’t recreate the chain anymore!
   * Use nonces to provide replay protection. (nonce means you can’t resubmit the same transaction multiple times)
   * Code implementation: https://codepen.io/karlfloersch/pen/YaEoYy?editors=0012
* Account model vs UTXO model
   * Briefly cover the differences
   * Account model (what we are using for our implementation):
      * A global mapping of `account->balance`
      * Sends reduce one account’s balance and increase another account's balance
   * UTXO model (unspent transaction output model used in Bitcoin)
      * Same as the account model, however with three added rules:
         * 1) Every send must include the entire account balance.
         * 2) Sends can specify multiple recipients.
         * 3) Sends can originate from multiple senders.
   * Supposed to be privacy preserving, but these days the privacy can be broken. Only purely private way to send is zero knowledge proofs.
* Properties of centralized systems
   * Benefits:
      * Easy to build and reason about.
      * Simple to scale.
      * Privacy preserving. (if you trust the operator)
   * Downsides:
      * Single point of failure
         * If the operator is removed (eg. servers burn down, servers seized by authorities), the entire system breaks.
      * Censorship
         * The operator can censor users and change their balances, and it is very difficult for users to prove malfeasance.
            * This is because there is no client-side validation
      * Fraud
         * Because the operator has complete control, they can steal money directly from users.
         * The only safeguard against this kind of misbehavior is the legal system & social reputation.
            * Even these threats are not enough--see Bitconnect, Mt. Gox, and many other exchanges which have been hacked.
            * Also, theft is often unprovable
   * These downsides limit what can be built on top of these systems.
      * Clearly no illegal securities!
* Let’s decentralize :)

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/17J2qRYzx27x30UEoXa2cOHOl2MdKQujocQNJpbp7NHE/edit)

<br />
