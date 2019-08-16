---
title: "Lecture"
---

<br />

# Hashing and Signatures
- A practical guide to two of the most important cryptographic primatives!

<br />
<br />
<iframe 
	width="560" 
	height="315" 
	src="https://www.youtube-nocookie.com/embed/FLIo_ZjV--U" 
	frameborder="0" 
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/17J2qRYzx27x30UEoXa2cOHOl2MdKQujocQNJpbp7NHE/edit)

<br />

# Ch1.1 Overview 

## Cryptographic Hashes

Properties of Cryptographic Hash Functions:

1. Can take any size input data
2. Fixed size output (often 256 bits)
	- E.g. could hash an entire 2GB movie file and you would still only get a 256 bit output
3. Deterministic 
	- The same input passed into a cryptographic hash function will always have the same output
4. Relatively easy to calculate
5. Appear random 
	- E.g. hash("abcdef") will have a completely different output than hash("abcdeg")
	- The hash looks like random data
6. One-way 
	- Can't compute the input data from the hash
7. 2nd Preimage Resistance (aka Weak Collision Resistance):
	- Cannot find any second input which has the same output as that of a specified input
	- e.g. Given an input X, can't find a Y such that hash(X) = hash(Y)
8. Collision Resistance
	- Cannot find ANY two inputs that have the same hash
	- Note that if the hash function satisfies this property of Collision Resistance, it must also have the property of Weak Collision Resistance


## Digital Signatures

Public/Private Keys:

- Public key is like an username or bank account number
	- A public key is derived from a private key
- Private key is like your password or PIN number
	- A private key is just a randomly generated number
	- Just like if someone figures out your password, if someone finds your private key, they can use it to sign messages

Signature Functions:

- Must use your private key to sign some data
- Cannot forge someone's digital signature unless you have their private key

Verification Functions:

- Given a message, a signed message, and the signer's public key, you can determine if the signature is valid. 
- If a signature is valid, you know that the signer used their private key to sign the message

<br />

# Recommended Resources

Crptographic Hash Functions
- [SHA256 Hash App](https://anders.com/blockchain/hash.html) - Whatever you type into the box is instantly hashed via the SHA256 algorithm.
- [Wikipedia](https://en.wikipedia.org/wiki/Cryptographic_hash_function) - Everything you could ever want to know about hash functions.

Digital Signatures

- [Anders Brownworth's blockchain demos](https://anders.com/blockchain/) - Videos explaining (and showing) hash functions and signatures in more detail.

- [Wikipedia](https://en.wikipedia.org/wiki/Digital_signature) - Everything you could ever want to know about digital (and cryptographic) signatures.

-  The digital signature algorithm used by both Ethereum and Bitcoin is ECDSA, the Elliptical Curve Digital Signature Algorithm. If you'd like to learn the underlying math behind how this algorithm works *(not for the light of heart)*, we'd suggest this [tutorial by Jimmy Song](https://www.youtube.com/watch?v=e6voIwB-An4) (est. completion time **3-4 hours**).

<br />

