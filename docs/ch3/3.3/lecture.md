---
title: "Lecture"
---

Merkle Trees
- A powerful data structure to improve our protocol's scalability

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://youtu.be/n7DrsWDkKP4"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1KxqlX9_IvCfnbqGU1q5nIiaj4FXV7mFoUJwHRovIUG8/edit)

<br />

# Ch3.3 Overview

Merkle Trees
- A hash of a hash of a hash of a hash... of all the data until there's just 1 hash - the "root" of the tree. A guy named Ralph Merkle invented this as a data structure.

Merkle Proof / Branch
- The set of hashes in a merkle tree necessary to verify that a piece of data is within the merkle tree. This allows you to verify the integrity of a piece of data within a data set by checking much less than the full set of data. This is what light clients on Ethereum or Bitcoin do.

<br />

# Recommended Resources

[Wikipedia: Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree) - Wikipedia page on Merkle trees.

[Brilliant: Merkle Tree](https://brilliant.org/wiki/merkle-tree/) - Free page explaining merkle trees.

[Pegasys: Ethereum Explained](https://pegasys.tech/ethereum-explained-merkle-trees-world-state-transactions-and-more/) - Explains Merkle trees in the context of Ethereum.

<br />

