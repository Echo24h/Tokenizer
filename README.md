# Tokenizer
This project allows you to learn the basics in web3. You will have to create your personal token!

## 1. Le Token ERC20
- **Qu'est-ce que c'est ?** Un token ERC20 est un contrat intelligent déployé sur une blockchain (comme Ethereum) qui suit un ensemble standard de règles pour la création et la gestion des tokens fongibles (c'est-à-dire interchangeables, comme des pièces de monnaie).
- **Fonctions principales :** Les tokens ERC20 respectent un ensemble de fonctions et d'événements standardisés, tels que `name()`, `symbol()`, `decimals()`, `totalSupply()`, `balanceOf()`, `transfer()`, etc. Cela permet à tout token ERC20 d'être compatible avec les portefeuilles, les exchanges et d'autres contrats intelligents qui prennent en charge ce standard.
- **Exemples :** Des tokens bien connus tels que **USDT (Tether)**, **LINK (Chainlink)**, et **UNI (Uniswap)** sont des tokens ERC20.
- **Pas de gestion des fonds :** Le token lui-même n'est pas un endroit où les fonds sont « stockés ». Il enregistre les soldes des utilisateurs, mais les tokens sont détenus par des adresses sur la blockchain.

## 2. Le Wallet
- **Qu'est-ce que c'est ?** Un wallet (ou portefeuille) est une application ou un dispositif qui permet aux utilisateurs de gérer leurs clés privées pour accéder à leurs adresses sur la blockchain, où sont stockés les tokens et cryptomonnaies.
- **Fonctions principales :** Un wallet permet aux utilisateurs d'envoyer, de recevoir et de gérer leurs actifs numériques. Les wallets peuvent être des applications logicielles comme MetaMask, des portefeuilles matériels comme Ledger, ou même des portefeuilles multisignatures comme Gnosis Safe.
- **Gestion des clés :** Les wallets gèrent les clés privées des utilisateurs, qui sont essentielles pour signer les transactions et prouver la possession des tokens.

## Relation entre les deux
Le token est un actif numérique enregistré sur la blockchain, tandis que le wallet est l'outil qui permet aux utilisateurs d'interagir avec cet actif. Les transactions de tokens ERC20, comme envoyer des tokens à quelqu'un d'autre, sont initiées et signées à partir d'un wallet, mais elles sont ensuite exécutées par le contrat intelligent du token sur la blockchain.

En résumé, bien que le wallet et le token soient liés, ils ont des fonctions distinctes : le wallet sert de pont entre l'utilisateur et ses actifs, tandis que le contrat du token détermine la logique et les règles de ces actifs.

# Documentation du projet

[Documentation supplémentaire](./documentation/README.md)

## Ressources

### Medium Tutorial


## Ressources

Voici quelques ressources utiles pour approfondir vos connaissances et mieux utiliser ce projet :

- [Medium : Création d'un token ERC20 avec Hardhat](https://medium.com/@kaishinaw/erc20-using-hardhat-a-comprehensive-guide-3211efba98d4) — Un tutoriel pas à pas pour créer un token ERC20 avec Hardhat.
- [(Vidéo) Création d'une Dapp avec Hardhat](https://www.youtube.com/watch?v=nNUpA0d6CFo) — (Dapp) Full Stack Ethereum Development Guide - Using Solidity, Hardhat, & ReactJS.
- [Node.js et npm](https://nodejs.org/en/docs/) — La documentation officielle pour Node.js et son gestionnaire de paquets npm.

N'hésitez pas à consulter ces ressources pour vous aider dans votre projet et élargir vos compétences.