---
title: "Lecture"
---

<br />

# Proof of Authority
- Reinstating a central authority to solve the double spend problem.

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://www.youtube-nocookie.com/embed/Mj10HSEM5_8"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />


# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1H37bKXT1eTs2XEpT16UXfCYc0fys3SY-o8foogV1IVM/edit#slide=id.g4023786b63_0_0)

<br />

# Ch2.4 Overview

###Proof of Authority

We need some way to prevent multiple clients from 'forking'--disagreeing on or having different copies of the current state--even in the case of asynchrony. We need a way to reach *consensus* on which state is the 'right one.'

A potential solution is to totally trust a third party like Paypal to keep track of the state--once Bob gets Alice's message, he passes it along to that party, who replies confirming that Alice has enough money and that the state was properly updated.  But what if Paypal lies about the copy of the state it's keeping?

The simplest solution to these issues is to combine it with client-side validation. We pick a user, or group of users, to sign off on valid updates to the state, and all other users accept this as canonical after checking themselves that the updates were valid.

To compactly sign off on ordering, we can group transactions -- updates to the state -- in groups called blocks. At the start of a block, we included a hash of its previous block, so that signing off on one block means implicitly signing off on the entire history which came before it.

Now, users can download all blocks, verify the signatures of the "authorities" themselves, and use that to construct their opinion on the current balances.  This is certainly an improvement to the above models.
- Simplicity: it's just some more signature checks
- Security: provides client-side validation and prevents double spends

However, the system isn't perfect. It still requires us to trust the authorities in some ways:
- Censorship: while they can't change the history, they can block transactions by not including them in the blocks they create.
- Not robust: if the authorities go offline, there's no obvious way to keep using the system.

The ideal system would provide a *decentralized* consensus--one which provided the pros above, but with further limitations to censorship, reversion resistancem, and increased robustness. Look to the next chapter to learn Bitcoin's elegant solution--a scheme called "proof of work!"

<br />

# Recommended Resources

[Wikipedia](https://en.wikipedia.org/wiki/Proof_of_authority) - Proof of Authority.

[PoA Network](https://poa.network/) - A Proof of Authority Ethereum sidechain.

[Libra](https://libra.org/) - A Proof of Authority payments network led by Facebook and a handful of other corporate entities.

[Quorum](https://www.goquorum.com/) - A Proof of Authority payments network led by J.P. Morgan Chase bank.

<br />

