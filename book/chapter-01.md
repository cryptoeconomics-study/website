# Chapter 1: Centralized Payment Processor

In chapter 0 we introduced you to the concept of cryptoeconomics, outlined the tools for designing cryptoeconomics systems and also studied the bitcoin mechanism at a high level. In this chapter, we will dive deeper into the cryptoeconomic tools we mentioned before (Hashes, public key cryptography, digital signatures) and also start looking at the design of decentralized computing systems.

## Cryptographic tools

Cryptoeconomic design is the use of cryptography and economics to generate a desired end goal for distributed systems. Using mathematical guarantees and economic incentives, these end outcomes are engineered through a set of mechanisms that align individual participants of cryptoeconomic systems with desired participating behavior. 

Cryptography is the practice of secret and secure communication. Existing for thousands of years, it is an ultimately about using mathematics and probability to secure information. Cryptography is used to secure... 
- Confidentiality (keeping information a secret to eavesdroppers)
- Authentication (verifying the correct origin of information)
- Integrity (proving that information has not been tampered with)
- Nonrepudiation (proving the author of signed information)

### One way hash functions

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

The problem with symmetrical encryption is that if person A wants to use the encryption algorithm to communicate with person B, they both have to have the secret key to decrypt the encrypted messages. Only once their key has been exchange will they be able to communicate in secret. The problem is that this 'key exchange' cannot be done in open public or through compromised communication channels where a eavesdropper might be listening in on. This is known as the key exchange problem.

Public key algorithms or asymmetrical encryption algorithms, solve the problem of sharing sensitive information. With public key cryptography, encryption and decryption functions of the key are separateed into two keys as opposed to being a single key with dual functionality.

Since, there are two keys with their respective encryption and decryption capabilities separated, person A can simply share their encryption key or public key to person B over insecure communications without fear of compromising the condfidentiality of the message. Anyone with the public key can encrypt messages but this is relatively useless without the decryption key. Person B receives person A’s public key and now can use that to encrypt his own message to produce a cipher-text. Person B sends back the ciphertext back to person A where Person A then decrypts the ciphertext using their own decryption key or private key. Person A’s private key is at no point at risk of compromise as opposed to the symmetrical key exchange.

Public key encryption is used for sending secure messages over insecure communications. They are also used for digital signatures and is the underlying concept that validates transactions on a public ledger.
