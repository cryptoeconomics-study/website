# Chapter 1: Centralized Payment Processor
// TODO: Re-write overview paragraph. Need to add a description overview of states and paypal central payment processor.

In chapter 0 we introduced you to the concept of cryptoeconomics, outlined the tools for designing cryptoeconomics systems and also studied the bitcoin mechanism at a high level. In this chapter, we will dive deeper into the cryptoeconomic tools we mentioned before (Hashes, public key cryptography, digital signatures) and also start looking at the design of decentralized computing systems.

## Cryptographic tools

Cryptoeconomic design is the use of cryptography and economics to generate a desired end goal for distributed systems. Using mathematical guarantees and economic incentives, these end outcomes are engineered through a set of mechanisms that align individual participants of cryptoeconomic systems with desired participating behavior. 

Cryptography is the practice of secret and secure communication. Existing for thousands of years, it is an ultimately about using mathematics and probability to secure information. Cryptography is used to secure... 
- Confidentiality (keeping information a secret to eavesdroppers)
- Authentication (verifying the correct origin of information)
- Integrity (proving that information has not been tampered with)
- Nonrepudiation (proving the author of signed information)

### One way hash functions

// TODO: Edit section to mention describe pre-image resistance / 2nd pre-image etc.

Hashes are one-way mathematical functions that take a variable length input of any size and produces a unique fixed length output called a hash value. This function is considered as 'one way' as it is very difficult to find the original input of a hash value. This is unless you try to brute force guess all existing inputs to find a matching hash value. 

