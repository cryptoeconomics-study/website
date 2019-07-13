---
title: "Ch1.4: Replay Protection"
---

Learn how to implement the UTXO model & why you might want to!

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-xoCoZGJ9AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Ch1.4 Overview

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

# Coding Challenges

[Codepen](https://codepen.io/karlfloersch/pen/LrLaZw?editors=0011)

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/19On3bioVn0oT10oiAq-OR1PJ7f-HCvem74pzyTycmw0/edit?usp=sharing)

<br />
