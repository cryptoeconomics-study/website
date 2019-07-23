---
title: "Lecture"
---

Learn how to implement the UTXO model & why you might want to!

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-xoCoZGJ9AQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Ch1.4 Overview

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


# Coding Challenges

[Codepen](https://codepen.io/karlfloersch/pen/LrLaZw?editors=0011)

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/19On3bioVn0oT10oiAq-OR1PJ7f-HCvem74pzyTycmw0/edit?usp=sharing)

<br />
