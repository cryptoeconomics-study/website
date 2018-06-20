# Chapter 3: Proof of Work

<<<<<<< HEAD
**Chapter Intro and Notes**

In the previous chapter we learned about client side validation, validating history and the double spend problem. We also proposed a partial solution to the double spend problem by using proof of authority. We also learned about the downside of that solution. In this chapter we explore a true decentralized system with proof of work scheme. Before we discuss and learn about Proof of Work, lets think about what we want from our decentralized.


In our decentralized system we are looking for some key properties. First, we want something censorship resistance. This way, everyone's transactions will be accepted, weather humans or gerbils. Secondly, we want reversion resistance. We want a single unchanging history so bad gerbils don't double spend like its hot. Third, we want robustness if not antifragility.
=======
What is proof of work?

There are many types of proof of work: memory hard, cpu hard. At its core, proof of work is a difficult puzzle that requires a costly expenditure in pursuit of a prize. 


There are certain properties that we look for in decentralized consensus.

* Censorship resistance: Everyone’s transactions will be included.

* Reversion resistance: There is a single history that cannot be changed, and the past cannot be modified or rewritten.

* Robustness: the consensus engine (ie blockchain) will not go offline or halt.
 
Let’s take a look at Proof of Work and examine how it achieves these three properties.

### Elon Musk Chicken Nuggets: A high level metaphor for PoW

When a block of transactions is mined, a block reward is dispersed to the successful miner. In order to mine a block, there is a special puzzle that must be solved. 

Let's take a look at MuskCoin. In this case, the puzzle is a lock that requires an Elon Musk shaped chicken nugget to open. 

You cannot tell what the shape of the nugget will be simply by looking at the chicken. So in order to create this Elon Nugget, many chickens are turned in to nuggets. 

The goal is to make the puzzle hard enough so that only one Elon-shaped nugget is found every ten minutes. However, the more miners are turning chickens into nuggets, and the more chickens that are being thrown at the puzzle, the easier it will be to find such a nugget.

If it so happens that it becomes quite popular to mine MuskCoin, and an Elon-shaped nugget is being found every 2 minutes instead of every 10 minutes, MuskCoin will readjust the puzzle difficulty to require that the nugget resemble a 1998 Elon in order to make the parameters of the puzzle are much harder to solve.

Oh no! Now, Elon-shaped nuggets are being found every 20 minutes. This is too infrequent! The target difficulty is every 10 minutes. So, MuskCoin readjusts the parameters to allow the nugget to resemble a 90's Elon - a nugget shaped in Elon anywhere in that decade, rather than specifically an Elon from the year 1998.


### Types of Proof of Work

There are many types of proof of work. For example, cpu-bound, memory-bound.

CPU-hard proof of work: Hashcash
Hashcash was originally invented to reduce email spam. Email senders can generate a hashcash stamp to include in the header of their email. Hashcash requires CPU to compute, and for users who send or receive a normal (non-spammer number) of emails, the cost of generating and validating these stamps is negligible. But for spammers, this becomes a substantial disincentive. 

Memory-hard proof of work: Cuckoo Cycle
Cuckoo cycle PoW is memory bound graph theoretic proof of work. Finds length 42 cycle in a graph. Pros: greener. Cons: takes more header space and is slower. A majority of the runtime is memory latency. 
Read more: https://github.com/tromp/cuckoo

The simplest form of PoW would be using a hash function over and over to generate a hash with some number of leading zeros.

6 leading 0’s: hash(block_msg) == `0x000000abcdef123456789`

Sample implementation: https://github.com/karlfloersch/lessons/blob/master/lessons/02_proofOfWork.js#L16-L26 
>>>>>>> upstream/master

**Side note:**

Fragile items break under chaos/pressure      
Robust items can withstand some pressure/chaos
Antifragile items can gain/grow from chaos/.

<<<<<<< HEAD
The most elegant example of an Antifragile thing is the mythical hydra. No matter how many heads you cut off (i.e., put it under chaos/pressure ) the more heads it grow (i.e. the stronger it became).
=======
The more leading zeroes there are, the more work/ computation you have to do. This computation fills the following functions:
* Voting: The votes (for the de facto chain) are determined by the amount of computation done on the chain. 
* Rate limiting: The work acts as a rate limiting mechanism so that blocks are not created faster than clients can download or validate.


**Fork choice**
>>>>>>> upstream/master

