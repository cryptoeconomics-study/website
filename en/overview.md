# Course Overview

## Chapter 1: Centralized Payment Processor
* Overview of basic crypto concepts
   * Hashes -- not how they work but instead what they do (collision resistance, second preimage resistance [given x and H(x), cannot find y such that H(y) = H(x)], preimage resistance, random oracle)
   * Public / private keys -- Sign with private key, verify with public key
* Overview of PayPal structure
   * State object which is simply a mapping of address->balance
   * Two types of state mutations: 1) `mint` and 2) `send` -- each with their own logic
   * We start with an initial state (ie `genesis block`) and apply transactions (ie `blocks`) to get our most recent state.
      * The list of transactions (blocks) is called the “history”
      * The result of computing all transactions is called the “state”
      * Note: In Ethereum the full history is approx 250 GB, while the state is approx 3 GB.
         * Fun aside: Rent proposals say that people should pay rent on the state storage which they take up. There is no direct incentive to store the history, and so nodes today often do prune or delete historical data. If this happens too much there is a risk that we can’t recreate the chain anymore!
   * Use nonces to provide replay protection. (nonce means you can’t resubmit the same transaction multiple times)
   * Code implementation: https://codepen.io/karlfloersch/pen/YaEoYy?editors=0012 
* Account model vs UTXO model
   * Briefly cover the differences
   * Account model (what we are using for our implementation):
      * A global mapping of `account->balance`
      * Sends reduce one account’s balance and increase another account's balance 
   * UTXO model (unspent transaction output model used in Bitcoin)
      * Same as the account model, however with three added rules:
         * 1) Every send must include the entire account balance.
         * 2) Sends can specify multiple recipients.
         * 3) Sends can originate from multiple senders.
   * Supposed to be privacy preserving, but these days the privacy can be broken. Only purely private way to send is zero knowledge proofs.
* Properties of centralized systems
   * Benefits:
      * Easy to build and reason about.
      * Simple to scale.
      * Privacy preserving. (if you trust the operator)
   * Downsides:
      * Single point of failure
         * If the operator is removed (eg. servers burn down, servers seized by authorities), the entire system breaks.
      * Censorship
         * The operator can censor users and change their balances, and it is very difficult for users to prove malfeasance.
            * This is because there is no client-side validation
      * Fraud
         * Because the operator has complete control, they can steal money directly from users.
         * The only safeguard against this kind of misbehavior is the legal system & social reputation.
            * Even these threats are not enough--see Bitconnect, Mt. Gox, and many other exchanges which have been hacked.
            * Also, theft is often unprovable
   * These downsides limit what can be built on top of these systems.
      * Clearly no illegal securities!
* Let’s decentralize :)

## Chapter 2: Client Validation, Networks, and Double Spends
* Client side validation
   * What is it?
      * All clients download all transactions and run the PayPal code to generate their belief of the current state 
   * What does it give you?
      * The ability to verify that the history is correct
   * This introduces a couple new challenges
      * Throughput limited by client hardware -- because clients are running all transactions, the transactions per second is limited by whatever the clients use to run those transactions.
      * Privacy -- because clients must download all transactions, everyone knows everyone else’s balances. This can be mitigated using zero knowledge proofs, but generating them is computationally expensive and complex to implement.
* Double spend problem
   * A simple way to decentralize PayPal is to make clients run all transactions. In this section we see why this is not enough.
   * How to mentally model a network & synchrony assumptions
      * Synchronous network -- Global clock, & there is a known (constant) latency L in which all messages are assumed to be received. For instance all messages propagate in 5 seconds.
      * Partially Synchronous network -- There is some unknown latency L in which all messages are assumed to be received. It is important to note that this latency is unknown and could be extremely high.
      * Asynchronous network -- Local clock, & there are no timing assumptions made. We are not able to determine objectively the time ordering of transactions, though each individual node still has an idea of what order it saw messages arrive in (and different nodes can disagree).
   * In a decentralized system, we cannot rely on a global clock, and we cannot assume a constant latency for all messages to be delivered.
   * This is the root cause of the double spend problem: an attacker can send one message to Jing & another message to Aparna each spending the same coins. If Jing and Aparna both accept those transactions, their states will diverge and we will have a fork. Not good! We need decentralized consensus!
