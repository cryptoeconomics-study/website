# Chapter 3: Proof of Work

**Chapter Intro and Notes**

In the previous chapter we learned about client side validation, validating history and the double spend problem. We also proposed a partial solution to the double spend problem by using proof of authority. We also learned about the downside of that solution. In this chapter we explore a true decentralized system with proof of work scheme. Before we discuss and learn about Proof of Work, lets think about what we want from our decentralized.


In our decentralized system we are looking for some key properties. First, we want something censorship resistance. This way, everyone's transactions will be accepted, weather humans or gerbils. Secondly, we want reversion resistance. We want a single unchanging history so bad gerbils don't double spend like its hot. Third, we want robustness if not antifragility.

**Side note:**

Fragile items break under chaos/pressure      
Robust items can withstand some pressure/chaos
Antifragile items can gain/grow from chaos/.

The most elegant example of an Antifragile thing is the mythical hydra. No matter how many heads you cut off (i.e., put it under chaos/pressure ) the more heads it grow (i.e. the stronger it became).

Our blockchain/consensus engine, we want it to be like the hydra. We want it to be operational with the least amount of nodes possible and gain from chaos over time. That is the absolute best case scenario. For the most optimal/likely scenario, we want it to be robust. So it does not go offline or come to a halt (i.e. it won't constantly loop through some piece of code and be paralyzed).

**Proof of Work**
For all this to be possible, we turn now to Proof of Work. What is Proof of work? Proof of Work (PoW) is a consensus mechanism that will give us the properties we want. The way it works is like voting with computers. Computers on the network bring together a block of transactions. Then they work to find the hash of that block that will match a certain number of 0s. So for example, perhaps the computers are tasked with finding 6 leading 0’s: hash(block_msg) == `0x000000abcdef123456789`

The more leading zeros, the more work you have to do (computation).

The amount of work that is done on a chain is considered the number of “votes” that chain has. Because there is a limited amount of computation in the world, that means there is a limited number of votes, which means we are able to form a single longest chain. The work also acts as a rate limiting mechanism so that blocks are not created faster than clients can download or validate.

**What if some computers find it faster then others?**

In order to ensure that blocks are found timely and predicatively, the network adjusts the difficultly.  Think of difficulty as the number of zeros. The more zeros in a row, the more hashes you have to compute/work you have to do. Intuitively you can think of how much longer it takes to flip a coin and get heads once, vs flip a coin and get heads 10 times in a row.

The network adjusts the difficulty to ensure some predetermined target blocktime (eg. 1 block every 10 minutes as in the case with bitcoin). If the block is found too slowly the difficulty is dropped. If the block is found too fast, the difficulty is raised. Lets say the difficulty is 4 0s. All the gerbils are finding the block too quickly. Then the protocol on increase the number of 0s to 5, and so on.


* With difficulty adjustment we need to adjust our “longest chain” fork choice rule to be “highest difficulty chain”.

**But... but.. what about forks?**

Forks are when two or more computers find a valid block at the same time. In proof of authority, we didn’t have to worry so much about forks because the authorities probably wouldn’t create a fork intentionally. In proof of work because anyone can participate, thus forking will naturally occur. With multiple forks, users are going to have to agree on which fork to follow. This is called the “fork choice rule”. In the simplest proof of work, we can use the “longest chain” fork choice rule. If we have a fork, we compare which chain is longer and choose that one.

If we don't follow the rules, reorgs happen. What is a reorg?

**Reversions**

A reversion (also known as a “reorg”) happens when we choose a new chain which doesn’t include all blocks from our previous chain. This is scary because some transactions which we have made may not be included that chain. Effectively, this means those transactions have been "reverted". In proof of work, blocks are less likely to be reorged out of the chain the deeper they are in the chain. For instance, if a block is 20 blocks deep in the chain, we can assume that it is probably going to be included in the history going forward, assuming no extraordinary circumstances.


**Summery and next chapter notes**

So there you have it, that is Proof of Work and how it works. With certain assumptions and under normal circumstances, it can be argued that Proof of Works gives us the properties we were seeking (listed below).

*reversion resistant*
*censorship resistant*
*Robustness*

We will learn about attacks on Proof of Work as well as analyze these assumptions in the next chapter!
