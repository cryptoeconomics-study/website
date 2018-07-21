# Chapter 1 Overview

{% youtube %}https://www.youtube.com/watch?v=VaUTTE5xb54{% endyoutube %}

An overview of all the content we will be covering in Chapter 1!

{% exercise %}
{%mcq ans='o3', random=true %}
{%title%} What is an account nonce?
{%o1%} Noncense
{%o2%} Random value given from proof of work
{%o3%} The transaction count of the account
{%o4%} An account signature
{%hint%} https://github.com/ethereum/wiki/wiki/Glossary
{%message%} Fantastic! The account nonce is a transaction counter in each account. This prevents replay attacks where a transaction sending eg. 20 coins from A to B can be replayed by B over and over to continually drain A's balance.
{%endmcq%}

{% endexercise %}
