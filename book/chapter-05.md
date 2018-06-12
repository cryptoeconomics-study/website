# Chapter 5: Proof of Stake
**What is Proof of Stake?**

* In the family of alternative decentralized consensus protocols
* Votes on the main chain are weighted by the coins on that chain.
* This is opposed to PoW where the votes are work (energy burned) on the chain

**Naive Proof of Stake and the *nothing at stake* problem**

* In early versions of PoS, there was nothing penalizing conflicting votes
* This means validators could vote on multiple conflicting histories
* Take a look at a payout matrix for voting on multiple chains. Highest expected payout is for voting on both.
* The entire point of a decentralized consensus is to come to agreement on a single transaction history.If there is no penalty for voting on multiple histories, we lose the property we are attempting to guarantee.

**Solving nothing at stake by introducing slashing.**

* In order to solve the nothing at stake problem, we must penalize validators who vote on two conflicting histories. 
* We allow anyone to provide proof that a validator equivocated (voted on conflicting histories), and the validator is punished by having their coins burned
* We have now introduced a strong disincentive for creating multiple histories: take a look how the payoff matrix changes for validators voting on multiple chains

**Slashing conditions case studies: Casper FFG**

* Use proof of work to propose blocks (can also randomly sample to propose blocks)
* Vote on epochs every 50 blocks
* Slashing conditions: 1) NO_DBL_VOTE & 2) NO_SURROUND_VOTE
* 2/3 threshold for finality means we require 1/3 coins to be slashed if two histories finalize
* Formal verification: quick look at isabelle proof for casper slashing conditions, and discuss importance of both valiation and verification

**Advanced PoS systems:**

Validator set changes

* Validator sets can only change once there are two consecutive finalized blocks

Validator leaking

* In order to resist censorship (a main vulnerability in PoS), we introduce leaking
* Leaking allows minority validators to soft fork their own chain, and then over a period of time they will have control of a majority of stake on their soft fork chain. 
* This allows them to reach finality and effecrtively coordinate a hard fork. 

RanDAO block proposal

* To remove PoW entirely, one approach is randomly selecting a validator to propose the next block.
* This can be done with onion hashing
* Onion hashing: has a random value 10,000 times, and then commit to the last hash in the chain. Each time it's your turn, you reveal the previous hash in the chain. This is checked against your last reveal, eg.:
I reveal `x_4` and it is checked with -- `hash(x_4) == x_5`

Implement Casper FFG with no slashing

* Send `DEPOSIT` transaction which makes you a validator.
* Send `WITHDRAW` to get your money back.
* Sign `VOTE` transactions of the form 
`[checkpoint_hash, target_epoch, source_epoch, sig]`
* When ⅔ votes are reached for two subsequent checkpoints, the first is finalized.

Extra credit
Add slashing conditions!



