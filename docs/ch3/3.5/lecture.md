---
title: "Lecture"
---

Selfish Mining
- An attack where dishonest miners can obtain revenue larger than their fair share

<br />
<br />
<iframe
	width="560"
	height="315"
	src="https://youtu.be/ulb9XVs-7Pk"
	frameborder="0"
	allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen>
</iframe>
<br />
<br />

# Slides

[Google Sheets Link](https://docs.google.com/presentation/d/1l4eTY0qzsjlOQDHOw0djm9WfSeoCUnpCcjneTjOKOEo/edit#slide=id.g5a6da1651d_1_1477)

<br />

# Ch3.5 Overview

Selfish mining is a strategy to try to decrease the economic rewards of other miners on the network while increasing your own rewards. This is done by mining a valid block, then withholding it and trying to mine another block on top. If you see that someone else mined a valid block release your valid block to potentially invalidate their block and decrease their rewards. If you don't see another valid block keep mining on yours until you get another block. Then once someone releases a block you release both of yours, and since you have the longest chain yours is the valid fork. This makes other miners spend time and energy computing blocks without gaining any rewards. If you recycle your rewards into more mining power, eventually, theoretically, you will eventually have all the hash power on the network.

As far as we know, this has not happened yet. The main reason is that it is very expensive. Bitcoin has value because people think it is censorship resistant and secure. Because it's valuable to users and the price of Bitcoin is high, miners invest money in specialized mining computers.

Over time people have develop specialized hardware to just solve these computational puzzles. These computers are much much better at this than normal CPUs, but they're not really good at anything else. These computers are called Application Specific Integrated Circuits, or ASICs. They are specialized computers chips that are designed to compute transaction as fast and efficiently as possible. It helps to think of these things are cars. ASICS are Lamborghinis in terms of speed and power. They can compute transactions faster. They are not cheap to acquire so their distribution is not equal to the distribution to other cars. The most basic car everyone has is the CPUs. Pretty much every one has this. Gamers and those that desire a better car use GPUs. Much faster then CPUs. Others looking even better car look to FGPAs. The ones with the most speed and power (currency) are ASCIS. Check out the graph below to see this evolution of mining hardware

<img src="https://user-images.githubusercontent.com/13579802/41478896-5f452a12-7097-11e8-96e7-c9c8d8eeb43f.png" alt="pow asic chart">

In the case of Bitcoin ASICS, these computers are only good at mining Bitcoin, so they can't be resold for any other purpose. If someone used their mining power to overrun the network, then it would no longer be valuable for users, which would make the price of Bitcoin drop, which would make the mining hardware useless, which would make the selfish miner lose a lot of money.

<br />

# Recommended Resources

[Selfish Mining Paper](https://arxiv.org/abs/1311.0243) - Majority is not Enough: Bitcoin Mining is Vulnerable.

[Cryptoecurrency Mining Profit Calculator](https://www.coinwarz.com/cryptocurrency) - We have not verified any of these prices or statistics, but it's interesting to browse and think about non the less. Not only do Proof of Work blockchains have to make sure that incentives are aligned for honest mining within their protocols, but they have to make sure that their mining rewards are competitive with other blockchains. If miners can get more money mining other chains, or think another blockchain's token will rise in value, they will switch to that network. This then reduces the crytpoeconomic security of the network they are switching from, making it easier for attackers to subvert the system, thus making that blockchain's token less valuable, thus making less people mine it, etc... it's a vicious circle.

[Bitcoin Wiki: mining](https://en.bitcoin.it/wiki/Mining) - Bitcoin wiki that explains bitcoin mining.

[Wikipedia: Bitcoin - mining section](https://en.wikipedia.org/wiki/Bitcoin#Mining) - More fun Bitcoin mining facts.

<br />


