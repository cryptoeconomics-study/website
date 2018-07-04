# Chapter 6: Analyzing Proof of Stake

In the previous chapter we took a look at what proof of stake means. In this chapter we will dive deeper and look into several attacks on proof of stake. PoS has several attacks unique to it that come with designing a system that relies on economic incentives. 

The first part about analysing any PoS system is to understand how robust the system is against attacks. To be robust against attacks, a system should fundamentally be able to prevent, detect and finally punish dishonest activity. 

In the previous chapter we talked about how PoS systems are designed in order to prevent someone from acting maliciously. In this chapter we will focus on the detection and punishment aspect of the security of PoS systems. 

In order to punish malicious behavior, it is important to first be able to detect and attribute the fault to a certain malicious node. Fault attribution is broadly classified into 2 categories: 

- Uniquely attributable faults
	- There exists proof of who committed some fault and so we can attribute it to a unique actor.
	- Egs. Double Spending attacks
- Non-uniquely attributable faults
	- When faults occur and we cannot identify a single perpetrator.
	- Egs. Offline nodes vs DoSing of a Node


Uniquely attributable faults enables the system to punish the malicious actor. Penalties for non-uniquely attributable faults must often be dispersed amongst all possible offenders. This means that people who did nothing wrong can receive penalties! 

Griefing analysis
An attacker may intentionally causes non-uniquely attributable faults in order to reduce someone else’s payoff. This is called griefing.
We can analyze these griefing attacks with the reduction in attacker’s payoff vs reduction in victim payoffs. This ratio is called the griefing factor.
A griefing factor of 1:1 means that for every unit of value the attacker loses in penalties, the victim node loses an equal amount.
A griefing factor of 1:2 means for every unit of value the attacker loses, the victim loses twice that… and so on.
Discouragement attacks
A particular attack can be built out of griefing which is worth noting, this is the discouragement attack.
In a discouragement attack, the attacker reduces the expected payoff for honest nodes. This can result in fewer honest nodes participating in the protocol.
This attack can be coupled with subsequent attacks which take advantage of the honest node discouragement.
In Casper FFG, a discouragement attack can look like the following:
1) Discourage -- reduce the expected payoff for honest nodes by going offline to make honest nodes appear to be censoring.
2) Wait -- Rational nodes will realize that their expected payoff has gone down, and so will withdraw their deposits and no longer participate in consensus.
2) Attack -- Cause a safety failure. This will be significantly cheaper as many of the deposits will have been withdrawn.
For a more thorough analysis framework of PoS you can see this chart

Attacks and Defenses using primitives:

**Cryptographic attacks:**
- Timing Attacks
- Grinding
-  On Anti-Pre-Revelation Games
- Nothing at Stake

**Game Theory attacks**

- Selfish mining
- Bribing attacks
- Long Range
-  The P + epsilon Attack
- Censorship
-  The Problem of Censorship
- Pooling and related attacks

**Network attacks**

- Eclipse Attacks
- Timejacking
- Spam attacks

**Distributed Systems perspective:**
-  On Settlement Finality
