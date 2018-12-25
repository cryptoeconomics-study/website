# Chapter 01: Introduction to Cryptography


![Imgur](https://i.imgur.com/ATlo0Iq.png)

You don’t have to be a hardcore math or cryptography expert. The goal is to get a flavor of what kind of tomfoolery goes in to all this magic! You won’t be able to make these dishes on your own after this chapter but you will gain a high level understanding and a deep appreciation for the mechanics of it. Those who want to dive really deep will be provided with a list of recommended resources at the end of each part. A background in mathematics will be very helpful but not necessary to understanding the following content.

### Topic Jump

* [1 Cryptography 101](#cryptography-101)
* [2 Digital Signatures](#digital-signatures)
* [3 Attacks](#attacks)


In this post, we’re going to go over some foundational concepts in cryptography, get a taste of number theory and group theory by going through how public key cryptography works.

In part 2, we’ll look through a thoroughly commented implementation of digital signatures so those who don’t code can follow along as well. We’ll also examine other common signature types used in cryptocurrencies.

In part 3, we will hammer home the lesson of “don’t roll your own crypto,” by examining some fantastically obscure and potentially devastating real-life cryptography bugs by using the tools we learned in part 1 and 2.

# Cryptography 101

## What is Cryptography?
The word itself is derived from the Greek roots for “hidden” and “writing”. Cryptography is a tool that allows us to achieve a number of information security objectives. There are four main goals of cryptography:

* Integrity: The message I send will arrive at its intended destination intact and unchanged.
* Authenticity: I can ascertain that the sender and the recipient of the message are the correct ones.
* Non-repudiation: An event that has taken place cannot be denied.
Confidentiality: That which is intended to be private will be kept private.

## Public Key Cryptography
Public Key Cryptography is also known as asymmetric key cryptography, due to the use of a pair of keys — one that is private (a secret key, sk) and one that is public (a public key, pk). The public key is generated from the secret key (we will call it secret key because later on, it will be easier to distinctly abbreviate public key as *pk* and secret key as *sk*).

Public key cryptography allows you to encrypt a message using somebody’s public key and broadcast it to the whole world… in a way where it can only be read by the person who has the secret key corresponding to the public key used to encrypt the message.

The inner workings and mechanics of these algorithms are public knowledge... So if the algorithms are known, can’t anyone decrypt the encrypted information?

There are two types of encryption algorithms which manage keys differently: symmetrical and asymmetrical algorithms.

Symmetric algorithms secure their information with a key where is also used for the decryption of cipher-texts as described in notation below:

    encryption(key1, Plain-text) = Cipher-text
    decryption(key1, Cipher-text) = Plain-text

The problem with symmetrical encryption is that if person A wants to use the encryption algorithm to communicate with person B, they both have to have the secret key to decrypt the encrypted messages. Only once their key has been exchanged, will they be able to communicate in secret. The problem is that this 'key exchange' cannot be done using compromised communication channels where a eavesdropper might be listening in on. This is known as the key exchange problem. Symmetrical key systems require the sharing of a sensitive secret.

Public key algorithms or asymmetrical encryption algorithms, solve this problem. With public key cryptography, the encryption and decryption functions of the key are separated into two keys as opposed to being a single key with dual functionality.

Let’s take a look at how this all works, starting with the concept of ‘key exchanges’!

### Diffie-Hellman Key Exchange
In the early 1900s, a man named Arthur Scherbius developed a machine called the Enigma machine. It allowed people to send scrambled messages and soon, the German military was mass producing Enigma machines for secure communications during World War II. The only problem with the Enigma machine was that in order to decipher the encrypted messages, you needed the decryption key, or the secret key… but there was no way to transport this secret key securely. If the secret key was intercepted by malicious adversaries, then Enigma communications were pretty much kaput.

Hope is on the horizon: in come Whitfield Diffie and Martin Hellman, who took Ralph Merkle’s conceptualization of a method to transmit secure information over insecure means. This method, dubbed Diffie-Hellman key exchange, is popularly explained with a color-mixing analogy, as follows. (Skip past these images if you want to get straight in to the ~*MATH*~)

![Color Mixing](https://i.imgur.com/qrVZElx.png "image from https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange")

Alice and Bob want to share a secret with each other so later they can use the same secret to encrypt and decrypt messages with each other. However, they want to transmit this secret securely — so securely that they can do it over a public channel without the secret getting leaked. So, they each choose a secret color.

Together, they agree on a common color that will act as a carrier for their secret colors. They will mix the common color with their secret colors.

![Common Color](https://i.imgur.com/YAfLapF.png)

Combining the colors is key to being able to transport it safely, because separating colors is very difficult and very expensive.

Now, Alice can send Bob her mixed color, and Bob can do the same. It’s ok if other people see these mixed colors. They won’t be able to separate out the secret, even if they know what the common color is.

![Secret Color](https://i.imgur.com/RmO90pA.png)

Next, Alice will combine her secret color with Bob’s mixed color and Bob will combine his secret color with Alice’s mixed color:

![Shared Secret](https://i.imgur.com/QMl6VrZ.png)

The resulting color is a combination of Alice’s secret, Bob’s secret, and the common color. As long Alice doesn’t leak her individual secret and Bob doesn’t leak his either, then they now both share a secret color..

Now they can encrypt and decrypt messages to each other with this shared secret key!

### The Math-y Explanation
No math background required! All you need to know is how multiplication and exponents work.

The starting color should be kept a secret, but it is assumed that it can be leaked. In practice, this “common color” is actually two numbers, *p* and *g* that Alice and Bob agree to beforehand. *p* is used as the modulus, and *g* is the base. (A modulus is a point at which a number wraps around itself. You can think of it like a clock, which is “mod 12”. There are 12 numbers on a clock, but the day has 24 hours, so the 13th hour of the day is 13 mod 12, which is congruent to 1. As such, we often represent the time 13:00 as 1:00). The *p* and *g* that are chosen must satisfy the following conditions:

1) *p* and *g* are coprime, meaning that their greatest common divisor is 1.

2) *g* is a primitive root modulo *p* which means that for every number *a* that is coprime to *p*, there exists an exponent *x* where *g^x* mod *p* is congruent to *a* mod *p* that cycles through periods of arrangements of all the remainders modulo *p*.

The **primitive root modulo n**, along with other number theory concepts you will learn later, are important because grouping numbers together with elegant characterizations allows us to generate concise proofs and calculations. The above characteristics enable us to easily manipulate these numbers into a result that is difficult to reverse engineer, in the same way that the colors in the color mixing example are difficult to separate.

By doing our math over finite algebraic structures we 1) prevent our outputs from blowing up in size, and 2) prevent the length of our outputs from revealing information about the inputs.

We’ll use some very small numbers to demonstrate this math. In practice, these numbers are enormous so that brute forcing the inputs becomes computationally infeasible.

**STEP ONE**

Let’s say Alice and Bob agree to **p = 7** and **g = 3**. (It’s ideal for these values to stay secret but we will show that this works even if a malicious adversary gets ahold of them).

Quick check: do these numbers fulfill our above requirements?

* Coprime? The greatest common divisor of 7 and 3 is 1. Check.
* Primitive root? 3 is a primitive root modulo 7. Check! See:

  * 3⁰ mod 7 ≡ 1 mod 7
  * 3¹ mod 7 ≡ 3 mod 7
  * 3² mod 7 ≡ 2 mod 7
  * 3³ mod 7 ≡ 6 mod 7
  * 3⁴ mod 7 ≡ 4 mod 7
  * 3⁵ mod 7 ≡ 5 mod 7

Awesome.

**STEP TWO**

Alice and Bob each pick a secret value, represented in the above diagram by the secret color and then “mix” this with the common colors (p and g) to generate the public value.

![Step 2 Alice](https://i.imgur.com/jQL9weP.png)

Bob undergoes this same process to generate his public value B from the secret value he selects b = 8:

![Step 2 Bob](https://i.imgur.com/tq5fNHE.png)

**STEP THREE**

Alice and Bob each calculate the shared secret, s, by taking their own secret values and combining it with the public values shared by the other person.

![Imgur](https://i.imgur.com/6g8vLtH.png "Computing the shared secret")

Woah! Both Alice and Bob now have the same shared secret. A spying adversary who has the all of the values **p**, **g**, **A** and **B** would have to brute force guesses of **a** and **b** in order to find the shared secret. When our values are large enough, this brute force guessing becomes computationally infeasible.

#### Why does this work?

Remember our earlier requirements for the characteristics of p and g? Those characteristics allowed us to generate a *multiplicative group*. In formal terms, we would call **g** the *generator* of the *multiplicative group modulo p*, and in the cases that **p** is a prime, we get the cyclic characteristics demonstrated in step one. We call this group multiplicative because the elements of the group are identified through multiplication. This means that two elements of the group combined with the group operation (multiplication in this case) form a third element of the group.

This group of integers also counts as an *abelian group* meaning that the group operation (in this case, multiplication) performed on two elements of the group is agnostic to the ordering of those two elements:

![Abelian](https://i.imgur.com/5Y6fcbw.png)

This is important because Alice and Bob want to achieve the same result, although their order of operations differ — Alice is taking g to the power of a first, whereas Bob takes it to the power of b.

Don’t strain *too* hard to remember this but it will be helpful later in part 3, when we examine some cryptography bugs in cryptocurrencies.

# Digital Signatures

When the cashier at your local convenience store asks you to sign the receipt after swiping your credit card, they are trying to ensure that you are the authentic owner of the credit card, and that you have the rights to spend money from that account. Unfortunately, signatures on paper are very easy to forge, and difficult to verify - so this method is not as secure as one might hope. 

**In the real world, we use signatures as an act of deliberation from someone.** It is used to record contractual agreement and claim authorship of work. While relatively straightforward, the concept of signatures has a lot of meta properties tied to it. 

** What makes a signature a signature?**

- Unforgeable: The signature is unique to the signer and thus is proof of an identity
- Unalterable: The signature cannot be altered or moved to another document
- Nonrepudiable: The signature cannot be revoked afterward

A digital signature on the other hand is an electronic signature that ensures the *authenticity* and the *integrity* of the message. Remember, this means that we want to be sure that the message sender and recipient are correct, and that the message has not been tampered with, respectively. Furthermore, we want the signature to be nonrepudiable - one cannot simply revoke their signature after signing!

For example, you use digital signatures when you download software, access websites, send emails, etc. to make sure the software is from the correct source, you haven't been dns-spoofed, and so on.

However, just as real life signatures can be easily forged, so can digital files be easily tampered with... so how do we sign things digitally while preserving all the characteristics that make a signature a signature?

In order to understand this, let’s first go over a few important concepts in cryptography that we will be using ton examine signatures: **functions, inversions and hashes**. 

A **function** is a rule set that maps elements from one set of elements to another. A function that is easy to invert is a function that can be reversed with very little computation.

Get ready for some math.

Let’s examine function f(a) = 2a which maps elements of set A to set B, denoted f: A —> B where the elements of set A are denoted {a1, a2, … an} and the elements of set B are denoted (b1, b2, …, bn}

Element b = f(a) = 2a, so if A = {1, 2, 3, 4, …, n} then what would set B look like? That’s right: B = {2, 4, 6, 8, …2n}.

Fantastic! Very simple. Unfortunately the function f(a) is also very easy to invert. If we can easily unravel the function then it ain’t really cryptography, is it? 

Functions that are *easy to compute* but *difficult to invert* are called **one way functions**. A subset of one way functions are **trapdoor functions** - the only difference being that trapdoor functions can be inverted as long as you have some special secret k. RSA (Rivest–Shamir–Adleman) is a famous early trapdoor function that you’ve may have heard of!

A **hash** is a function that maps an input of arbitrary size to a fixed size output. Cryptographic hashes are frequently used in digital signatures (we call ‘em hash based signature schemes) in making commitments and in referencing other pieces of data in a more efficient way. 

Let’s look at a very very simple hash function that basically just takes the first three characters of any input. We’ll call it FIRST3:

| Input x                                 | Output H(x) |
|-----------------------------------------|-------------|
| 2o9843ncnr923847ntcf94ujrpc3un4rpcq84un | 2o9         |
| dA84uvsoj                               | dA8         |
| WowieZowieWowieZowie                    | Wow         |
| jjjjjjjjjj                              | jjj         |
| WowWowMeowMeow                          | Wow         |

The output is also called the “message digest”, or “digest” of the input. An input to a hash function always returns the same output. In the above table, `WowieZowieWowieZowie` will always return `Wow`. 

Seems simple enough - but can you think of a reason why we can’t use FIRST3 for hash based signatures? 

| Input x              | Output H(x) |
|----------------------|-------------|
| WowieZowieWowieZowie | Wow         |
| WowWowMeowMeow       | Wow         |

Here’s one. It’s important to draw a distinction between a hash and a cryptographic hash. Here, we see that `WowieZowieWowieZowie` and `WowWowMeowMeow` both hash to the same output, even though they are totally different inputs! This means we have found a **hash collision**, which is totally unacceptable. In fact, it is quite easy to find collisions with FIRST3, since the set of possible outputs is very small, and there are infinite possibilities for inputs. 

Well, this is actually true for all hash functions. Since the output is fixed size, the set of possible outputs is finite, whereas the set of possible inputs is infinite (i.e. if you are putting an infinite number of marbles into a finite number of cups, eventually a cup will contain more than one marble… but the hope is that there are soooo many cups that it would be unlikely to find two marbles in one cup in the lifespan of the human race). The idea for a cryptographic hash function like SHA256 is that although it is not impossible to find a collision, it is computationally infeasible because there is no method to find a collision that is faster than simply brute forcing inputs: They are mathematically unlikely but can they be reproduced with certain hash functions such as the cryptographically defunct SHA-1 and MD5 functions.

If you are interested in the security of hash functions, here is a video: [Security of SHA-256 hashfunctions](https://www.youtube.com/watch?v=S9JGmA5_unY)

Bitcoin uses the SHA-256 Hash function and Ethereum uses the Keccak hash function, which is a a derivation of the SHA256 hash function. Here is an example of a hash input and a typical output. [You can play with the SHA-256 hash function yourself here.](http://passwordsgenerator.net/sha256-hash-generator/)

`SHA 256(Hello world) = 64EC88CA00B268E5BA1A35678A1B5316D212F4F366B2477232534A8AECA37F3C`

So, now we know.

In order for a hash to be a ✨cryptographic hash✨, it must be:

* Collision resistant: Given two inputs a and b, it is computationally expensive to find H(a) = H(b)
* Preimage resistant: Given only the output of H(a), it is computationally infeasible to find a. Brute forcing (guessing every possible input) should be the only way to find it, which is expensive
* Second-preimage resistant: Given a, one cannot find b such that H(a) = H(b).

Fun fact, you can also use hashes as commitments. A writer who wants to copyright their manuscript on a certain date can publish a hash of their manuscript to the blockchain, where it gets timestamped. Should there be any dispute over the manuscript in the future, it would be very easy to verify whether the manuscript was hashed and signed on a certain day. It is also important to note that simply changing one letter in the manuscript, or even one bit in the input, should change a large portion of the bits in the output. Hash functions are mainly used for securing the integrity of information and thus also can act as unique identifiers. Since hash functions are deterministic, they are able to prove that certain pieces of information have not been tampered with. If information is tampered with, it will produce a different hash to the original version.

Fantastic. Now we’re kind of ready to look at how cryptographic signatures work:

## Lamport Signatures

For Person A to sign a document, a hash value is produced from that document using a hash function. Person A uses the encryption key, which is kept hidden, to encrypt the hash value of the document to produce a cipher-text: E(H). For Digital Signing Algorithms (DSA), the encryption key is the private key that is kept a secret and the decryption key is the public key that is published into the open. Person A publishes the document and along with the E(H). Anyone can verify that person A has signed the document by hashing the document and then using Person A’s trusted and published decryption key to decrypt the cipher-text E(H) to produce the same hash of the document. If the document hashes match, then the signature is valid.

You can think of the decryption of the right hash as the signature itself. The successful decryption is proof it is never exposed but rather the key used for encryption. The uniquely transformed cipher-text is proof of signature.

Let’s look at a naive implementation of Lamport signatures and then some optimizations that can be made!

First, users must generate a key pair. The key pair generation uses randomness to create a secret key and a public key. The secret key should never be revealed to anybody - but the public key can be your public facing identity. The secret key is kind of like your DNA, and your public key is kind of like your fingerprint. Don’t go spitting everywhere, you know? 

With Lamport signatures, we generate two lists each with 256 random elements, each element 256 bits in length. 

```
# Generate two lists each with 256 elements, each element 256 bits in length
# Return two lists of secret keys
def gen_secretKey():
    sk0 = []
    sk1 = []
    for i in range(256): sk0.append(hex(secrets.randbits(256)))
    for i in range(256): sk1.append(hex(secrets.randbits(256)))
    return sk0, sk1
```

In order to generate the public keys, we take our secret keys and hash each one and append it in to a new list for public keys only. For 
Lamport signatures, any one way function, like SHA256, will do. 

```
# Generate a public key by hashing the secret keys
# Return two hashed arrays that constitute pubkey pairs
def gen_publicKey(secretKey):
    sk0, sk1 = secretKey
    pk0 = list(map(lambda i: hash(i), sk0))
    pk1 = list(map(lambda i: hash(i), sk1))
    return pk0, pk1
```

Now, we can publish our public keys so that the message recipient can validate the integrity and authenticity of our message later on.


But first let’s create and sign a message! 

In order to sign the message properly, the message must be formatted correctly as a list of 256 bits. In this implementation, I’ve turned the message into a string so that it’s easier to access the bit at each position. 

```
# Format a message correctly by turning it into 256 bits
def messageBits(rawMessage):
    return str(bitstring.BitArray(hash(rawMessage)).bin)
```

We look at the bit in each position of the message. If it’s a 0, then we sign it with a key from sk0, and if it’s a 1 then we sign it with a key from the other list of secrets, sk1.

```
# Return a list of half of the secret keys based on the
# value at each index of the message
def signMessage(secretKey, message):
    # pull the two lists of secret keys out so we can 
    # iterate through them more easily
    sk0, sk1 = secretKey
    # create an empty list to store our signatures
    sigList = []
    # run through each digit of the message
    for i in range(256):
        if message[i] == '0':
            # if it's a 0 bit, use a secret key from sk0
            sigList.append(sk0[i])
        elif message[i]== '1':
            # if it's a 1 bit, use a secret key from sk1
            sigList.append(sk1[i])
    return sigList
```

In order to validate the sigList (list of signatures corresponding to the bits in the message), the recipient of the signed message can simply hash the signature at each position of the message and check it against the list of published public keys. If the message bit is 0, then the hash of the signature at that position should correspond to the public key at the same index in list pk0!  

```
# Validate the authenticity of the signatures
def validate(publicKey, signatures, message):
    # Pull two separate lists out of the publicKey parameter
    pk0, pk1 = publicKey
    # Iterate through each signature in the list of signatures
    for i, sig in enumerate(signatures):
        # If the bit at that index of the message is 0
        if message[i] == '0':
            # Check if the signature matches the public key
            # at that index from the list pk0
            if pk0[i] != hash(sig):
                return "This is invalid"
        # If the bit at that index of the message is 1
        elif message[i] == '1':
            # Check if the signature matche the public key
            # at that index from the list pk1
            if pk1[i] != hash(sig):
                return "This is invalid"
    return "This is valid"
```

#### Problems with Lamport Signatures

Although it’s quite easy to generate and verify Lamport signatures, they’re very large and can only be used one time. As shown above, a 256 bit message requires 256 hashes of 256 bit numbers! Additionally, when we sign a message, we use either a secret key from sk0 or sk1 at each index of the message. This way, we only reveal half of each secret key at each index. If we were to sign a second message, and that second message contained a different bit at any index, then we would be revealing both halves of the secret key at that index. 

In order to be able to reuse the signatures, a cryptographer named Ralph Merkle decided to use a Merkle tree! A Merkle tree is also known as a hash tree. Hash trees allow for more efficient storage and verification of the contents within a larger data structure, like the key lists we used above for Lamport signatures. They look like this: 

![Imgur](https://i.imgur.com/IOjkIVu.png "cryptoeconomics.study")

The node contains a hash of both its child leaves concatenated, and the root contains a hash of both its child nodes concatenated.

In our Lamport signature scheme, we can put each public key in a leaf node and compute the value of the root node from the leaves. 
 
Now, all of our public keys have been consolidated into one root hash. From now on, whenever we sign a message, we must not only include the public key corresponding to our signature, but also the root hash, and a Merkle proof that the public key is a member of the Merkle tree from which the root hash was computed. 

The Merkle proof is essentially proof of a path from the leaf node that our one-time public key lives in, up to the root node. If we used pk1, then the Merkle proof provided would include pk2, and h(pk3+pk4) so that the validator can compute the root hash on their own. 

In this scheme, you can take many one-time signatures, and compress the public key into one root. In general, hash based signatures are very inefficient with usage of space. Many cryptocurrencies use abelian group schemes (eg. elliptic curves), which are more efficient. Because abelian groups support complete group operations, keys can be reused as long as the discrete log problem is hard on that group.

TODO

what is the discrete log problem

.. Should I talk about Winternitz?

Say something about how great cryptoeconomics is here.
 

Schnorr Signatures
Blah blah blah!

# Attacks
### Just for fun: The Edwards Curve and the Co-Factor Problem

The Edwards Curve, also know as ed25519 or EdDSA (Edwards curve Digital Signature Algorithm) is a signature scheme used in CryptoNote based currencies. CryptoNote uses ring signatures to anonymize transactions and is consequently the foundation for several anonymity-focused cryptocurrencies. Monero is the most popular of the CryptoNote currencies.

At a high level, CryptoNote obfuscates the value of the funds being transferred from a sender to a recipient by grouping multiple senders together. The inputs and outputs of the group are indecipherable - all that is known to an outside party is that all the funds that entered the ring left the ring and reached their intended destinations, and no new coins were created or destroyed in the process. 

More concretely, if Alice wants to send Bob some Monero, she sends it to a stealth address, also known as a one-time public destination key. Let’s call this one-time destination public key P. This P is combined with many other decoy P’s. In order to spend the P you must sign with your secret key x. 

We will go over the concept of double spending later in this book, but in Bitcoin, we can make sure that the same coins have not been spent twice by ascertaining that all inputs to a new transaction are unspent outputs from a previous transaction. Since we can’t view any of that information for Monero, how would we prevent double spending?

A mechanism called a key image is used to prove that you are not double-spending without revealing who you are. The key image, I, is generated with x, P, and a hash function H.

I = x*H(P)

Earlier, we mentioned abelian groups which are commutative groups. The fundamentals of group theory are also out of scope for this chapter, but we should know the following:

* A group is commutative if g*h = h*g for all g and h that are elements of the group.
* The order of the group is the number of elements in the group. Let’s call it n
* An identity element is an element in a set that does not change other elements when combined with them in binary operations. We can call it e. For example, under additive operations, the identity element is equivalent to zero because g + e is fundamentally equivalent to g + 0.
* The order of a point is the lowest number n where gnreturns the identity element. 
* In a finite group, any element of the group g taken to the order of the group will equal the identity element.
* A cofactor is the quotient of the total group order divided by the order of the subgroup generated by a basepoint.

![Uh oh](https://i.imgur.com/TG5F5JH.png)

Side note: remember how we talked about hash commitments earlier in the chapter? This is unrelated to the mechanics of the attack itself, but Monero team included a hash of the vulnerability description in a Monero transaction in order to timestamp the contents of the message! Here’s part of the contents of that hashed message, released later:

![Dirty Details](https://i.imgur.com/fjdjoS5.png)

Woah that’s a lot! Let’s break it down, shall we?

Private keys in ed25519 are multiples of the cofactor 8. This means that adding a point L of low order (order 2, 4,or 8), also called a torsion point, returns the identity element. It’s important to remember that we are working in modulo groups (a modulus is a point where numbers will ‘wrap around’ themselves - 8 mod 3 is 5, 100 mod 3 is 1, etc). So as long as you know one of the factors to a point, in a subgroup of low order you can make multiple key images from the same purported point.

If you imagine a clock, just remember that 10*2 == 20 % 12 = 8 is the same as 64*2 == 128 % 12 == 8, and if you make a loose analogy, the 10 and 64 are two "key images" for the "key" 8

it's a very loose analogy but ed25519 has subgroups that allows you to just add (64+576)*2 == 640 % 12 == 8 where (64+576) *looks* like a different point/key, until you realize it's a multiple of 8 anyway so that it's the same "point" on the modulo group

x*L = 0

I’m an attacker and I want to double/ triple/… septuple spend the funds from my legitimate ed25519 point. In order to find my fraudulent key, I want to find another point that differs by a torsion point, because torsion points can be “zeroed out” so to speak. 

In other words:

x (P + L) = x*P + x*L = x*P + 0.

Here is the [relevant part of the patch](https://github.com/monero-project/monero/pull/1744/files#diff-d65754889afbda19c7e62e5f3212bd5cR715) that Monero deployed to fix this bug!

![Imgur](https://i.imgur.com/jCbdAvX.png)

It checks whether the key_image * curveOrder equals the identity element, or "0” and fail if it is because that means it's a "manipulated point", or one that has been multiplied by a cofactor. 

TO DO: INSERT GRAND CONCLUSION

Here's the full Monero writeup: https://getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html


------
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