* Proof of Authority
   * The simplest way to solve the double spend problem is by electing some of the users to sign off on ordering.
   * Creating a blockchain
      * To compactly sign off on ordering, we bundle a bunch of transactions into a block
      * Each block has a pointer to the hash of a previous block.
      * We construct a chain of blocks, and so now by signing off on one block, you are implicitly signing off on every block in that chain.
      * Users download blocks, check signatures of authorities, and use that to construct their opinion on the current balances.
   * Compared to our centralized payment processor this has benefits, but it’s not great
      * Pro: Simple; provides client-side validation.
      * Con: [censorship] Central authority cannot change the history, but they can censor transactions from being included; [not robust] single point of failure means if the authorities go offline, there isn’t a clean way to recover.
   * We’re still largely centralized! Let’s really decentralize this time :)

## Chapter 3: Proof of Work
* What properties do we look for with decentralized consensus?
   * Censorship resistant -- Everyone’s transactions will be included.
   * Reversion resistant -- A single unchanging history.
   * Robust -- The consensus engine (blockchain) will not go offline or halt.
* Proof of Work
   * What is proof of work?
      * Many types of proof of work, memory hard, cpu hard
      * Simplest form would be using a hash function over and over to generate a hash with some number of leading zeros.
         * 6 leading 0’s: hash(block_msg) == `0x000000abcdef123456789`
         * Implementation: https://github.com/karlfloersch/lessons/blob/master/lessons/02_proofOfWork.js#L16-L26 
      * The more leading zeros, the more work you have to do (computation).
      * The amount of work that is done on a chain is considered the number of “votes” that chain has. Because there is a limited amount of computation in the world, that means there is a limited number of votes, which means we are able to form a single longest chain. The work also acts as a rate limiting mechanism so that blocks are not created faster than clients can download or validate.
   * Fork choice
      * In proof of authority, we didn’t have to worry so much about forks because the authorities probably wouldn’t create a fork intentionally. However, in proof of work because anyone can participate forking will naturally occur.
      * With multiple forks, users are going to have to agree on which fork to follow. This is called the “fork choice rule”.
      * In the simplest proof of work, we can use the “longest chain” fork choice rule. If we have two forks, we compare which one is longer and choose that one.
   * Difficulty & difficulty adjustment
      * Difficulty -- The more zeros in a row, the more hashs you have to compute/work you have to do. Intuitively you can think of how much longer it takes to flip a coin and get heads once, vs flip a coin and get heads 10 times in a row.
      * Difficulty adjustment -- In order to target a particular blocktime (eg. 1 block every 10 minutes) we adjust the number of zeros the computers need to compute to create a new block. So if we find a whole bunch of blocks very quickly with a difficulty of finding 3 zeros in a row, then the protocol will say “ok now find hashes with 4 zeros in a row” and so on.
      * With difficulty adjustment we need to adjust our “longest chain” fork choice rule to be “highest difficulty chain”.
   * Reversions
      * A reversion or “reorg” happens when we choose a new chain which doesn’t include all blocks from our previous chain.
         * This is scary! Transactions which we believed to have occured may no longer be valid. This means if you received a payment, there is a chance will be “reverted”.
      * In proof of work, blocks are less likely to be reorged out of the chain the deeper they are in the chain. For instance, if a block is 20 blocks deep in the chain, we can assume that it is probably going to be included in the history going forward, assuming no extraordinary circumstances.
   * Properties of Proof of Work
      * With particular assumptions proof of work can be argued to be 1) reversion resistant, 2) censorship resistant, & 3) robust.
      * We will analyze these assumptions in the next chapter!

## Chapter 4: Attacks on Proof of Work
* Proof of work is designed to be censorship and reversion resistant, but these properties are conditional on honesty assumptions:
   * We must assume that more than 51% of all “miners” will not censor or revert the chain. If this does not hold, we lose the properties we strive for.
   * We can define an “attacker” as a participant in the consensus protocol which does not respect our properties of censorship & reversion resistance.
* Scenarios in which these assumptions could break [51% attacks]:
   * Attacker buys enough mining equipment to control a majority of the hashrate. They can now censor transactions, or even cause reversions.
   * Attacker develops mining technology which honest miners do not have access to (ASIC hardware)--allowing attacker to mine much more efficiently and thereby controls majority of the hashrate.
   * Attacker bribes miners to censor or revert blocks.
   * In each one of these scenarios we can analyze the cost of attack.
