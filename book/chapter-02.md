# Chapter 2: Client-Side Validation, Networks & Double Spends
What is client side validation, and why is it so important? Well, currently all blockchain consensus protocols (e.g. Bitcoin, Ethereum, Ripple, etc.) all have a challenging limitation. And that is the fact that every fully participating node in the network must process every transaction. This is client side validation. It’s the validation of inputs (blocks) to the blockchain from the nodes overseeing the network. 

Imagine our PayPal example. The client side validation would be that all clients download all transactions and run the PayPal code to generate their belief of the current state. Why? Because is gives the ability to verify that the history is correct. If someone were to go back and ask the blockchain state machine, “did you get this hash?”, the network would certainly be able to verify that. But the question remains – who actually has the data? Well, we can not forget the very DNA of blockchains in general – “decentralization”. So that means that every node on the network processes each Tx (transaction) and stores a copy of the entire state. Thus, it must be that all of the nodes (e.g. miners) participating in the network have the data. But that begs another question, do we need everyone to have the data? 

You see, that’s the beauty and the beast of blockchains. One of the challenges that gets introduced from client-side validation through the traditional use of nodes, like miners, is that throughout is limited by client hardware. Because clients are running all transactions, the transactions per second is limited by whatever hardware the client’s use to run those transactions. 
Let me repear that. “Because clients are running all transactions, the transactions per second is limited by whatever hardware the client’s use to run those transactions.” Of course, we can see how this would create some scalability issues. But lets look deeper… 
Because when you start to think about the hardware aspect of client side validation, you begin to come across some very important questions. Questions not many are asking, but questions fundamental to cryptoeconomics. Cryptoeconomics is not just about technology, no. It’s about people. 

**ASICs and their role in Client Side Validation

I really enjoyed the analogy on this subject from a man names James D’Angelo. Currently working as a Harvard Research Associate, he focuses a lot of his research efforts on the negative aspects of legislative transparency. Although not widely talked about, it is research like this that can help us answer a lot of questions around the mechanism design of such a transparent technology like blockchain.

Mr. D’Angelo specifically compares ASICs and machine guns, and how they have a lot of similarities. (bare with me) He goes on to state that just as the original intention of the 2nd amendment was the decentralization of power, the dream of platforms like Ethereum was to decentralize monetary control. 

He states how, for the Founding Fathers, the crappy guns of the late 1700’s seemed like an ideal way to decentralize. These crappy guns were widely distributed among the people. They were terrible at taking down groups of people, and very few gun owners had more than one or two. But as pathetic as those guns seem to us now, they were, back then, the most powerful weapons on Earth. There was no dynamite, no drones, no F-16s, no tanks, etc. Only ridiculous cannons. Thus, those who possessed guns would invariably conquer any group that did not have them. 

Consequently, to ensure the safety of the Republic, the Founding Fathers sought to decentralize power and allow each and every individual in the country to own the most powerful weapon available at the time – a really crappy gun. This is what the Founding Fathers loved about it. They were a perfect decentralization of power. Moving forward a couple hundred years, we see many blockchains falling under this same spell. Satoshi wanted to design a system where the power to control money and information was as widely distributed as possible – a very, very big deal. 

And just as the Founding Fathers turned to the gun, Satoshi turned to the CPU. Just like the guns of the 1790’s, CPUs are enormously powerful, yet widely distributed among the public, and few individuals have more than one or two. This means that this awesome power (the CPU), as Satoshi imagined, was reasonably distributed among the masses and controlled by no central entity. And for the first couple of years, Bitcoin was a virtual paradise of decentralization. Indeed, each year it became more and more decentralized. 
But it is dangerous to decentralize based on technology, because technology changes. And so today, we might still call an AR-16 a gun, but from the perspective of the Founding Fathers, that would be like calling an armor plated cheetah a house cat. There wasn’t a single person alive in the late 1700’s, who, when they embraced the striking beauty of the 2nd amendment, considered something as deadly as modern weaponry. Returning to today, we see that blockchains like Bitcoin and others who rely on client-side validation through the use of miners have their own automatic rifle problem. It is called an ASIC. And an ASIC is unlike a CPU in that it is entirely useless to most folks (just as an AR-16 is today). As such, because few folks own them, ASICS are the opposite of decentralization. 

Indeed, just as a few folks bought CPUs to mine, every purchase of an ASIC has been with the intention of rigging the system for the individual. The Founding Fathers and Satoshi both imagined a world where tech would create decentralization. But because they used tech, the opposite has happened. While we cross our fingers that one day, everyone will have an equal power to mine cryptocurrency. It does not seem likely. 

The Founding Fathers were philosophers, not gun toters. And like Satoshi, they were chasing a dream of decentralization. But they both seemed to make the same mistake – they relied on technology. Decentralization, however, will always rely on people. 


* Privacy -- because clients must download all transactions, everyone knows everyone else’s balances. This can be mitigated using zero knowledge proofs, but generating them is computationally expensive and complex to implement.

###Double spend problem
A simple way to decentralize PayPal is to make clients run all transactions. In this section we see why this is not enough.
How to mentally model a network & synchrony assumptions

* Synchronous network -- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance all messages propagate in 5 seconds.

* Partially Synchronous network -- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.

* Asynchronous network -- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).

In a decentralized system, we cannot rely on a global clock, and we cannot assume a constant latency for all messages to be delivered.

This is the root cause of the double spend problem: an attacker can send one message to Jing & another message to Aparna each spending the same coins. If Jing and Aparna both accept those transactions, their states will diverge and we will have a fork. Not good! We need decentralized consensus!

###Proof of Authority

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
