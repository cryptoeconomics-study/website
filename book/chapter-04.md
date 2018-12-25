# Chapter 4: Attacks on Proof of Work

Proof of work is designed to be censorship and reversion resistant, but these properties are conditional on honesty assumptions:

1) We must assume that more than 51% of all “miners” will not censor or revert the chain. If this does not hold, we lose the properties we strive for.

2) We can define an “attacker” as a participant in the consensus protocol which does not respect our properties of censorship & reversion resistance.

Scenarios in which these assumptions could break [51% attacks]:

* Attacker buys enough mining equipment to control a majority of the hashrate. They can now censor transactions, or even cause reversions.

* Attacker develops mining technology which honest miners do not have access to (ASIC hardware)--allowing attacker to mine much more efficiently and thereby controls majority of the hashrate.
Attacker bribes miners to censor or revert blocks.

In each one of these scenarios we can analyze the cost of attack.

**Game theory introduction**

* Prisoner's dilemma, hawk dove, etc  https://dapp-studies.gitbooks.io/game-theory-study-group/content/notes/acigt-notes/acigt-2.1-2.3.html

* Nash equilibrium meaning that no agents have an incentive to diverge.

* Cooperative game theory allows players to coordinate and choose strategies together providing all participants in the coalition a higher payoff.

* A “fair” allocation of payoffs within the coalition can be determined in different ways.

* A process of bargaining can occur during coalition formation.

**Game theoretic analysis of PoW**

Brief analysis of well-known games, including discussing how bribing could fit in:

* Availability propagation

* Miners have an incentive to make their blocks available in order for other miners to build on top of their chain.

Selfish mining

* Miners have an incentive to (at least for a short time) not make their blocks available if they control enough of the hashrate (¼ in https://www.cs.cornell.edu/~ie53/publications/btcProcFC.pdf ) 0.2321 in “Optimal Selfish Mining Strategies” by Zohar et al

Fee stealing

* Miners have an incentive to orphan competing miner’s blocks which pay high transaction fees, and then mine new blocks themselves which give them the fees.

Verifier’s dilemma

* If verifying the validity of a block is too costly, miners will opt to mine on top of blocks without validating them.