* Game theory introduction
   * Prisoner's dilemma, hawk dove, etc  https://dapp-studies.gitbooks.io/game-theory-study-group/content/notes/acigt-notes/acigt-2.1-2.3.html 
   * Nash equilibrium meaning that no agents have an incentive to diverge.
   * Cooperative game theory allows players to coordinate and choose strategies together providing all participants in the coalition a higher payoff.
      * A “fair” allocation of payoffs within the coalition can be determined in different ways.
      * A process of bargaining can occur during coalition formation.
* Game theoretic analysis of PoW
   * Brief analysis of well-known games, including discussing how bribing could fit in:
      * Availability propagation
         * Miners have an incentive to make their blocks available in order for other miners to build on top of their chain.
      * Selfish mining
         * Miners have an incentive to (at least for a short time) not make their blocks available if they control enough of the hashrate (¼ in https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf ) 0.2321 in “Optimal Selfish Mining Strategies” by Zohar et al
      * Fee stealing
         * Miners have an incentive to orphan competing miner’s blocks which pay high transaction fees, and then mine new blocks themselves which give them the fees.
      * Verifier’s dilema
         * If verifying the validity of a block is too costly, miners will opt to mine on top of blocks without validating them.

## Chapter 5: Proof of Stake
* What is Proof of Stake?
   * Alternative decentralized consensus protocol design family.
   * Votes on the main chain are weighted by the coins on that chain.
      * This is as opposed to PoW where votes are work (ie energy burned) on the chain.
* Naive Proof of Stake and the nothing at stake problem.
   * In early versions of proof of stake, there was nothing penalizing conflicting votes. This means that validators could vote on multiple conflicting histories.
      * Take a look at a payoff matrix for voting on multiple chains. Highest expected payout is for voting on both.
   * The entire point of a decentralized consensus is to come to agreement on a single transaction history. With no penalty for voting on multiple histories, we lose the entire property we are trying to guarantee.
* Solving nothing at stake by introducing slashing.
   * In order to solve the nothing at stake problem, we must penalize validators who vote on two conflicting histories.
   * To do this, we allow anyone to provide proof that a validator equivocated (voted on conflicting histories) and with that proof we punish them by burning their coins.
   * We have now introduced a strong disincentive for creating multiple histories and with that have a working decentralized consensus protocol!
      * Take a look how the payoff matrix changes for validators voting on multiple chains.
* Slashing Conditions Case Study: Casper FFG
   * Use proof of work to propose blocks.
      * Mention we can also randomly sample to propose blocks.
   * Vote on epochs every 50 blocks.
   * Slashing conditions: 1) NO_DBL_VOTE & 2) NO_SURROUND_VOTE
   * ⅔ threshold for finality means we require ⅓ coins to be slashed if two histories finalize.
   * Formal verification
      * Take a quick look at the Isabelle proof for Casper slashing conditions. Discuss the importance of both validation and verification.
* Advanced PoS Systems
   * Validator set changes
      * Validator sets can only change once there are two consecutive finalized blocks.
   * Validator Leaking
      * In order to resist censorship (a main vulnerability in PoS), we introduce leaking.
      * Leaking allows minority validators to soft fork to their own chain, and then over a period of time, they will have control of a majority of stake on their soft fork chain.
         * This allows them to reach finality & effectively coordinate a hard fork.
   * RanDAO block proposal
      * To remove PoW entirely, one approach is randomly selecting a validator to propose the next block.
      * This can be done with a onion hasing
      * Onion hashing
         * Hash a random value 10000 times, and then commit to the last hash in the chain.
         * Each time it is your turn, you reveal the previous hash in the chain. This is checked against your last reveal eg.
        I reveal `x_4` and it is checked with -- `hash(x_4) == x_5`
   * Implement Casper FFG with no slashing
   * Send `DEPOSIT` transaction which makes you a validator.
   * Send `WITHDRAW` to get your money back.
   * Sign `VOTE` transactions of the form 
`[checkpoint_hash, target_epoch, source_epoch, sig]`
      * When ⅔ votes are reached for two subsequent checkpoints, the first is finalized.
      * Extra credit
      * Add slashing conditions!
