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

What is a cryptographic hash?
- data (preimage) => hash function => unique output (hash)

Preimage Resistance:
- Given the output of a hash function (hash) you cannot determine the input data to that hash function (preimage)

2nd Preimage Resistance (aka Collision Resistance):
- A hash cannot have more than 1 preimage - each piece of data produces a unique hash

Random Oracle:
- A hash has no statistical correlation to the input data that created it (aka it looks like random data)


## Cryptographic Signatures

What is a cryptographic signature?
- A mathematical way to prove that a signer signed something

Public/Private Keys:
- Public key is like an address/username
- Private key is like a password/signature

Signature Functions:
- Allows you to sign stuff with your keys
- This also allows other people to verify that you did or did not sign something

Verification Functions:
- If you have a hash you can check that against a message (data), message signature, and public key of the signer to determine if that key signed that message. This is used to prove that X person signed Y document. If someone tries to change the document or the signature, the hash will be completely different.

<br />

# Recommended Resources

Crptographic Hash Functions
- [SHA256 Hash App](https://anders.com/blockchain/hash.html) - Whatever you type into the box is instantly hashed via the SHA256 algorithm.
- [Wikipedia](https://en.wikipedia.org/wiki/Cryptographic_hash_function) - Everything you could ever want to know about hash functions.

Cryptographic Signatures
- [Anders Brownworth's blockchain demos](https://anders.com/blockchain/) - Videos explaining (and showing) hash functions and signatures in more detail.
- [Wikipedia](https://en.wikipedia.org/wiki/Digital_signature) - Everything you could ever want to know about digital (and cryptographic) signatures.

<br />

