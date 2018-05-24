# Chapter 1: Centralized Payment Processor

In chapter 0 we introduced you to the concept of cryptoeconomics, outlined the tools for designing cryptoeconomics systems and also studied the bitcoin mechanism at a high level. In this next chapter, we will dive deeper into cryptoeconomic tools we mentioned before (Hashes, public key cryptography, digital signatures) and also start looking at the design of decentralized computing systems.

## Cryptographic tools

Cryptoeconomic design is the use of cryptography and economics to generate a desired end goal through mathematical guarantees and economic incentive. These end outcomes are engineered through a set of mechanisms that align individual participants of cryptoeconomic systems with desired individual behavior. 

Cryptography is the practice of secret and secure communication. Existing for thousands of years, it is an ultimately about using mathematics and probability to secure information. Cryptography is used to secure... 
- Confidentiality (keeping information a secret to eavesdroppers)
- Authentication (verifying the correct origin of information)
- Integrity (proving that information has not been tampered with)
- Nonrepudiation (proving the author of signed information)

### One way hash functions

Hashes are one-way mathematical functions that take a variable length input of any size and produces a unique fixed length output called a hash value. This function is one way as it is very difficult to find the original input unless you try to brute force guess all existing inputs to find a matching hash value. (If you are interested in the security of the hash function, check out this video: Security of SHA-256)

The hash function that Ethereum uses follows the design of SHA3 hash function. 
SHA-3 256 (Hello world) -> Fixed length output B
Eg. 64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C

You can try this for yourself and play with the SHA-256 hash function here:
http://passwordsgenerator.net/sha256-hash-generator/

The magic of hash functions is that they are deterministic. This means that if you change the input in any shape or way, the output will also change. The same message will ALWAYS result in the same hash value. It is difficult to generate the same hash value with two different inputs however it is possible ~ this is called a collision. They are mathematically unlikely but can they be reproduced with certain hash functions such as the cryptographically defunct SHA-1 and MD5 functions. 

Hash functions are mainly used for securing the integrity of information and also as unique identifiers. Since hash functions are deterministic, they are able to ensure and prove that certain pieces of information have not been tampered with. This is a core underlying concept that secures blockchains. In essence, blockchains are linearly chained ‘blocks’ of data. These blocks are known as Merkle trees, a hash function made up of many other hash values called Merkle trees. These blocks are all chained together where one block of data is computed with the hash of the previous hash of the block that was produced before. 

To change the past data, all the hashes previously produced after that date in time will all deterministically change as well. And unless it is accepted by the majority of the blockchain network, it will be rejected as invalid.  To overcome all of this, this you would not only have to recompute all the hashed blocks to form the new chain but also have enough computing power to gain acceptance as the longest chain (hence the name, proof of work as hashing takes a lot of computational power/energy).