* History of Casper
    * Zamfir, V. (Dec 7, 2016) The History of Casper - [Ch 1](https://medium.com/@Vlad_Zamfir/the-history-of-casper-part-1-59233819c9a9), [C2](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-2-8e09b9d3b780), [C3](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-3-70fefb1182fc), [C4](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-4-3855638b5f0e), [C5](https://medium.com/@Vlad_Zamfir/the-history-of-casper-chapter-5-8652959cef58)

## Chapter 6: Analyzing Proof of Stake
* Fault attribution
   * Uniquely attributable faults
      * There exists proof of who committed some fault and so we can attribute it to a unique actor.
   * Non-uniquely attributable faults
      * When faults occur and we cannot identify a single perpetrator.
   * Penalties for non-uniquely attributable faults must often be dispersed amongst all possible offenders.
      * This means that people who did nothing wrong can receive penalties!
* Griefing analysis
   * An attacker may intentionally causes non-uniquely attributable faults in order to reduce someone else’s payoff. This is called griefing.
   * We can analyze these griefing attacks with the reduction in attacker’s payoff vs reduction in victim payoffs. This ratio is called the griefing factor.
   * A griefing factor of 1:1 means that for every unit of value the attacker loses in penalties, the victim node loses an equal amount.
   * A griefing factor of 1:2 means for every unit of value the attacker loses, the victim loses twice that… and so on.
* Discouragement attacks
   * A particular attack can be built out of griefing which is worth noting, this is the discouragement attack.
   * In a discouragement attack, the attacker reduces the expected payoff for honest nodes. This can result in fewer honest nodes participating in the protocol.
   * This attack can be coupled with subsequent attacks which take advantage of the honest node discouragement.
   * In Casper FFG, a discouragement attack can look like the following:
      * 1) Discourage -- reduce the expected payoff for honest nodes by going offline to make honest nodes appear to be censoring.
      * 2) Wait -- Rational nodes will realize that their expected payoff has gone down, and so will withdraw their deposits and no longer participate in consensus.
      * 2) Attack -- Cause a safety failure. This will be significantly cheaper as many of the deposits will have been withdrawn.

## Chapter 7: Solving the 1% Attack Problem and Introducing Plasma
* 1% Attack problem
   * Slides -- https://docs.google.com/presentation/d/17LipTVjy9ITlsuct7uXPL_s6RXnIlJ0b1bE1-sNi1iw/edit#slide=id.p 
   * With PoW distributed across multiple chains, we run into the problem where each chain is competing for a fixed number of miners. This means that less popular chains are often going to have far weaker security than the more popular chains.
   * PoS has a similar issue; however, if stake illiquid attackers may have a harder time purchasing enough coins to 51% attack. That said, bribing attacks are possible and stake will likely be liquid, so PoS is still vulnerable to these sorts of attacks.
* Mitigation to 1% attack problem: Plasma [improve transition]
   * Using a Plasma construction we are able to improve our security considerably by borrowing security from a more secure root chain.
   * As long as the root chain does not revert or censor transactions, assets on our chain will be secure.
   * We are able to do this by using the root chain as a mediator of conflicts in the case of failure.
* Plasma hybrid PoS construction high level overview
   * 0) A new ERC20 token is created on the main chain, Ethereum.
   * 1) A merkle tree of current token balances is submitted to the main chain. All tokens referenced in the merkle tree are now able to be minted on the main chain.
   * 2) The core blockchain continues to function normally, with blocks proposed using PoW and then finalized using PoS.
   * 3) Block headers which are finalized are now sent to the main chain with a merkle tree of all transactions from that epoch.
   * 4) Users are able to “exit” our Plasma chain and redeem tokens on the main chain. To exit they submit a merkle proof of a transaction in which they received the token.
   * 5) If this exit is invalid, or they are attempting to exit a spent coin, anyone is able to challenge them, invalidating the exit and triggering a payment from the exiter to the challenger.
   * 6) If the exit is valid, they receive their tokens on the Ethereum network.
   * 7) If the Plasma chain begins censoring transactions, users can exit their coins back onto the Ethereum network which is not censoring.
   * 8) If the Plasma chain reverts history, users can exit the chain referencing the last valid finalized block in the Ethereum chain. Everyone’s coins are safe!

