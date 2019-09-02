---
title: "Coding Challenge"
---

Welcome to the first coding challenge!

Here we'll explore the concepts covered in the lecuture and see how Ethereum developers actually impliment them in practice. As always, make sure you've already gone through the [dev env setup]() page so that you have everything working. With that in mind, open up 1.1-Hashes_and_Signatures and let's get started :)

For reference, here's the code we'll be using for this chapter:
```javascript
const EthCrypto = require('eth-crypto')

class Client {
    constructor() {
      //TODO
    }

    toHash(data) {
      //TODO
    }

    sign(message) {
      // TODO
    }

    verify(signature, messageHash, address) {
      //TODO
    }
}

module.exports = Client;
```

<br />

# Cryptographic Hashes

As Karl mentioned in the lecture, Ethereum uses the Keccak-256 (aka SHA3) hash function. To learn more about what that hash function is, why it was chosen, and how it works in Ethereum please take a few min to look over the following resources:
- wiki
- docs
- etc...

### Using Keccak-256

Now that you're familiar with the hash function used by Ethereum, let's try it out! We're going to start by completing the `toHash` function in the coding challenge. The purpose of the function is to allow you to pass in some data and return the `keccak256` hash of that data. Use `EthCrypto.hash.keccak256` ([Documentation](https://github.com/pubkey/eth-crypto#sign)) to make that happen. 

<br />

# Digital Signatures

### Creating Keys

Now, let's see digital signatures in action! In order to sign messages, you’ll first need a public and private key. Let's see how to do that using the [EthCrypto](https://github.com/pubkey/eth-crypto) library. 

Inside of the `constructor`, use `this.wallet` and [`EthCrypto.createIdentity()`](https://github.com/pubkey/eth-crypto#createidentity) to create a public key, private key, and Ethereum address. You can check that it's working by... [TBD].

### Signing Things

The whole point of habing public/private keys is to sign messages. With that in mind, let's use our private key to sign some stuff!. Complete the sign() function so that it can use the keys we just created to sign an input message. This function should take in `data`, use `this.toHash` calculate the `hash` of that `data`, and then use [`EthCrypto.sign`](https://github.com/pubkey/eth-crypto#sign) and your wallet's private key to sign that hash. The function should return the resulting signature.

You can check your function is working by... [TBD].

> *Hint*: `console.log(this.wallet)` to figure out how to access your private key. 

### Verifying Signatures

The best part about digital signatures is that we can verify that signatures are autentic. Public/private key encryption allows anyone to use someone's address to verify that the private key for that address signed a particular message. If someone sends us a signed message, we'd like to be able to verify that their signature is valid so let's make a function that does that.

Write a `verify` function that takes in 3 parameters (in this order):

1. `signature` - Sender's signature
2. `message` - Hash of the sender's message
3. `sender` - Sender's Ethereum address 

and then returns true or false depending on if the signature is valid or not. You can check that your function is working by... [TBD]

> *Hint*: You can use [`EthCrypto.recover`](https://github.com/pubkey/eth-crypto#recover) to recover an Ethereum address from a `signature` and `messageHash`. See "Details" to learn how this function works.

<br />


