# Chapter 02: An Introduction to Game Theory


## WORKING DRAFT 

(TODO: Tie these examples into crypto-economic examples - why are these a part of our toolbox?)


Cooperative game theory allows players to coordinate and choose strategies together providing all participants in the coalition a higher payoff.
A “fair” allocation of payoffs within the coalition can be determined in different ways.
A process of bargaining can occur during coalition formation.



### What is a game? 

A game is a broad classification for a set of interactions between individuals whose decision making affects the other individuals in the game. Games have players, strategies, preferences and payoffs. In the simple games that follow, it is assumed that the players are self interested. 


### Cooperative and Non-Cooperative Games

**Cooperative game:** games where coalitions will form - cooperative game theory is primarily the study of how coalitions will form. 

**Coalition:** group of players 
Self enforcing: an agreement enforceable only by the parties involved

|                           | Cooperative | Non-Cooperative |
|:-------------------------:|:-----------:|:---------------:|
|       Self-Enforcing      |      x      |        ✓        |
|     Coalition-Forming     |      ✓      |        x        |
| Contains Nash Equilibrium |      x      |        ✓        |


**Non-cooperative game:** no external authority that enforces rules. Cooperative games mostly study how coalitions form, whereas non-cooperative games (which are a more specific category) revolve around studying the decision making strategies of self interested players in pursuit of their own goals, while in the presence of other players with conflicts of interest. This is maybe less important than just giving an example..


In two person zero sum games, one player’s gain is another player’s loss. This is important - one difference between non-zero sum games is that if a player is given an opportunity to hurt another player, they are not expected to do so in the latter case. But in the case of a zero sum game - that action becomes equivalent to furthering one's own payoff.

### Nash Equilibrium

A Nash equilibrium occurs in a non-cooperative game when players have no incentive to diverge from their chosen strategies. 

There are a myriad of factors to consider when analyzing strategies and payoffs of games. Let’s first take a look at the classic Prisoner’s Dilemma, slightly adapted to fit a blockchain theme.

### The Prisoner’s Dilemma

You (the reader) and I (the author) are arrested on suspicion of operating a darknet market. The police detain us in separate rooms to prevent collusion, and try to get a confession.

Each of us has two strategies:
Confess
Don’t confess

[insert image of a brutish police officer]

A hulking police officer with a low-set brow and a greasy snarl says to you, “If neither of you confess, you will both serve a year in jail. If both of you confess, you will each serve five years in jail. If you confess but your co-conspirator does not, then you will be let free but your co-conspirator will serve a decade behind bars. I will tell the other guilty looking savage the same thing.”

The goal for the police is to gain a confession, so confessions are rewarded.
The goal for each crook is to minimize the length of their own sentence, or in other words maximize payoff.

Let’s take a look at the payoff matrix:


|                 | You Confess | You Don't Confess |
|-----------------|-------------|-------------------|
| I Confess       | (-5, -5)    | (0, -10)          |
| I Don't Confess | (-10, 0)    | (-1, -1)          |


In this example, confessing strictly dominates staying silent. If I confess, the best strategy for you is to also confess. If I don’t confess, the best strategy for you is still to confess. A strategy is strictly dominant for you if it yields the highest payoff regardless of what strategy is chosen by the other party. A Nash equilibrium for this game occurs at (confess, confess)

It is important to note that it changes the game if we both agree to stay silent before the game - or if we are very good buddies, and thus not completely self interested. Players preferences are often complex and reflect far more than the explicit payout. Ideally these preferences would be encoded into the utility functions of the players so that irrational behavior can be explained as alternate preferences. However, predicting what motivates players is notoriously difficult. We won’t get deep into the weeds in this chapter but do remember that preferences exist and can make accurately modeling behavior very difficult. 

Additionally, the set of all combinations of actions that players can take in a strategic game constitutes the set of all possible outcomes, or the strategy profile. Strategic games can be modeled with the number of players, the strategy profile, and the respective utility functions. 


Let’s take a look at another example of the prisoner’s dilemma.

The generals of the planet Mars are debating allocating large amounts of capital towards weaponizing and defending the planet from Earth. Although nothing has happened yet and the two planets are currently at peace, Martian generals are suspicious and fear that Earthlings have stockpiled enough weapons to severely damage Mars- especially if Martians are unprepared.