## Chapter 8: Constructing Plasma Chains
* Merkle Trees and Accumulators Overview
   * One of the most foundational technologies behind Plasma is merkle trees.
   * Merkle trees are a kind of accumulator.
      * Accumulators are membership functions which are efficient, logarithmic or polylogarithmic, in storage and witness size.
         * Witness: piece of auxiliary data which is required to prove something about some other data -- ie prove membership in a merkle tree.
   * A merkle tree is a tree of hashes where every node is either the hash of its children, or if it is a leaf node, the hash of the data at that storage slot.
   * Sparse merkle trees are merkle trees with 2^256   (or in hex, 2^100)
   * RSA Accumulator overview
      * Another kind of accumulator is RSA accumulators!
      * Vitalik explains RSA accumulators to Karl -- https://photos.google.com/share/AF1QipPAUh3gAiCEEOvdwfVxzcXSezd28CbHVOfGBHjvajdS9kUvHCnzlH2p4x0cdhJD3g?key=TWRfb1N3VjY1SWdOWVlPaDVMMHdlWWhKV3JHMDJn 
   * Merkle mountain ranges
      * https://photos.google.com/share/AF1QipOqXJ10FvR-4zwpoDFeyZgbRw8OvssvzlrD0-hEkdHXqXrDU68rb7BokmVkett9xw?key=b2ZnQWcyUzdHUjg2UmVBVnlvMFkwUkgzYzdpWlFB 
   * Sparse merkle tree implementation: https://github.com/ethereum/research/tree/master/trie_research/bintrie2 
   * Cryptoeconomics aggregate signatures
      * Create a merkle tree of signatures, and then include a piece of data which attests to whose signatures you’re including (eg. a bitfield with 1 bit for each member index in some pre-selected committee).
      * If the data you attested to is wrong, then you can be challenged are slashed and the signature is invalidated.
* Fault proofs
   * The next core concept we need to understand to build Plasma is fault proofs.
   * Fault proofs are proofs of some sort of misbehavior. Things that fall under fault proofs are 1) challenges to exits, 2) equivocating as a validator, 3) proving invalid blocks
   * Fault proofs come in many forms; however, in the case where we are challenging an exit of an invalid transaction, the fault proof could be a proof of inclusion plus a signature check of the invalid transaction.
   * Truebit
      * Provide proof that the result of a computation was not done correctly.
      * This can be made easier by merklizing the computational steps so you can identify a particular point where it was done incorrectly. Allows you to prove to a smart contract.
* Exit Logic
   * Best described in https://karl.tech/plasma-cash-simple-spec/ 
   * Exit provides transaction you’re exiting and its parent.
   * Challenge provides last valid transaction which is *not* the one being exited.
* Putting it all together and deploying to Ethereum!
   * We combine all of these techniques to create a Plasma chain!
   * Each one of these components we code up in Vyper and deploy to our testnet (or mainnet Ethereum!)
      * The tech we can use to implement:
         * Vyper for smart contract programming.
         * Pyethereum for testing.
   * We now have the strong guarantee that as long as Ethereum is secure, our coins are safe!

## Chapter 9: Plasma Analysis and State Channels
* Griefing analysis
   * The validators are able to grief the users by finalizing an invalid block.
   * This is a relatively weak grief thankfully, and it also would likely lose the validators quite a large amount of money.
* Analysis of central operator
   * Our chain’s block proposal mechanism is decentralized with PoW and therefore resistant to censorship.
   * A central operator running a Plasma chain would not be resistant to censorship.
   * While the central operator can censor, they cannot steal funds!
      * This is why all exchanges which currently retain control of user funds, should immediately Plasma-fy their operations. This would allow users to have peace of mind when leaving their money on an exchange.
   * With no possibility of reversion, we get half of the important properties which blockchains provide, and that actually takes us a long way.
      * [Not provided] Censorship resistance
      * [Provided!] Reversion resistant
* Adding slashing conditions to equivocation
   * In our Plasma contract, we can add slashing conditions which are triggered when two conflicting blocks are signed off on.
   * Central operator Plasma chain
      * This is extremely easy to do. All one needs is to write a function `slash()` which takes two conflicting messages signed by the operator, and then slashes those deposits.
   * PoS Plasma chain
      * Slightly more difficult. One way to do this is to provide a cryptoeconomic signature which attests to all of the validators who should be slashed. The slashing does not take effect until the challenge period for the cryptoeconomic signature is over.
