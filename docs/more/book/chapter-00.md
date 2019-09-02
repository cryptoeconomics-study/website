# INTRODUCTION 

This introduction aims to define cryptoeconomics, outline some tools for the design and analysis of cryptoeconomic systems, and study the mechanism design within Bitcoin at a high level. The goal is to present a sample of what may be taught in order to whet the appetite for further study. Cryptoeconomics is a rapidly evolving field. The reader should be aware that cryptoeconomic concepts and the content of this introduction are still being actively developed.

Cryptoeconomics encompasses a toolbox that we can utilize to determine the security of information in a system. Cryptographic tools allow us to prove characteristics about the past, and both cryptographic and economic tools allow us to assert characteristics about the future. Cryptoeconomics is like mechanism design in that it starts with the desired end goal and works backwards to find the right set of mechanisms to align incentives of all participants in the system towards that common goal. 

|  Tools in  our toolbelt |  Cryptographic     |      Economic    |
|-------------------------|--------------------|------------------|
|                         | Hash functions     | Tokens           |
|                         | Digital signatures | Voting rights    |   
|                         | ZKsnarks           | Bribing attackers|  
|                         | Timelocks          | Auctions         |  

All protocols use combinations of these core tools. Don’t sweat if you don’t understand any of this yet! We will delve deeper into all of these terms and concepts in later chapters. 

We can use these tools to push forth a variety of good and bad outcomes:
  
| Good outcomes         | Bad outcomes        |
|-----------------------|---------------------|
| Open access           | Censorship          |
| Fast finality         | Slow finality       |
| Decentralized control | Centralized control |
| Low cost              | High cost           |

While we can use cryptoeconomics to analyze centralized systems, these systems were not built with cryptoeconomics in mind. The constraints on power in a centralized payment processor, for instance, mostly derive from the applicable legal system and reputational costs. There is nothing physically preventing a central payment processor from stealing or losing a user's funds. This changes when we introduce cryptoeconomic designs, which limit the power of central authorities.

That’s cool… but how do we govern and design decentralized networks? With these open networks, we want to be able to open participation to the public internet and incentivize participation in the security and maintenance of the network (running nodes, mining, etc).

In a centralized payment processor, we trust the central authority to verify transactions and update balances. However, in a decentralized payment processor, everyone runs everything by listening for and downloading new transactions. But in what order? Lack of agreement on the order of transactions leads to a potential problem - the inability of everyone to agree on a common state of the network.

  
|               | Order 1                                                             | Order 2                                                              |
|---------------|---------------------------------------------------------------------|----------------------------------------------------------------------|
| Initial State | Aparna has 10 eth, Aparna sends Jing 8 eth, Aparna sends Karl 8 eth | Aparna has 10 eth, Aparna sends Karl 8 eth Aparna sends Jing 8 eth, |
| Final State   | Aparna has 2 eth, Jing has 8 eth, Karl has 0 eth                    | Aparna has 2 eth, Karl has 8 eth, Jing has 0 eth         |

Note that two drastically different final states arise from a lack of agreement on transaction ordering.

It’s not enough to have decentralized verification - we also need decentralized consensus on the verification of the order that the code gets executed in. In this course, we will start with a centralized implementation of a simple payment system. We’ll call it Web 2.0 PayPal. As the course progresses, we will turn it into a decentralized payment protocol and call it Web 3.0 PayPal (because buzzwords are easy signals for naming). But before we embark on that journey, let’s take a high level whirl through cryptoeconomics in Bitcoin. 

### Cryptoeconomics in Bitcoin
Information in the network is secured by a consensus mechanism called Proof of Work (PoW). PoW requires a puzzle that is difficult to solve but easy to verify. Participants in the network that offer computational and electric power towards solving this puzzle are called miners. Individuals and entities that store a full copy of the blockchain and validate transactions are called full nodes. Developers maintain the code.

As such, there are three coalitions to voting in Bitcoin governance. Theoretically, no one group of miners, full nodes, or developers can unilaterally make a decision about the network. Miners are incentivized to mine blocks through remunerative incentives known as block rewards, which are bitcoins awarded to the miner that correctly solves the puzzle. 

Sometimes, two different blocks will be mined at the same time, resulting in a fork. The miners will continue to mine on their respective forks and receive rewards on those forks until one of the forked chains gets longer than the other (Bitcoin recognizes the longest chain - i.e., the chain containing the most cumulative PoW effort - as the main chain). These two forks contain different versions and orderings of the blockchain history, and usually mining power will converge around the longest chain, because the longest chain is most likely to remain the main chain, and building on either chain is computationally expensive. That cost is mitigated by the block reward, which is useless if it doesn’t come from the main (or "majority") chain.

Example of the expected reward for each miner depending on which chain they work on:
  
|  B\A                   | Work on Majority Chain | Work on Minority Chain |
|------------------------|------------------------|------------------------|
| Work on Majority Chain |          5, 5          |          -1, 7         |
| Work on Minority Chain |          7, -1         |         -1, -1         |

The Nash Equilibrium here is (5, 5) - both miners working on the Majority Chain.

Since mining on the minority chain (that is, the shorter fork) does not provide an incentive, and there is a cost to building on a chain that is mitigated by a block reward, the result is a convergence around the longest chain. However, it is important to note that Bitcoin considers the defacto chain to be the one with the most cumulative proof of work rather than simply the longest chain.

*How does this guarantee information security?* Let’s say an attacker wanted to go back and edit the history of the ledger to exclude a certain transaction. The attacker has to go all the way back to the block that precedes the block containing the targeted transaction, fork the blockchain, and mine enough blocks to the point where the length of the revised chain surpasses that of the original chain (transforming the revised chain into the new main, or defacto, chain). In order for the revised chain to surpass the current main chain, the attacker would need a majority of the network’s hashpower. This attack is aptly named the *51% attack*. The deeper a transaction is nested into the history of the blockchain, the more costly and difficult it would be to revise it. The mining setup for Bitcoin and the costs of electricity and computation are substantial in order to prevent this type of attacks.

Let’s think about those tools in our toolbox again. Without hashing, digital signatures, and other components of public key cryptography, we wouldn’t have the guarantee that users own and control their money and can only send and spend what they own… or that the money can’t be duplicated! Without the difficulty of mining, we wouldn’t have the economic guarantee that what is written to the blockchain will most likely remain there! Wow cryptoeconomics!

## PROBLEMS

```
Q) Why do we need Decentralized Consensus and not just decentralized code verification and execution?
A) To prevent the double spend attack.
Q) If you are a miner, will the block you mine in PoW always be included in the longest chain?
A) No! Because of forks.
Q) How can you make it harder for someone to attack the altcoin PayPal chain?
A) Sharding - make attacks all or nothing and Plasma 
```
