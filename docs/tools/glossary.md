---
title: "Glossary"
---


## Ethereum Wiki Glossary
- https://github.com/ethereum/wiki/wiki/Glossary


## Cryptoeconomics.Study Community Glossary 

Glossary (alphabetical) of terms and lingo used in the Cryptoeconomics.Study lectures, documentation, and code challenges.

search #! for open questions/problems

In addition to abstract definitions, it would be great to add: 
- examples and common usecases for each thing 
- reference links to dive deeper 


# Computer Science
- state
- nodes
- graphs
- randomness/entropy
- psuedo anonymity and data correlation
- privacy vs anonymity
- etc…

### Ledger:
A record of information.

### State:
A snapshot of a ledger at a particular moment in time.

### Distributed Ledger:
A ledger that is distributed amongst multiple parties who agree on it's state.

### State transition:
A function that takes the state then transforms it into another state.

### Consensus:
The act of reaching agreement between parties.





# Game Theory:
- equilibrium
- Nash equilibrium
- perto optimal
- prisoners dilemma
- iterated v finite games





# Crypto
- verification: hashes, merkle trees, commitment schemes
- security: digital signatures (pub/private key encryption)  

### Cryptography: 
Deals with making communications secure and verifiable.

### Cryptoanalysis: 
Deals with breaking ciphertext, that is, recovering plaintext without knowing the key.

### Cryptology: 
A branch of mathematics which deals with both cryptography and cryptoanalysis.

### Hashes
- Hashes allow us to fingerprint some information with a short name. Anyone can take the hash of some file and save it. You can then use this hash to prove to others that you (a) have seen the file before (b) no one has tampered with the file.
- a secure hash has several properties: avalanche effect, preimage resistance, etc...

For example, the Bitcoin whitepaper has a certain hash. A while ago the Bitcoin Core foundation wanted to change the official URL of the whitepaper. They wanted it to point to an “improved” version of this whitepaper that Satoshi wrote. Since they control the bitcoin.org URL they can do this. A long time ago someone with foresight saved the hash of this whitepaper in the Blockchain. This means it’s very easy to see if someone well-intentional changes the original file.ered with the file.

### Preimage: 
the input to the hash function
<br>A is a preimage of B if B = hash(A)

### Digest/Hash: 
the output of the hash function

### Preimage Resistance: 
it is computationally infeasible to find the input to a hash funciton given it's output.

### Collision Resistance: 
a hash funciton produces a unique output for every unique input. A "collision" would be if H(a) = H(b). 

### Encryption: 
The process of turning a clear-text message (often called Plaintext) into a data stream which looks like a meaningless and random sequence of bits (called ciphertext). The process of turning ciphertext back into plaintext is called decryption.

### Symmetric Key Encryption: 
Use the same key for encryption and decryption. These algorithms require that both the sender and receiver agree on a key before they can exchange messages securely.

### Public-key algorithms (also known as asymmetric algorithms): 
Use two different keys (a key pair) for encryption and decryption. The keys in a key pair are mathematically related, but it is computationally infeasible to deduce one key from the other. These algorithms are called “public-key” because the encryption key can be made public. Anyone can use the public key to encrypt a message, but only the owner of the corresponding private key can decrypt it.

### Public Key: 
these can be public facing and are often like an address that anyone can send information to.

### Private Key: 
every public address has a unique private key. Whoever controls the private key controls the address. While anyone can send data to the public key, only the private key can autorize data to be sent out from the address. This means that you can prove to others that you wrote a certain message. For example, that you authorized a transaction, voted, or posted some content at a certain time before anyone else. 

### Commitment Scheme
a cryptographic primitive that allows one to commit to a chosen value (or chosen statement) while keeping it hidden to others, with the ability to reveal the committed value later.[1] Commitment schemes are designed so that a party cannot change the value or statement after they have committed to it: that is, commitment schemes are binding. Commitment schemes have important applications in a number of cryptographic protocolsincluding secure coin flipping, zero-knowledge proofs, and secure computation.

A way to visualize a commitment scheme is to think of a sender as putting a message in a locked box, and giving the box to a receiver. The message in the box is hidden from the receiver, who cannot open the lock themselves. Since the receiver has the box, the message inside cannot be changed—merely revealed if the sender chooses to give them the key at some later time.

Interactions in a commitment scheme take place in two phases:
- the commit phase during which a value is chosen and specified
- the reveal phase during which the value is revealed and checked




# Economics:
- incentives (rewards/punishments, slashing, block rewards, etc…)
- types of value (financial rewards, reputation, voting power, privilege => the right to make a certain decision)

### Bitcoin Example:
In Bitcoin, when a miner finds a block they get a direct reward of some Bitcoin. More generally we can call this a token reward. The miner also has the privilege to decide which transactions to include in that block, and they generally choose transactions with the highest fees attached. 

### PoS Example:
In proof of stake nodes put down a security deposit, but if they behave badly this deposit gets taken away.







# Blockchain Specific Stuff
- checkpoint
- epoch
- finality
- fork choice rule
- proof of work
- proof of stake

### Checkpoint (Ethereum): 
the last block under consideration for finality for a given epoch.

### Epoch (Ethereum): 
a length of time measured in blocks. As of today's specs, an epoch is 100 blocks and spans between two checkpoints.

### Finality: 
The point at which a block has been decided upon by a client to never revert. In PoW rather there is no finality, only deeper block confirmations. 