|                        | Mars remains at peace | Mars declares war |
|------------------------|-----------------------|-------------------|
| Earth remains at peace | (3, 3)                | (5, -3)           |
| Earth declares war     | (-3, 5)               | (0, 0)            |

Hmm... I don’t think these numbers are best… take a look later
(TODO: Find better example values)

It’s in both planets’ best interest to remain at peace. Engaging in an arms race is morbidly expensive and consuming. However, it’s even more expensive to be caught singing in the shower, so to speak. 

Wait a moment!

You may have noticed that in both examples above, players could have maximized their total payoffs by cooperating. If Mars and Earth remained at peace, each planet would have had a utility of +3. If you and I had just kept our mouths shut, we would each only serve a year in prison… rather than the five years in the Nash equilibrium. 

Unfortunately, the (cooperate, cooperate) pairing in both examples is unstable. A Nash equilibrium exists when there is no incentive to diverge but players can gain more utility by deviating from a cooperative plan. A game is a Prisoner’s Dilemma if the Nash equilibrium in the game results in a lower payoff than (cooperate, cooperate).

So, there we have it. Remember that a Nash equilibrium is not a utility maximizing function. To put it in more concrete terms, in a payoff matrix, a Nash equilibrium is found in the pair (a, b) where a is the largest component of the column and b is the largest component of the row.

We assume players in the above examples are playing pure strategies. That is, strategies that are deterministic and not reliant on chance. Nash equilibria also exist for mixed strategies, which assign probabilities to outcomes. There’s some contention on what mixed strategies are truly defined by, because decisions in the real world are rarely made completely randomly. For our purposes, it’s safe to say that randomness in mixed strategies is a result of uncertainty in a set of actions and our mixed strategies rely on probabilistic outcomes.

#### What’s a mixed strategy?
The Martian army wants Earthling territory. Martians have two places they can attack - Earth, or Earth’s moon. Earth has lots of resources and is a much juicier loot (utility 20). The moon is kind of shitty but it’s nice to look at, and the Earthlings really value it (utility 5). 

However, the earthling army is very strong. Earthlings can defend either earth, or the moon. If the Martian army and the Earthling army come in to contact, the Earthlings will successfully defend their territory. 

In deciding what to attack, Martians could easily fall down a rabbit hole:

👽🌙 “Earthlings expect us to attack earth because it’s the juiciest loot, so they will leave the moon unprotected. We should attack the moon.”

👽 🌏 “Earthlings know that we are strategic and will preempt the former strategy so they will defend the moon. Ha, let us conquer earth!”

👽🌙 “But Earthlings may be one step ahead of that and preempt that too! Thus they will protect the moon, thinking that we have preempted their defense of earth.”

And so on and so forth, because this kind of pontificating doesn’t lead to any measurable conclusion. The key to finding a mixed Nash equilibrium in this game is for the Martians to select a strategy that they won’t regret once they learn what strategy the Earthlings chose.

Nash equilibria are solution concepts. Solution concepts are helpful because they can be prescriptive and or predictive. Prescriptively, solution concepts guide players in how they should act to maximize payoff within the context of other players’ actions. Predictively, those analyzing a game have a guideline on what the expected outcome of a game is. 

In order for the Martians to find a strategy that they won’t regret, they must find a strategy that they would not deviate from regardless of the Earthlings’ decision making.

Let x = P(attack earth)
And 1-x = P(attack moon)

The expected value of attacking earth x percent of the time should be the same as attacking the moon 1-x percent of the time.

Utility(earth) * P(attack earth) = Utility(moon) * P(attack moon)
20x = 5(1-x)
20x = 5 - 5x
25x = 5
x = 1/5

Ah! So the Martians should attack earth one out of five times, and attack the moon four out of five times for an average expected utility of 4. 

### The Dominant and the Dominated

When playing games in the first chapter of any textbook, it is often assumed that the players’ rationality is common knowledge. Common knowledge can be a little bit of a rabbit hole, maybe we can call it a bunny hole. Common knowledge is awareness of the awareness of other players. This is shit but I must finish writing at least something for each section of the first chapter.

It’s not sufficient to say “It is common knowledge that Donald Trump uses turmeric to dye his hair, because I know that everyone else knows that.”

Common knowledge also implies that everybody knows that everyone else knows that Donald Trump uses turmeric to dye his hair. That is, it is not simply known by everyone, but that everyone knows that everyone knows it ;). Assuming common knowledge for these games is important for completeness of information, as that affects the players’ behavior. 

