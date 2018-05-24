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

### Public Key Encryption

Public key cryptography is a field of cryptography which that solves the key distribution problem involved with the symmetrical encryption of information. Okay, let's talk about what that exactly means… 

Encryption is essentially a mathematical algorithm that renders information unusable, producing. The input is known as a plain text and the produced unusable information is called a ciphertext. Below is notation describing a plain text being encrypted then decrypted.

encryption(Plain-text) = Cipher-text, 
decryption(Cipher-text) = Plain-text

A ciphertext can be unscrambled by decrypting it back to the plain text. The inner workings and mechanics of these algorithms are public knowledge...  Wait? So if the algorithms are known, can’t anyone decrypt the encrypted information?

Encryption of algorithms involves a secret key that is used to secure the information. Unless anyone else has the key, they cannot decrypt the information. There are two types of encryption algorithms which manage and share encryption and decryption keys differently and they are known as symmetrical and asymmetrical algorithms.

Symmetric algorithms secure their information during encryption using a key and also use the same key for the decryption of that information as described in notation below:
encryption(key1, Plain-text) = Cipher-text
decryption(key1, Cipher-text) = Plain-text

The problem with encryption is that if person A wants to use the encryption algorithm to communicate with person B, person A has to somehow safely exchange the cipher key to person B. Once their shared security key has been exchanged, then they will be able to communicate freely. This however key exchange cannot be made in compromised communication channels or open communicates where a potential eavesdropper might be listening to. This is known as the key exchange problem.

Public key algorithms or asymmetrical encryption algorithms solve the problem of sharing sensitive information. Instead with asymmetrical algorithms or public key cryptography, encryption and decryption keys are two separate items instead of being one single key.

Since, there are now two keys with their respective encryption and decryption capabilities separated, person A can simply share their encryption key or public key to person B over insecure communications. There is no fear over the compromise of the key as it can only be used to encrypt information, not decrypt. Person B receives person A’s public key and can use that to encrypt his own message to produce a ciphertext. Person B sends back the ciphertext back to person A where then Person A decrypts the ciphertext using their own decryption key or private key. Person A’s private key or decryption key is at no time at risk of compromise, unlike the symmetrical key that needs to be first exchanged. 




