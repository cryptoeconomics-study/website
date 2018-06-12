# Chapter 3: Proof of Work

What properties do we look for with decentralized consensus?

Censorship resistance -- Everyone’s transactions will be included.
Reversion resistance -- A single unchanging history.
Robustness -- The consensus engine (blockchain) will not go offline or halt.

**Proof of Work**
What is proof of work?
Many types of proof of work, memory hard, cpu hard
Simplest form would be using a hash function over and over to generate a hash with some number of leading zeros.
6 leading 0’s: hash(block_msg) == `0x000000abcdef123456789`

Implementation: https://github.com/karlfloersch/lessons/blob/master/lessons/02_proofOfWork.js#L16-L26 

The more leading zeros, the more work you have to do (computation).

The amount of work that is done on a chain is considered the number of “votes” that chain has. Because there is a limited amount of computation in the world, that means there is a limited number of votes, which means we are able to form a single longest chain. The work also acts as a rate limiting mechanism so that blocks are not created faster than clients can download or validate.

**Fork choice**

* In proof of authority, we didn’t have to worry so much about forks because the authorities probably wouldn’t create a fork intentionally. However, in proof of work because anyone can participate forking will naturally occur.

* With multiple forks, users are going to have to agree on which fork to follow. This is called the “fork choice rule”.

* In the simplest proof of work, we can use the “longest chain” fork choice rule. If we have two forks, we compare which one is longer and choose that one.

**Difficulty & difficulty adjustment**

* Difficulty -- The more zeros in a row, the more hashs you have to compute/work you have to do. Intuitively you can think of how much longer it takes to flip a coin and get heads once, vs flip a coin and get heads 10 times in a row.

* Difficulty adjustment -- In order to target a particular blocktime (eg. 1 block every 10 minutes) we adjust the number of zeros the computers need to compute to create a new block. So if we find a whole bunch of blocks very quickly with a difficulty of finding 3 zeros in a row, then the protocol will say “ok now find hashes with 4 zeros in a row” and so on.

* With difficulty adjustment we need to adjust our “longest chain” fork choice rule to be “highest difficulty chain”.

**Reversions**

* A reversion or “reorg” happens when we choose a new chain which doesn’t include all blocks from our previous chain.

* This is scary! Transactions which we believed to have occured may no longer be valid. This means if you received a payment, there is a chance will be “reverted”.

* In proof of work, blocks are less likely to be reorged out of the chain the deeper they are in the chain. For instance, if a block is 20 blocks deep in the chain, we can assume that it is probably going to be included in the history going forward, assuming no extraordinary circumstances.

**Properties of Proof of Work**

With particular assumptions proof of work can be argued to be 

1) reversion resistant

2) censorship resistant

3) robust.

We will analyze these assumptions in the next chapter!