We’ve already gone over what a strictly dominant strategy is. 

[insert winky gif]

On to our example! Smaller matrices are computationally simpler than large matrices. Sometimes, a game can be reduced to a smaller matrix. In this example we go through an example of elimination by dominance, or iterated elimination of dominant strategies.

[this example is adapted from Game Theory 101]

My rival John and I both made money investing in bitcoin. However, John’s bitcoin was bought and sold off the books so he did not report it to the IRS and thus can afford to open up a cafe in the middle of of the city. Because I paid my taxes, I have much less money than John and I can only afford to open up a cafe in a suburb. 

John and I both want to open pet cafes, and the local government only allows cat cafes or gerbil cafes. 

I don’t know what type of cafe John will open because we aren’t tight anymore and we don’t talk like that. I just know that if I end up opening the same type of animal cafe as John, everyone will go to his cafe, which is centrally located. However, a customer survey came out in the newspaper about what types of pet cafes people like the most. 60% of respondents were cat lovers and would never go to a gerbil cafe. 20% said they would prefer gerbils but would still go to a cat cafe. 20% of respondents said they would only go to a gerbil cafe.

I saw that someone tagged John in the comments section, and he hearted it, so I knew he had seen it.

|                          | I open a cat cafe | I open a gerbil cafe |
|--------------------------|-------------------|----------------------|
| John opens a cat cafe    | (80,0)            | (60,40)              |
| John opens a gerbil cafe | (40,60)           | (40, 0)              |

Yikes. This doesn’t look good for me - as long as I’m doing the same thing as John, I won’t get any customers. I also don’t have a strictly dominant strategy, meaning no strategy exists that will always allow me to outperform John.

So, let’s do some iterated elimination (in this simple case, there’s only one iteration) to figure out what my strategy should be. If we put ourselves in John’s shoes, we find that opening a cat cafe strictly dominates opening a gerbil cafe for him. If John is rational, he will open a cat cafe.

Since I know John will open a cat cafe, I can eliminate the row “John opens gerbil cafe”.

|                          | I open a cat cafe | I open a gerbil cafe |
|--------------------------|-------------------|----------------------|
| John opens a cat cafe    | (80,0)            | (60,40)              |


If I also open a cat cafe, nobody will show up.  If I open a gerbil cafe, I’ll have 40 customers.

### Chickens, Hawks and Doves

#### Game of Chicken
This is another bimatrix game, but the players are incentivized to play a different strategy than the other player. This game is also referred to as the Hawk/Dove game.

Two drivers are speeding down a narrow road, and when they round the curve they realize they are coming at each other head-on. Neither driver wants to yield, but if nobody yields then they will crash. It is preferable to win (not have to yield) over tying (both drivers yield), and tying is preferable to colliding (neither driver yields). Nobody wants to be the “chicken”. 

*insert payoff matrix*

#### Hawk Dove
Like the game of chicken, hawk-dove players are incentivized to play different strategies than each other because the contested resource is rivalrous. Contests for rivalrous resources result in non-coordination games because consumption of the desired prize or good by one player results in a barrier to access for the other player, or nothing to access at all any longer.

*insert payoff matrix*


### PUNISHMENT SCHEMES 
(TO DO)

This ain’t some spank me daddy shit. We shall cover: grim triggers, mutually assured destruction, and tit for tat.

Grim trigger is a forever punishment for a one time mistake.

Tit for tat is a punishment per mistake. 

Mutually assured destruction


## Just For Fun: The Crypto Pirates Dilemma

There are five digital pirates looking for vulnerabilities in the King’s hardware wallet. The pirates are named A, B, C, D and E. They are named according to their rank, with A being the highest and E being the lowest. They find 100 bitcoins and split the loot according to pirate tradition. The most senior pirate gets to propose a distribution of coins, and all five pirates vote on whether or not to accept the proposal. If a majority vote against the proposal, then the proposer will be executed. 

| A | B | C | D | E |
|---|---|---|---|---|
| ? | ? | ? | ? | ? |

The goal for each pirate is to maximize how many coins they get. However, all things equal, each pirate prefers to kill another pirate. Meaning that if they get the same amount of coins anyway, they’d rather take the option that includes killing a pirate.

How should A distribute the coins, if a bitcoin cannot be split into decimal places?






