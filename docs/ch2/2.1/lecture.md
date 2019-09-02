---
title: "Lecture"
---

<br />

# Networks & Synchrony
- Synchronous, and partially synchronous, and asynchronous networks.. oh my!

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/DcCe_dnMNJI"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1pj4Vs7CDJbYaBOTRQgTBVQzLlMmjpizz0Uyn7LqQGJE/edit#slide=id.g4023786b63_0_0)

<br />

# Ch2.1 Overview

In Chapter 1, we began to lay the foundations for bringing money into the digital realm, interpreting money as a "state" which updates upon recieving or sending value. By using digital signatures to enforce ownership of that money--only allowing it to be sent when the owner digitally "signs off"--we are beginning to get a sense of how systems like Paypal and Bitcoin might be built.

Unfortunately, using digital signatures to enforce ownership properties are only part of the story to putting money on the internet. Let's say Alice wants to buy a coffee from Bob and Alice sends him a message "I, Alice, send Bob $5." Should Bob hand over the coffee?

Well... not necessarily. Bob needs more assurances than just Alice's message. Bob needs to know that everyone else on the network also agrees about the state (everyone's balance)
- Does Alice's state have $5 to give in the first place?
- Will that message definitely change the state so that Bob gets +5?

One way we can try to tackle the first question is via something called "client side validation." In this method, all participants keep track of all previous states and transactions on their own computer. This way, everyone can run the entire history of the state themselves and confirm Alice really has $5!

This is an improvement--but it still has significant issues. For one, the more history and transactions there are, the longer it would take you to check--in other words, the throughput (number of transactions) is limited by the person's computer!  Similarly, it hurts privacy--every person can see every other person's spending.

Regardless of how Bob figures out WHETHER Alice has the money to spend, he faces an even harder problem after: making sure that he gets it. How can Bob be assured that, once he hands over a coffee, the state will update his account +$5? This is an essential problem in decentralized networks because all nodes on the network need to receive all messages and agree on the same state. There are many different ways messages can be sent and received on networks:

Synchronous network
- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance: "all messages propagate in 5 seconds."

Partially Synchronous network
- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.

Asynchronous network
- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).

In a decentralized system, we cannot assume synchrony: perhaps some users are firewalled or censored, and messages take an extremely long time to get to them. We need some way to prevent multiple clients from 'forking'--disagreeing on or having different copies of the current state--even in the case of asynchrony. We need a way to reach *consensus* on which state is the 'right one.'

<br />

# Recommended Resources

[Wikipedia: message passing](https://en.wikipedia.org/wiki/Message_passing#Synchronous_versus_asynchronous_message_passing) - Synchronous vs asynchronous message passing.

<br />