* Adding state channels
   * Collateralized central operator state channels is trivial. 
      * The operator simply needs to sign a message which says “either I include this transaction in my next block, or my stake is slashed and pays for your losses”
   * PoS Plasma chains are more difficult
      * One option is to use a 2 of 2 multisig on the main chain, which you then send coins on the Plasma chain.
      * Note that this state channel architecture also works in the centralized operator setting.
* Simple Two-Party State channel for payments -- Overview
   * Deploy a contract which accepts funds and allows parties who deposit those funds to sign messages which transfer the funds
   * These messages include a nonce
   * Either party can attempt to withdraw, and if they use the contract they can be challenged with a more recent state.
   * Both parties can sign a message to instantly close the state channel.
   * This contract can be the owner of funds in a Plasma chain.
* Optimizing watching with bloom filters
   * What is a bloom filter?
      * An efficient data structure which can prove that an element doesn't exist.
      * However, sometimes there are false positives, where the element is in the bloom filter but not in the underlying data structure.
      * This can be used to efficiently prove that elements do not exist in a Plasma merkle tree, which is useful for watching elements.

## Chapter 10: Sharding
* Solution to 1% attack problem #2: Sharding
   * Sharding allows us to secure multiple blockchains with the same validator pool.
   * Ideally this means that attacking one shard is equivalent to attacking the entire validation pool.
      * We no longer split mining up amongst chains, but instead they share security.
   * If your chain has strong security, then sharding is a great option.
   * Ethereum is doing this and it already has a large number of validators.
* The problem statement: Using a small stream of ordered available data, provide the guarantee of availability and ordering on a much larger stream of data.
   * The small stream is our root blockchain (normally).
   * The large stream are all of our ‘shard chains’.
* What we want
   * Many validators, each one validating a subset of all of the data
   * With many validators randomly sampling, we get statistical certainty that the entire chain is available with a particular honesty assumption.
* Probabilistic sampling
   * Validators need to form an opinion on the availability and ordering of data which they do not directly download. This can be done using probabilistic analysis. 
   * One can use a large pool of validators, and then randomly sample 200 of them to sign off on the availability & validity of data.
   * Now every validator can check those signatures, and then use the following reasoning:
      * “Even if I didn’t download this data myself, assuming at least X validators are honest, there is a 99.9999% chance that this data is available & valid.
* Proof of custody -- Another way to improve our guarantees is proof of custody.
   * Not only can validators sign off on having seen the data, they can also provide a proof of custody.
   * This proof of custody provides the following guarantee:
      * Either the validator had the data at the time of custody, OR all validators who do have the data can prove that they did not have the data.
   * Proof of custody algorithm:
      * 1) Commit to a merkle tree of the data, where each chunk (node in the merkle tree) is signed by a temporary private key.
      * 2) The private key must be hidden for some time T, and if revealed the validator forfeits all their stake.
      * 3) After time T, the penalty for revealing is removed, and the private key must be revealed.
      * 4) All nodes can use the data & the revealed private key to regenerate the merkle tree commitment & check if it is correct.
      * 5) If the tree is incorrect, submit a challenge.
* Combining probabilistic sampling, proofs of custody, and RANDAOs, we can start to see how a sharding protocol might be put together.
   * Ethereum is still finalizing a sharding protocol. Please contribute! 

## Chapter 11: A Variety of Economic Mechanisms
* Auctions
   * Fixed price
   * Reverse dutch
   * Vickrey
   * All-pay
* Voting
   * Commit reveal
   * Quadratic voting
   * Economic analysis of bribe attacks
* Prediction Markets Overview
   * Predict a measurable quantity at a specified date, and allow bets to be placed on the results.
   * Futarchy -- Two prediction markets, one with one decision taken into consideration, another with another decision. The choice that we make is based on the most favorable predicted outcome.
      * Can be manipulatable if you care enough about the choice that is being made.
   * Measurement challenges - most interesting variables worth predicting cannot be “objectively” measured from inside consensus code
* Token Models
   * Kickstarter-style tokens--Provides the ability to claim a product before it’s been made.
   * Access tokens--Hold a token which gives you access to services over a period of time.
   * Dividends--Hold a token which gives you claims to a portion of future profits.
      * Dividend / burn equivalence
   * Medium of exchange tokens [insert sheep saying BAAAAAAAAd emoji here]