(If you are interested in the security of the hash function, check out this video: [Security of SHA-256](https://www.youtube.com/watch?v=S9JGmA5_unY))

The hash function that Ethereum uses, follows the design of SHA3-256 hash function. Here is an example of a hash input and a typical output. [You can play with the SHA-3 256 hash function yourself here.](http://passwordsgenerator.net/sha256-hash-generator/)

SHA-3 256(Hello world) -> 64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C

The magic of hash functions is that they are deterministic. This means that if you change the input in any shape or way, the output will also change. The same message will ALWAYS result in the same hash value. It is difficult to generate the same hash value with two different inputs however it is possible ~ this is called a collision. They are mathematically unlikely but can they be reproduced with certain hash functions such as the cryptographically defunct SHA-1 and MD5 functions. 

Hash functions are mainly used for securing the integrity of information and thus also can act as unique identifiers. Since hash functions are deterministic, they are able to prove that certain pieces of information have not been tampered with. If information is tampered with, it will produce a different hash to the original version. 

This is a core underlying property that secures proof of work (PoW) blockchains. Lets take a look at how... In essence, blockchains are linearly chained ‘blocks’ of data. These blocks are known as Merkle trees, a hash value generated from 'trees' of other hashes. With each respective block, their hash value is generated with along with the hash of the previous block. Thus if you were to change something in the past history of the blockchain data, it would deterministically change the hash value of the block in front of it, causing a 'chain' reaction, resulting in a totally different blockchain made of different hash values. 

Unless it is accepeted by the majority of the nodes that validate blocks of data, it is rejected as invalid. To overcome all of this, this you would not only have to recompute all the hashed blocks to form the new chain but also have enough computing power to out compete the production of other block creators. Hashes protect the integrity of data.

### Public Key Cryptography

Public key cryptography is a field of cryptography which solves the key distribution problem involved with the symmetrical encryption. Okay, let's talk about what that exactly means… 

Encryption is a mathematical algorithm that renders information unusable. This output known as a cipher text can be unscrambled or decrypted to produce the original input known as the plain-text.

1. encryption(Plain-text) = Cipher-text, 
2. decryption(Cipher-text) = Plain-text

The inner workings and mechanics of these algorithms are public knowledge...  Wait? So if the algorithms are known, can’t anyone decrypt the encrypted information?

Encryption algorithms uses a secret key or 'password' to secure the information. Unless someone has the key, they cannot decrypt the information. There are two types of encryption algorithms which manage keys differently: symmetrical and asymmetrical algorithms.

Symmetric algorithms secure their information during encryption with a key which is also used for the decryption of cipher-texts as described in notation below:

1. encryption(key1, Plain-text) = Cipher-text
2. decryption(key1, Cipher-text) = Plain-text

The problem with symmetrical encryption is that if person A wants to use the encryption algorithm to communicate with person B, they both have to have the secret key to decrypt the encrypted messages. Only once their key has been exchanged, will they be able to communicate in secret. The problem is that this 'key exchange' cannot be done in open public or through compromised communication channels where a eavesdropper might be listening in on. This is known as the key exchange problem.

Public key algorithms or asymmetrical encryption algorithms, solve the problem of sharing sensitive information. With public key cryptography, encryption and decryption functions of the key are separated into two keys as opposed to being a single key with dual functionality.

Since, there are two keys with their respective encryption and decryption capabilities separated, person A can simply share their encryption key or public key to person B over insecure communications without fear of compromising the condfidentiality of the message. Anyone with the public key can encrypt messages but this is relatively useless without the decryption key. Person B receives person A’s public key and now can use that to encrypt his own message to produce a cipher-text. Person B sends back the ciphertext back to person A where Person A then decrypts the ciphertext using their own decryption key or private key. Person A’s private key is at no point at risk of compromise as opposed to the symmetrical key exchange.

Public key encryption is used for sending secure messages over insecure communications. They are also used for digital signatures and is the underlying concept that validates transactions on a public ledger.

### Digital Signatures
// TODO: Write about DSA functions: geenratekeys, sign, verify, explain hexidecimal? + Mention lightl about Pseudonyms & how DSA is to create account addresses

In the real world, we use signatures as an act of deliberation from someone where it is used as a to agree with documents and claim authorship of work. While relatively straightforward, signatures actually have a lot of meta properties tied to them. Signatures are...

- Unforgeable: The signature is unique to the signer and thus is proof of an identity
- Unalterable: The signature cannot be altered or moved to another document
- Nonrepudiable: The signature cannot be revoked afterward 

Signatures in real life can be forged and which is an even bigger problem with digital signatures as files are easily copied and tampered with. How can you achieve a sign of deliberation that satisfies all the requirements of a signature? The answer is in a public key cryptography algorithm called the Digital Signature Algorithm (DSA).

For Person A to sign a document, a hash value is produced from that document using a hash function. Person A uses the encryption key, which is kept hidden, to encrypt the hash value of the document to produce a cipher-text: E(H). For DSA, the encryption key is the private key that is kept a secret and the decryption key is the public key that is published into the open. Person A publishes the document and along with the E(H). Anyone can verify that person A has signed the document by hashing the document and then using Person A’s trusted and published decryption key to decrypt the cipher-text E(H) to produce the same hash of the document. If the document hashes match, then the signature is valid.

The signature it is never exposed but rather the key used for encryption. The uniquely transformed cipher-text is the signature.

## States transitions

// Everything below is me writing, it is fairly raw and might not make sense yet - first write, then edit :)

Previously we mentioned these things known as states state transitions. It is a concept representing how information changes from moment to moment. If you think about it, everything is information and data. If you freeze the time in the world, it would be one state of the world. But as you resume time, the states would change accordingly, for example with atoms if you freeze time you might be able to see the location of the electronics since time is frozen. However, when you resume time, they will be in a different location or 'state'. These state changes are dictated by the laws of physics just like how the state of where you are in your room is dictated by where you decide to move. This is the same with money.

Imagine you have 10 dollars cash in your wallet right now and are standing next to a person call Ralph who has no cash in his wallet.

**State:**

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

One reason why we have wallets in the first place is that we want to store our money in a safe place. Why? Money is a medium of exchange which allows you to buy goods and services. It is scarce! It doesn't grow on trees and no one can counterfeit the money even if they tried. Only the bank has the ability to print more money. You only can receive and send money whereas the bank can mint new money.

Now let's examine the exchange that took place between you and Ralph as shown above. What does it really mean to give someone money?

1. When you have the money, you are able to do anything you want with it. You can send, hold or even throw it away. You can do this because you physically hold it in your wallet.

2. When you don't have money you can't physically use it.

When you give money away you authorize it by handing it to someone else. Your state changes from 1 to 2. And the cash notes is a physical representation of that money but also physical proof that you don't have it anymore or have it. The challenge with digital payment systems is that you either have to trust a central organization to verify these state transitions. And if you don't want to use a central processor, how do you trust digital state changes or transactions? One interesting way to think about cryptocurrencies is that you are able to cryptographically about to prove state transitions. You can prove that you don't have something anymore, emulating the physical proof of ownership that is hard to recreate.

## Digital cash system

The physical representation of cash almost mirrors digital cash systems in many aspects. It works very similarly to real life cash. There are two types of transactions: Mint or Send. Minting is the creation of cash which usually can only be done by the bank but in our case Paypal itself. Send is a transaction that can be done by anyone just like real life cash notes.

The beginning of this payments system, where there no activity has taken place, is called the genesis state or initial state. All ledgers are really just a list of transactions applied to the genesis state. These transactions are usually grouped together in chronological time intervals, called blocks. The most recent states are derived from the state transitions applied by to the genesis state.

In this payment system, instead of physically carrying cash in a wallet, your ownership is listed and mapped to a unique address. You are able to control the state of this unique address if you have the signature of the corresponding address. Instead of physically handing money to someone else, you sign state changes to your own balance with your signature. And if the is enough cash in your balance and your signature matches the balance address, then the state transition is executed.

Similar to cash notes, you cannot send the same cash notes over and over again and to also protect yourself some something similar happening, each state change is submitted with a unique number known as a nonce. A nonce is a number that increments with each state change from your account and gives you relay protection - meaning you can't resubmit the same transaction multiple times and bleed your account dry. In code, a state transition function might look like:

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