Our blockchain/consensus engine, we want it to be like the hydra. We want it to be operational with the least amount of nodes possible and gain from chaos over time. That is the absolute best case scenario. For the most optimal/likely scenario, we want it to be robust. So it does not go offline or come to a halt (i.e. it won't constantly loop through some piece of code and be paralyzed).

**Proof of Work**
For all this to be possible, we turn now to Proof of Work. What is Proof of work? Proof of Work (PoW) is a consensus mechanism that will give us the properties we want. The way it works is like voting with computers. Computers on the network bring together a block of transactions. Then they work to find the hash of that block that will match a certain number of 0s. So for example, perhaps the computers are tasked with finding 6 leading 0’s: hash(block_msg) == `0x000000abcdef123456789`

The more leading zeros, the more work you have to do (computation).

<<<<<<< HEAD
The amount of work that is done on a chain is considered the number of “votes” that chain has. Because there is a limited amount of computation in the world, that means there is a limited number of votes, which means we are able to form a single longest chain. The work also acts as a rate limiting mechanism so that blocks are not created faster than clients can download or validate.

**What if some computers find it faster then others?**
=======
**What is a fork?**

A normal fork is when a blockchain splits into two. As discussed in Chapter 0, there are unintentional forks, when miners expend work on different blocks. If these two miners find PoW solutions within a short time of each other, and propagate their respective new blocks to the network, some nodes will receive the information that the blockchain now includes the newly discovered block from Miner 1, whereas others will receive the information broadcasted by Miner 2. Now, two different chains exist and a fork is created. However, in this case, Miner 1 and Miner 2 are still following the same blockchain consensus rules so this fork will be resolved quickly. Even if the network is perfectly split and exactly half the network continues to build on the block found by Miner 1 and the rest build on the block found by Miner 2, one chain will eventually have a block mined faster than the other. Then, all miners will converge back onto the chain with the most cumulative work in order to continue earning rewards from the de facto chain.

A hard fork is caused when new consensus rules are created, and some nodes upgrade to follow those rules, but other nodes choose not to upgrade and continue to follow the original consensus rules. This creates a permanent divergence in the blockchain. Case study: bitcoin and bitcoin cash. 

A soft fork is backwards-compatible and still allows nodes that follow old consensus rules to come on to the new chain. Whereas hard forks are strictly opt-in, because they require users to update software to participate, a soft fork does not require this.

In proof of authority, we didn’t have to worry so much about forks because the authorities probably wouldn’t create a fork intentionally. However, in proof of work because anyone can participate forking will naturally occur.

With multiple forks, users are going to have to agree on which fork to follow. This is called the “fork choice rule”.

In the simplest proof of work, we can use the “longest chain” fork choice rule. If we have two forks, we compare which one is longer and choose that one.


**Difficulty & difficulty adjustment**

* Difficulty -- The more zeros in a row, the more hashes you have to compute/work you have to do. Intuitively you can think of how much longer it takes to flip a coin and get heads once, vs flip a coin and get heads 10 times in a row.
>>>>>>> upstream/master

In order to ensure that blocks are found timely and predicatively, the network adjusts the difficultly.  Think of difficulty as the number of zeros. The more zeros in a row, the more hashes you have to compute/work you have to do. Intuitively you can think of how much longer it takes to flip a coin and get heads once, vs flip a coin and get heads 10 times in a row.

The network adjusts the difficulty to ensure some predetermined target blocktime (eg. 1 block every 10 minutes as in the case with bitcoin). If the block is found too slowly the difficulty is dropped. If the block is found too fast, the difficulty is raised. Lets say the difficulty is 4 0s. All the gerbils are finding the block too quickly. Then the protocol on increase the number of 0s to 5, and so on.


* With difficulty adjustment we need to adjust our “longest chain” fork choice rule to be “highest difficulty chain”.

**But... but.. what about forks?**

Forks are when two or more computers find a valid block at the same time. In proof of authority, we didn’t have to worry so much about forks because the authorities probably wouldn’t create a fork intentionally. In proof of work because anyone can participate, thus forking will naturally occur. With multiple forks, users are going to have to agree on which fork to follow. This is called the “fork choice rule”. In the simplest proof of work, we can use the “longest chain” fork choice rule. If we have a fork, we compare which chain is longer and choose that one.

<<<<<<< HEAD
If we don't follow the rules, reorgs happen. What is a reorg?

**Reversions**
=======
For illustrative purposes, let’s make some assumptions regarding an attacker’s resources and then compute the likelihood of a reorg. Let’s say an attacker has 40% of the total hash power in the network and wants to revert a transaction six blocks deep. In order for the attacker to win, they must build the longest chain starting from that block. The main chain is already 6 blocks longer than what the attacker is starting with - the likelihood that the attacker will be able to build a longer chain is (0.4/0.6)^6 which is roughly equal to 0.08779. For a 1 in a million chance that the transaction will be reverted, one can wait for 34 confirmations. This is operating under the assumption that 60% of the nodes are behaving honestly and miners have neither been bribed nor are colluding. 

**Properties of Proof of Work**
>>>>>>> upstream/master

A reversion (also known as a “reorg”) happens when we choose a new chain which doesn’t include all blocks from our previous chain. This is scary because some transactions which we have made may not be included that chain. Effectively, this means those transactions have been "reverted". In proof of work, blocks are less likely to be reorged out of the chain the deeper they are in the chain. For instance, if a block is 20 blocks deep in the chain, we can assume that it is probably going to be included in the history going forward, assuming no extraordinary circumstances.


**Summery and next chapter notes**

So there you have it, that is Proof of Work and how it works. With certain assumptions and under normal circumstances, it can be argued that Proof of Works gives us the properties we were seeking (listed below).

*reversion resistant*
*censorship resistant*
*Robustness*

We will learn about attacks on Proof of Work as well as analyze these assumptions in the next chapter!
