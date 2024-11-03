# Tokenizer
Ce projet permet d'apprendre les bases du web3. En créant notre token sur une blockchain !

- [Documentation du projet](./documentation/README.md)

## 1. Le Token

- **Qu'est-ce que c'est ?** Un token est un contrat déployé sur une blockchain (comme Ethereum) qui suit un ensemble standard de règles pour la création et la gestion des tokens fongibles (c'est-à-dire interchangeables, comme des pièces de monnaie).
- **ERC20 :** l'ERC20 est une standardisation. Les tokens ERC20 respectent un ensemble de fonctions et d'événements standardisés, tels que `name()`, `symbol()`, `decimals()`, `totalSupply()`, `balanceOf()`, `transfer()`, etc. Cela permet à tout token ERC20 d'être compatible avec les portefeuilles, les exchanges et d'autres contrats intelligents qui prennent en charge ce standard.
- **Exemples :** Des tokens bien connus tels que **USDT (Tether)**, **LINK (Chainlink)**, et **UNI (Uniswap)** sont des tokens ERC20.

## 2. Le Wallet

- **Qu'est-ce que c'est ?** Un wallet (ou portefeuille) permet aux utilisateurs de gérer leurs clés privées pour accéder à leurs adresses sur la blockchain, où sont stockés les tokens et cryptomonnaies. Il permet aux utilisateurs d'envoyer, de recevoir et de gérer leurs actifs numériques.
- **Multisignature :** Un wallet multisignature nécessite plusieurs signatures pour autoriser une transaction, renforçant ainsi la sécurité en demandant l'approbation de plusieurs parties.
- **Exemple :** Imaginez une entreprise qui détient des fonds sur un portefeuille blockchain. Pour toute dépense ou transfert, au moins 3 des 5 membres du conseil doivent approuver la transaction. Cela évite qu'une seule personne ne puisse détourner les fonds.

## Relation entre les deux

Le token est un actif numérique enregistré sur la blockchain, tandis que le wallet est l'outil qui permet aux utilisateurs d'interagir avec cet actif. Les transactions de tokens ERC20, comme envoyer des tokens à quelqu'un d'autre, sont initiées et signées à partir d'un wallet, mais elles sont ensuite exécutées par le contrat intelligent du token sur la blockchain.

En résumé, bien que le wallet et le token soient liés, ils ont des fonctions distinctes : le wallet sert de pont entre l'utilisateur et ses actifs, tandis que le contrat du token détermine la logique et les règles de ces actifs.

## Ressources

- [Medium : Création d'un token ERC20 avec Hardhat](https://medium.com/@kaishinaw/erc20-using-hardhat-a-comprehensive-guide-3211efba98d4) — Un tutoriel pas à pas pour créer un token ERC20 avec Hardhat.
- [(Vidéo) Création d'une Dapp avec Hardhat](https://www.youtube.com/watch?v=nNUpA0d6CFo) — (Dapp) Full Stack Ethereum Development Guide - Using Solidity, Hardhat, & ReactJS.
- [Node.js et npm](https://nodejs.org/en/docs/) — La documentation officielle pour Node.js et son gestionnaire de paquets npm.