* Schelling Points
   * Schelling coin
   * Augur
   * Reality keys (?) - Edmund Edgar has some new design, ask him about this
* Token Curated Registries
   * Using a coin-run DAO to curate a list
* Stable Coin Mechanisms
   * Collateralized debt positions (DAI <3)

## Chapter 12: The Future
* The foundations of Cryptoeconomics have been laid, but this is just the beginning.
* New ways to approach problem solving:
   * Adversarial thinking.
   * Liberal usage of cryptographic primitives.
   * Incentive analysis.
* New ways to solve problems:
   * Instead of creating a produce to solve a problem, create an economic mechanism which incentivizes other people to solve the problem for you.
      * Eg. AdDAO
         * https://ethresear.ch/t/prediction-markets-for-content-curation-daos/ 
   * Everyone is a cryptographer and economist! Not because it’s fun (it is) but because it’s practical.
* Economic mechanisms for all the things!
   * Creating music
   * Creating games
   * Creating software!
      * Wow! Open source has a business model now!
* A robust internet!
   * Incentivized mesh network.
   * P2P file storage and transfer.
      * No central point of failure.
      * No censorship (Sorry DMCA).
   * Redundancy--fewer central points of failure.
      * Web apps run locally and connect to peers, not just a central server.
* A fairer world!
   * Reinvent social structures with economic mechanisms which promote equality!
      * Like Circles -- P2P universal basic income :)
   * Reduce our risk of financial collapse with better reliability and auditability.
   * Or not ???? !
      * This technology could also be used to create mechanisms which promote economic domination and control by small interest groups.
      * An ICO scam which raises a bunch of money from idealists, promising to create a decentralized censorship resistant protocol, but instead create a protocol where it claims to be decentralized but doesn’t actually provide fraud resistance or censorship resistance.
* Let’s spread this knowledge far and wide so we can build a better future.
   * And resist the super intelligent AI which could easily manipulate our brittle centralized economies! ;)

------------------

## Extra Content
This section contains content which was suggested but so far has not been explicitly added to the curriculum. Will be trying to find ways to cleanly integrate this content in relevant sections.

#### ldct
* spontaneous order as a framework (Hayek)
* local knowledge problem and why centralization cannot coordinate activity well (Hayek)
* firm organization (Ronald Coase)
* public choice theory - incredible intro to incentives at work (Buchanan)
* supply, demand, substitution
* purchasing power
* public goods
* incentive-type stuff: adverse selection, moral hazard
* definition of homomorphic encryption
* definition of threshold signatures eg comparing BLS vs using a bunch of ECDSA signatures
* pedersen commitments
* pedersen commitments -- sum of commitment of A & B is itself a commitment to A&B
* organizing principles? (eg pedersen commitments as a kind of partially homomorphic commitment scheme, ECDSA as a specific kind of zero knowledge proof)
* the spore framework from georgios piliouras and vlad (there’s a video on youtube) looks like a really nice framework
* analysis of dpos protocols
* The crash fault / byzantine fault difference from traditional distributed systems
* Rough intuition for actual cost of running programs on a laptop (for all the people out there who think dpos/hashgraph/whatever gets high TPS because they “cut down communication costs”)
   * Cost of bandwidth, cost of storage, cost of computation
      * Bandwidth is going down while computation is stagnating

#### dan
* Token velocity sinks (incentive to hold token for a long time
* Domain name registry pricing
* HTLCs and cross-chain atomic swaps

#### ralexstokes
* who are these “actors/agents”?
* what is incentive-compatible? (a term you see thrown around w/o definition)

#### DonaldMcIntyre
* Trust minimization, immutability, fungibility, finality, censorship resistance, permissionlessness, accountability, reconcilability, least authority, adherence.

#### ben_jones
*  multi-party computation
* Curation markets
* mechanics of decentralized exchanges (i.e. atomic swaps)

#### bigphil [awesome content!]
* spontaneous order as a framework (Hayek)
* local knowledge problem and why centralization cannot coordinate activity well (Hayek)
* firm organization (Ronald Coase)
* public choice theory - incredible intro to incentives at work (Buchanan)

#### DmSuja
* Emergence theory (how the rules of the systems affect users on each level)

#### paulapivat
* https://github.com/PaulApivat/cryptoeconomics/blob/master/WIP_subjectlist_supplement.pdf
