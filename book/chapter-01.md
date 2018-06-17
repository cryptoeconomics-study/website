### Topic Jump

* [1.1 Cryptographic tools](#1-cryptographic-tools)
* [1.2 One way hash functions](#2-one-way-hash-functions)
* [1.3 Public Key cryptography](#3-public-key-cryptography)
* [1.4 Digital signatures](#4-digital-signatures)

<br />

<hr />

# Chapter 1: Centralized Payment Processor

In [Chapter 0](https://github.com/cryptoeconomics-study/website/blob/master/book/chapter-00.md) we introduced you to the concept of cryptoeconomics, outlined the tools for designing cryptoeconomics systems and also studied cryptoeconomics in Bitcoin at a high level. 

**Introduction**
In Chapter 1 we will learn about cryptographic primitives and how they have been used to build Bitcoin and Ethereum. We will also explore the design of an centralised computer system; our Web 2.0 Paypal payment processor and and also discuss the pros/cons of centralized systems.

Before we look at our centralise payments processor, lets take a look at some cryptographic tools that are not only used for building decentralised computing systems but for most applications we use today. This will provide some basic context for the topics we will explore in the later chapters.

## Cryptographic tools

Cryptoeconomic design is the use of cryptography and economics to generate a desired end goal. In our specific case, we will be looking at it in the context of distributed systems. We use different tools such as mathematical guarentees and economic incentives to achieve certain participating behaviours or certain end outcomes.

**Cryptography is the practice of secret and secure communication.** Existing for thousands of years, it is a practice which uses mathematics and probability to secure information. Cryptography involves ensuring...
- Confidentiality (keeping information a secret to eavesdroppers)
- Authentication (verifying the correct origin of information)
- Integrity (proving that information has not been tampered with)
- Nonrepudiation (proving the author of signed information)

### One way hash functions

A hash function produces a deterministic fixed-size, random looking output which is called a hash. These hashes are one-way mathematical functions that take a variable length input of any size and produces a unique fixed length output called a hash value. This function is considered as 'one way' as it is very difficult to find the original input of a hash value. This is unless you try to brute force guess all existing inputs to find a matching hash value. 

If you are interested in the security of the hash function, here is a video: [Security of SHA-256 hashfunctions](https://www.youtube.com/watch?v=S9JGmA5_unY)

Bitcoin uses the SHA-256 Hash function and Ethereum uses the Keccak hash function, which is a a derivation of the SHA256 hash function. Here is an example of a hash input and a typical output. [You can play with the SHA-256 hash function yourself here.](http://passwordsgenerator.net/sha256-hash-generator/)

SHA 256(Hello world) = 64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C

The magic of hash functions is that they are deterministic. This means that if you change the input in any shape or way, the output will also change. The same message will ALWAYS result in the same hash value. It is difficult to generate the same hash value with two different inputs however it is possible ~ this is called a collision. They are mathematically unlikely but can they be reproduced with certain hash functions such as the cryptographically defunct SHA-1 and MD5 functions.

Hash functions are mainly used for securing the integrity of information and thus also can act as unique identifiers. Since hash functions are deterministic, they are able to prove that certain pieces of information have not been tampered with. If information is tampered with, it will produce a different hash to the original version.

Cryptographic hashing are one of the mainly key ingredients that are used to secure proof of work (PoW) blockchains. Conceptually, blockchains are linearly chained ‘blocks’ of data where blocks of data are groups of transaction information.  With each respective block generation, the block's data produces a hash value which is then embedded along with the next block of data. This creates a cryptographic proof where if you were to change something in the past history of the blockchain data, it would deterministically change the hash value of the block in front of it, causing a 'chain' reaction, resulting in a totally different blockchain made of different hash values. 

![Blockchain Diagram from Google Images](http://learningspot.altervista.org/wp-content/uploads/2017/05/blockchain_structure-960x506.png)

For a block to be accepted by the PoW blockchain, you must produce a block hash which fits the block criteria - the amount of zeros at the beginning of the hash value. (The SHA 256 produces hash values represented as hexadecimals. They are a base 16 numerical system. Binary is base two. Numbers are base 10 - 0 to 9)

The hash of the block changes by changing a number known as a nonce. Block producers or miners race to solve the puzzle of the right nonce to find the matching hash value to claim the block reward. This takes billions of attempts as well as a lot of computing power as incentivised by block rewards. Take a look below...

    Block criteria: 0000xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    "Hello, world!0" => 1312af178c253f84028d480a6adc1e25e81caa44c749ec81976192e2ec934c64
    "Hello, world!4248" => 6e110d98b388e77e9c6f042ac6b497cec46660deef75a55ebc7cfdf65cc0b965
    "Hello, world!4249" => c004190b822f1669cac8dc37e761cb73652e7832fb814565702245cf26ebb9e6
    
    "Hello, world!4250" => 0000c3af42fc31103f1fdc0151fa747ff87349a4714df7cc52ea464e12dcd4e9
    
    => success! We found the matching hash value :) = $$$$

This race to find the right hash is continuous where block producers will pool together computing power to try to win the race as a group. These different groups will have the longest chains. To change the pass and maliciously attempt to get the change to be accepted as the accepted history, you must produce a longer chain. To do this, you will require an astronomical amount of computing power to do so. And unless you do so your data will be rejected as invalid and adopt the longest chain's data. 

### Public key cryptography

Public key cryptography is a cryptographic key system separates the functions of a symmetrical cipher key into their respective functions: public key and a private key. It solves the key distribution problem involved with the symmetrical encryption. Okay, let's talk about what that exactly means…

Encryption is a mathematical algorithm that renders information unusable. It produces an output called a cipher text. It can be unscrambled or decrypted to produce the original input known as the plain-text.

    encryption(Plain-text) = Cipher-text
    decryption(Cipher-text) = Plain-text

The inner workings and mechanics of these algorithms are public knowledge... So if the algorithms are known, can’t anyone decrypt the encrypted information?

Encryption algorithms uses a secret key or 'password' to secure the information. Unless someone has the key, they cannot decrypt the information. There are two types of encryption algorithms which manage keys differently: symmetrical and asymmetrical algorithms.

Symmetric algorithms secure their information with a key where is also used for the decryption of cipher-texts as described in notation below:

    encryption(key1, Plain-text) = Cipher-text
    decryption(key1, Cipher-text) = Plain-text

The problem with symmetrical encryption is that if person A wants to use the encryption algorithm to communicate with person B, they both have to have the secret key to decrypt the encrypted messages. Only once their key has been exchanged, will they be able to communicate in secret. The problem is that this 'key exchange' cannot be done using compromised communication channels where a eavesdropper might be listening in on. This is known as the key exchange problem. Symmetrical key systems require the sharing of a sensitive secret.

Public key algorithms or asymmetrical encryption algorithms, solves this problem. With public key cryptography, the encryption and decryption functions of the key are separated into two keys as opposed to being a single key with dual functionality.

Since, there are two keys with their respective encryption and decryption capabilities separated, person A can simply share their encryption key or public key to person B over insecure communications without fear of compromising the confidentiality of the message. Anyone with the public key can encrypt messages. The cipher-text can also be freely intercepted but cannot be decrypted without the decryption key. Person B receives person A’s public key and now can use that to encrypt his own message to produce a cipher-text. Person B sends back the cipher-text back to person A where Person A then decrypts the cipher-text using their own decryption key or private key. Person A’s private key is at no point at risk of compromise as opposed to the symmetrical key exchange. The sensitive secret in this case neither moves or is exchanged.

Public key encryption is used for sending secure messages over insecure communications. They are also used for digital signatures and is the underlying concept that validates transactions on a public ledger.

### Digital signatures

**In the real world, we use signatures as an act of deliberation from someone.** It is used as a to agree with documents and claim authorship of work. While relatively straightforward, the concept of signatures have a lot of meta properties tied to them. If we consider a signature, what makes them a signature?
- Unforgeable: The signature is unique to the signer and thus is proof of an identity
- Unalterable: The signature cannot be altered or moved to another document
- Nonrepudiable: The signature cannot be revoked afterward

Signatures in real life can be forged and especially with digital signatures as files can be easily copied and tampered with. How can you achieve a sign of deliberation that satisfies all the requirements of a signature? The answer is in a public key cryptography algorithm called the Digital Signature Algorithm (DSA).

For Person A to sign a document, a hash value is produced from that document using a hash function. Person A uses the encryption key, which is kept hidden, to encrypt the hash value of the document to produce a cipher-text: E(H). For DSA, the encryption key is the private key that is kept a secret and the decryption key is the public key that is published into the open. Person A publishes the document and along with the E(H). Anyone can verify that person A has signed the document by hashing the document and then using Person A’s trusted and published decryption key to decrypt the cipher-text E(H) to produce the same hash of the document. If the document hashes match, then the signature is valid.

You can think of the decryption of the right hash as the signature itself. The successful decryption is proof 
 it is never exposed but rather the key used for encryption. The uniquely transformed cipher-text is proof of signature.

## States transitions

Water has different states: gas, liquid and solid. States are information at certain points in time and you can think of state transitions as how information changes from one moment to another.  If you freeze time in the world, it would be one state. But as you say resume time for one second, the world would transition to the next state within that second. We are going to look at the concept and exchange of money in terms of state transitions.

Imagine you have 10 dollars cash in your wallet right now and are standing next to a person call Ralph who has no $0 cash in his wallet.

If you were to give Ralph $3 to put into his wallet, the state transition would be:

**Current state:**
You: $10
Ralph: $0

If you were to give Ralph $3 to put into his wallet, the state transition would be:

**State transition:**
You: $10 → $7
Ralph: $0 → $3

This transition would result in the new state:

**New state:**
You: $7
Ralph: $3

Money is a medium of exchange which allows you to buy goods and services. It is valuable and scarce ! It doesn't grow on trees and no one can counterfeit the money even if they tried. Only the bank has the ability to print more money. You only can receive and send money whereas the bank can mint new money.

Considering the state change above: **What does it really mean to give someone money?**

1. When you have the money, you are able to do anything you want with it. You can send, hold or even throw it away. You can do this because you physically hold it in your wallet.

2. When you don't have money you can't physically use it. When you hand money to someone else, there is physical exchange but also proof that you don't have it anymore and the other person now has it.

When you give someone else money you authorise a state transition and your state changes. One interesting way to think about cryptocurrencies is that you are able to cryptographically about to prove state transitions through a public ledger that both parties trust. You are able to prove that you don't have something anymore, and doing so digitally before Bitcoin was considered very difficult.

## Digital cash system

The physical representation of cash almost mirrors digital cash systems we will be looking at in many aspects. It works very similar to the concept of real life cash. There are two types of transactions: Mint or Send. Minting is the creation of cash which usually can only be done by the bank but in our case Paypal itself. Send is a transaction that can be done by anyone just like real life cash notes.

The beginning of this payments system, where there no activity has taken place, is called the genesis state or initial state. All ledgers are really just a list of state transactions applied to the genesis state. These transactions are usually grouped together in chronological time intervals, called blocks. The most recent states are derived from the state transitions applied by to the genesis state.

In this payment system, instead of physically carrying cash in a wallet, your ownership of funds is listed to a unique public address to which you hold the corresponding private key that can be used to sign signatures. You are able to control the state of this unique address if the signature can be verified by the public address. Instead of physically handing money to someone else, you sign state changes to your own balance with your signature. And if the is enough cash in your balance and your signature matches the balance address, then the state transition is executed.

Similar to cash notes, you cannot send the same cash notes over and over again and to also protect yourself some something similar happening, each state change is submitted with a unique number known as a nonce. A nonce is a number that increments with each state change from your account and gives you relay protection - meaning you can't resubmit the same transaction multiple times and bleed your account dry. 

In code, a state transition function might look like:

    function applyTransaction (state, tx) {
      // Check the from address matches the signature
      const signer = EthCrypto.recover(tx.sig, getTxHash(tx.contents))
      if (signer !== tx.contents.from) {
        throw new Error('Invalid signature!')
      }
      // If we don't have a record for this address, create one
      if (!(tx.contents.to in state)) {
        state[[tx.contents.to]] = {
          balance: 0,
          nonce: -1
        }
      }
      // Check that the nonce is correct for replay protection
      if (tx.contents.nonce !== state[[tx.contents.from]].nonce + 1) {
        throw new Error('Invalid nonce!')
      }
      // Mint coins **only if identity is PayPal**
      if (tx.contents.type === 'mint' && tx.contents.from === accounts.paypal.address) {
        state[[tx.contents.to]].balance += tx.contents.amount
      } else if (tx.contents.type === 'send') { // Send coins
        if (state[[tx.contents.from]].balance - tx.contents.amount < 0) {
          throw new Error('Not enough money!')
        }
        state[[tx.contents.from]].balance -= tx.contents.amount
        state[[tx.contents.to]].balance += tx.contents.amount
      }
      state[[tx.contents.from]].nonce += 1
      return state
    }

Check out the code implementation of it here: [https://codepen.io/karlfloersch/pen/YaEoYy?editors=0012](https://codepen.io/karlfloersch/pen/YaEoYy?editors=0012)

## Balance model vs UTXOs

In the code implementation as well as with Ethereum, balances derived from the latest state transition of an account. All transactions involve the reduction of one account and the increase of another balance.  A transaction is valid if the sending account has enough balance to pay for it, in which case the sending account is debited and the receiving account is credited with the value. 

Bitcoin however uses another model of handing states using a UTXO model (Unspent Transaction Output). Rather than the account balance being a state, it is the aggregation of how much unspent transaction outputs they have. They work similar to chocolate bars. You either own a whole chocolate bar or pieces of chocolate bars. You can count how much Bitcoin or chocolate in total you have but can't really put them together all in one block. When you want to transact in chocolate you have to pay the total amount in 'pieces' or many different unspent transactions.

![UTXO Diagram by Pet3rpan](https://cdn-images-1.medium.com/max/1600/1*zVkkJFKf_AbGNmU42tVFzQ.png)

Benefits of UTXOs:

- **Higher degree of privacy:** If a user uses a new address for each transaction that they receive then it will often be difficult to link accounts to each other. This applies greatly to currency, but less to arbitrary dapps, as arbitrary dapps often necessarily involve keeping track of complex bundled state of users and there may not exist such an easy user state partitioning scheme as in currency.

- **Potential scalability paradigms:** UTXOs are more theoretically compatible with certain kinds of scalability paradigms, as we can rely on only the owner of some coins maintaining a Merkle proof of ownership, and even if everyone including the owner decides to forget that data then only the owner is harmed. In an account paradigm, everyone losing the portion of a Merkle tree corresponding to an account would make it impossible to process messages that affect that account at all in any way, including sending to it. However, non-UTXO-dependent scalability paradigms do exist.

Benefits of balances:

- **Large space savings:** for example, if an account has 5 UTXO, then switching from a UTXO model to an account model would reduce the space requirements from (20 + 32 + 8) * 5 = 300 bytes (20 for the address, 32 for the txid and 8 for the value) to 20 + 8 + 2 = 30 bytes (20 for the address, 8 for the value, 2 for a nonce(see below)). In reality savings are not nearly this massive because accounts need to be stored in a Patricia tree (see below) but they are nevertheless large. Additionally, transactions can be smaller (eg. 100 bytes in Ethereum vs. 200-250 bytes in Bitcoin) because every transaction need only make one reference and one signature and produces one output.

- **Greater fungibility:** because there is no blockchain-level concept of the source of a specific set of coins, it becomes less practical, both technically and legally, to institute a redlist/blacklisting scheme and to draw a distinction between coins depending on where they come from.

- **Simplicity:** easier to code and understand, especially once more complex scripts become involved. Although it is possible to shoehorn arbitrary decentralized applications into a UTXO paradigm, essentially by giving scripts the ability to restrict what kinds of UTXO a given UTXO can be spent to, and requiring spends to include Merkle tree proofs of change-of-application-state-root that scripts evaluate, such a paradigm is much more complicated and ugly than just using accounts.

- **Constant light client reference:** Light clients can at any point access all data related to an account by scanning down the state tree in a specific direction. In a UTXO paradigm, the references change with each transaction, a particularly burdensome problem for long-running dapps that try to use the above mentioned state-root-in-UTXO propagation mechanism.

savings for space?, greater fungibility - however black lsits can happen?, simpliity easy to understand, client reference.

## Centralised and decentralised systems

Unknown to many, the need for decentralised computer systems has existed since the beginning of the 80s. Nearly 3 years after the open publication of public key cryptography, a post graduate student known as David Chaum released the paper "[Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms](https://www.chaum.com/publications/chaum-mix.pdf)" (1979). He was recently introduced to the field of cryptography and believed that while public key would solve the privacy of the information, the metadata around those messages were just as important to personal privacy. His paper solves the metadata problem of messaging by introducing a concept known as mix networks where messages are batched together and then send through multiple nodes before exiting to their final destination, thus rendering the sender anonymous by obfuscating the time of sending, sender address, and size of message. Indirectly he had invented the first initial instance of a decentralised computer system, one where the transportation of digital messages were spread amongst nodes to ensure privacy.

On top of this idea, he went on to patent the world's first cryptographic electronic cash system ([Patent US4529870](https://www.chaum.com/patents/US4529870.pdf)) in 1980. He pursued the concept of decentralised computer systems asn released his dissertation "[Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups](https://www.chaum.com/publications/research_chaum_2.pdf)" (1982) where he presented the needs for decentralised computer systems. With being one of the first to recognise the importantance of metadata, he beleived that the uncryptographially protected congregation of data around centralised computer systems would enable mass surveillance programs and the exploitation of consumer behaviours for marketing purposes. He didn't trust the companies to protect his data, instead, he had trust in cryptography to do so. 

“Large-scale automated transaction systems are imminent. As the initial choice for their architecture gathers economic and social momentum, it becomes increasingly difficult to reverse. Whichever approach prevails, it will likely have a profound and enduring impact on economic freedom, democracy, and our informational rights.”

* From his most iconic paper "[Security without Identification Card Computers to make Big Brother Obsolete](https://chaum.com/publications/Security_Wthout_Identification.html)" (1985) *

The interesting thing about the need for cryptographic protection and security of systems is that decentralisation and transparency of the code goes hand in hand. For such a system to be trusted, its code must be transparent to be tested and trusted and the execution of the code to be trusted requires a trusted third part to execute it. A human wouldn't do, we would have to depend on a network of computers to do so. Ethereum does exactly just that. 

Advantages of centralized systems

- **Building, maintaining, designing:** After decades of building centralised systems, we have become very good at building them, scaling, designing and developing them.
- **Cheap:** As a result of years of progress in designing more efficient centralised systems and market competition for providing centralised systems, it is very cheap to operate them.

Disadvantages of centralized systems

As opposed to centralised computer systems, blockchains decentralised the security and verification of information. It enables a trustless linear state of information secured by thousands of independant computers around the world. And of course, Ethereum enables trustless execution of code.

- **Trust:** Due to centralised management, security and verification of information, we have to trust organisations based on legal regulations and mostly human trust for them to 'follow the rules'. These rules have been broken numerous times and has little meaning anymore. Edward Snowden's leaks in 2013 revealed evidence of CIA Mass Surveillance progams that had monitored 'private user' data from google, facebook, yahoo, verizon and more.
- **Complete authority:** Due to complete control over information and the management of information, information can be censored and controlled in opaque manners. An example of this includes the icnreased censorship of Reddit and how many other centralised services are pressured to censor information. This is not only dangerous to the freedom of speech but the freedom of information.
- **Central point of failure:** Due to the centralised security of information, these sources are vulnerable to exploitation, bugs or human error as a central point of failure. An example of this would be in 2018 where the biggest bank in Australia, Commonwealth Bank of Australia, lost and was unable to recover the records of over 20 Million users of its users.

## Further reading

**Applied Cryptography by Bruce Schneier**
Thorough textbook that covers basic cryptographic concepts and protocols. [Link](https://www.schneier.com/books/applied_cryptography/)

**Papers written by David Chaum:** 
Papers written during the 80s by a prominent cryptography on the need for decentralisation
- [Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms](https://www.chaum.com/publications/chaum-mix.pdf) (1979)
- [Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups](https://www.chaum.com/publications/research_chaum_2.pdf) (1982)
- [Security Without Identification: Transaction Systems to Make Big Brother Obsolete](https://www.chaum.com/publications/Security_Wthout_Identification.html) (1985)
- [Untraceable Electronic Cash](https://www.chaum.com/publications/Untraceable_Electronic_Cash.pdf) (1988)

## References
Benefits of UTXOs & Balances: https://github.com/ethereum/wiki/wiki/Design-Rationale#accounts-and-not-utxos