### Fork choice rule: 
the rules for traversing a dag in order to find the canonical chain.

### Epoch (Ethereum): 
a length of time measured in blocks. As of today’s specs, an epoch is 100 blocks and spans between two checkpoints.

### Finality: 
The point at which a block has been decided upon by a client to never revert. In PoW rather there is no finality, only deeper block confirmations.

### Centralized nodes: 
One node controls the network. Fault tolerance is low.

### Distributed nodes:

### Decentralized nodes:

### Decentralized Consensus: Consensus arrived from many parties

### Nonce:

### Central Operator:

### Censorship Resistance:

### Reorganization/Reorg:

### Blocks: 
Groups of transactions and other their associated meta data that are cryptographically signed and appended to a chain of such blocks.

### Minners/validators: 
Decides on the order of transaction by voting for it through different cryptographic protocols such proof of work or proof of stake.

### Selfish mining:
The act of mining blocks ahead of the network without broadcasting the blocks.

### Porous Boundaries: 
Protocols where the users of the protocol can become miners and validators.

### Rigid Boundaries: 
Protocols where users of the protocol can NOT become validators/minners

### Checkpoint (Ethereum): 
the last block under consideration for finality for a given epoch.

### Rate limiting:

### Verifiable delay functions:

### Randomness beacon:
A source of randomness that is cryptographically secure.
#! HOW? offchain oracle services via quantum measurements, radioactive decay, or lavalamps?

### Burning:
The act of destroying a crypto (often by sending to an irretrievable address). Assuming demand stays the same, this reduces supply and thus increases the value per token.











# Meta: combining tools to make secure cryptoeconomic mechanisms
- protocol level security (aligning incentives to ideally make the perto optimal outcome also the dominant strategy with no incentive to deviate (Nash)): PoW, PoS
- incentives in iterative games vs finite games with reputation and compounding value
- where we need security vs where it’s nice to have (esp relevant for plasma chains where only account balances/tokens need to be stored on the parent chain)
- voting (QV, correlated slashing, commit/reveal schemes)
- attacks and defenses

Blockchain: a merklized linked list of blocks where each new block commits a group of transactions/data to the previous one via a hash function, forming a chain of blocks. In order to commit a group of transactions/data, you need to solve a very very complicated puzzle. If one were to try to retroactively change the data in a previous block, you would need quite a bit of compute power to solve all the puzzles between the current block and the block being changed. Considering that all the computers mining blocks (solving puzzles and committing information) on the bitcoin blockchain vastly surpass the compute power of all the world's supercomputers combined... this seems unlikely. Not impossible, but unlikely. 
- hashes verify the data's authenticity
- public/private key crypto secures your account
- economic incentives reward people for solving puzzles to secure the network and commit data

#! this needs to be expanded
### Other Stuff:
- convergence (of blocks, towards a shared truth)
- validity (ensure you have the funds and you signed transaction)
- data availability (you can inspect full historical data)
- non-censorship (if you pay a fee your transaction gets included)
- P+epsilon attacks (taking over a network by bribing participants and paying $1)
- Vickrey auctions (efficient price allocation with private information)
- Fault attribution (punishing bad behavior when you don’t know exactly what happened)
- Dominant assurance contracts (making public goods financing a self-interest)
- Cryptoeconomic security margin (how much do you have to pay to take over a network)

#! Add bitcoin as a cannonical example of cryptoeconomics in action? (https://discuss.status.im/t/cryptoeconomics-what-is-it-about-and-why-should-you-care/78)

### Discouragement attack: 
an attack where an adversary burns resources to decrease payoff for others in the network.

### Fork choice rule: 
the rules for traversing a dag in order to find the canonical chain.

### PoW (Proof of Work): 
a consensus mechanism where resources are burned to verify transactions.

### PoS (Proof of Stake): 
a consensus mechanism where validators stake a number of tokens proportional to their voting power in finalizing blocks.

#! update this to the latest version and find out what it's actually called
PoS Consensus
if a validator node commits an error, it gets penalized an amount proportional to the number of other nodes that have committed an error around the same time. This incentivizes nodes to set themselves up in such a way that their failure rate is maximally uncorrelated with everyone else’s failure rate, reducing the chance that many nodes fail at the same time and threaten to the blockchain’s integrity

### Assurance Contract: 
a system where some public good is funded by giving anyone the opportunity to pledge money, and only collecting the pledges if the total amount pledged exceeds some threshold. 

### Proof of stake conditional hashcash: 
when you commit to something (like sending someone an email), you stake a small value along with that commitment and give the receiver the opportunity to burn that stake if they so choose (in this case if they view your message as spam).





# Common Misconceptions

### Onion hashing: 
- Using the layers of hashing (ie finding the hash of a hash of a hash) to generate a source of randomness.
#! This is only a secure form of randomness if the input to the original hash is a cryptographically secure form of entropy. Otherwise it's just psuedorandom because hash functions are deterministic. (mostly sure)

### Small Game Fallacies
- https://unenumerated.blogspot.com/2015/05/small-game-fallacies.html
When analyzing cryptoeconomics it's VERY important to think about opportunity costs OUTSIDE of the mechanism
- example: if I lock up $X staking ETH, the rate of return/interest has to be MORE than I could get from other investments, including those outside of the crypto world like bonds. This is important otherwise the only participation will be due to altruism, which is a weak strategy. 

