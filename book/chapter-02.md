# Chapter 2: Client Validation, Networks, and Double Spends
In Chapter 1, we began to lay the foundations for bringing money into the digital realm, interpreting money as a "state" which updates upon recieving or sending value. By using digital signatures to enforce ownership of that money--only allowing it to be sent when the owner digitally "signs off"--we are beginning to get a sense of how systems like Paypal and Bitcoin might be built.

Let's examine some of the other problems we need to solve to make this all work.

### Client Side Validation
Unfortunately, using digital signatures to enforce ownership properties are only part of the story to putting money on the internet. Let's say Alice wants to buy a coffee from Bob and Alice sends him a message "I, Alice, send Bob $5." Should Bob hand over the coffee?

Well... not necesarily. Bob needs more assurances about the state--everyone's "balance," or the amount of money they have--before accpeting the payment:

* Does Alice's state have $5 to give in the first place?
* Will that message definitely change the state so that Bob gets +5?

### Validating History

One way we can try to tackle the first question is via something called "client side validation." In this method, all participants keep track of all previous states and transactions on their own computer. This way, everyone can run the entire history of the state themselves and confirm Alice really has $5!

This is an improvement--but it still has significant issues. For one, the more history and transactions there are, the longer it would take you to check--in other words, the throughput (number of transactions) is limited by the person's computer!  Similarly, it hurts privacy--every person can see every other person's spending.

Even worse...

### The Double Spend Problem

Regardless of how Bob figures out WHETHER Alice has the money to spend, he faces an even harder problem after: making sure that he gets it. How can Bob be assured that, once he hands over a coffee, the state will update his account +$5?

The thing which makes this particularly tricky is a behavior Alice can exhibit called "double spending." Imagine that Alice has $5 and teams up with a friend who also wants a coffee.  Together, they each go into SEPARATE coffee shops, each prepared with a different signed transaction:

1. "I, Alice, give $5 to Carol's Coffee"
2. "I, Alice, give $5 to Dan's Donuts"

Even if both Carol and Dan client-side validate that Alice has $5 to spend, obviously they both should not accept these signed messages as valid transactions. If they did, Alice and her friend would be able to spend $10 in total, starting with only $5! This is not how money should work.

One obvious way to solve this might be for Carol and Dan to create a network (internet, wifi, tin can telephone...) and share any transactions they see--that way, if either gets a message from Alice, the other will see it.  However, while this might work for neighbors, it's impossible to guarantee for the internet at large. The problem comes from a description of networks called synchrony.

* Synchronous network -- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance: "all messages propagate in 5 seconds."
* Partially Synchronous network -- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.
* Asynchronous network -- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).

In a decentralized system, we cannot assume synchrony: perhaps some users are firewalled or censored, and messages take an extremely long time to get to them.

We need some way to prevent multiple clients from 'forking'--disagreeing on or having different copies of the current state--even in the case of asynchrony. We need a way to reach *consensus* on which state is the 'right one.'

### Proof of Authority

A potential solution is to totally trust a third party like Paypal to keep track of the state--once Bob gets Alice's message, he passes it along to that party, who replies confirming that Alice has enough money and that the state was properly updated.  But what if Paypal lies about the copy of the state it's keeping?

The simplest solution to these issues is to combine it with client-side validation. We pick a user, or group of users, to sign off on valid updates to the state, and all other users accept this as canonical after checking themselves that the updates were valid.

To compactly sign off on ordering, we can group transactions -- updates to the state -- in groups called blocks. At the start of a block, we included a hash of its previous block, so that signing off on one block means implicitly signing off on the entire history which came before it. 

Now, users can download all blocks, verify the signatures of the "authorities" themselves, and use that to construct their opinion on the current balances.  This is certainly an improvement to the above models, if not perfect. On the plus side, pros are its:

* Simplicity: it's just some more signature checks
* Security: provides client-side validation and prevents double spends

However, the system isn't perfect. It still requires us to trust the authorities in some ways:

* Censorship: while they can't change the history, they can block transactions by not including them in the blocks they create.
* Not robust: if the authorities go offline, there's no obvious way to keep using the system.

The ideal system would provide a *decentralized* consensus--one which provided the pros above, but with further limitations to censorship, reversion resistancem, and increased robustness. Look to the next chapter to learn Bitcoin's elegant solution--a scheme called "proof of work!"
