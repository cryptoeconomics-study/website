---
title: "Lecture"
---

Learn about beautiful state & state transitions, as well as how we use this design pattern to construct our simple payment processor!

<br />
<br />
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XIsn8-5Xekc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br />
<br />

# Ch1.2 Overview

* Overview of PayPal structure
   * State object which is simply a mapping of address->balance
   * Two types of state mutations: 1) `mint` and 2) `send` -- each with their own logic
   * We start with an initial state (ie `genesis block`) and apply transactions (ie `blocks`) to get our most recent state.
      * The list of transactions (blocks) is called the “history”
      * The result of computing all transactions is called the “state”
      * Note: In Ethereum the full history is approx 250 GB, while the state is approx 3 GB.
         * Fun aside: Rent proposals say that people should pay rent on the state storage which they take up. There is no direct incentive to store the history, and so nodes today often do prune or delete historical data. If this happens too much there is a risk that we can’t recreate the chain anymore!
   * Use nonces to provide replay protection. (nonce means you can’t resubmit the same transaction multiple times)

# Code Challenge

[Codepen](https://codepen.io/karlfloersch/pen/YaEoYy?editors=0012)

[GitHub](https://github.com/cryptoeconomics-study/code)

# Slides

[Gooogle Sheets Link]()


<br />
