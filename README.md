# Tokenizer
Ce projet permet d'apprendre les bases du web3 en créant un token sur une blockchain.

**⚠️ Attention** : Vous n'aurez jamais besoin d'utiliser de l'argent réel pour ce projet. Des blockchains de test sont disponibles pour éviter tout risque financier.

1. [Le Token](#le-token)
2. [Documentation](#documentation)
3. [Choix de développement](#choix-de-développement)
4. [Définitions](#définitions)
5. [Ressources](#ressources)

## Le Token

Pour traçer le token et observer sont activité, vous pouvez vous rendre sur [TESTNET Sepolia](https://sepolia.etherscan.io/token/0xdd6D80291E74c26eB4EbC2BB0571B3e75bF15aF5).

L'adresse du **Token42 (T42)** est: **0xdd6D80291E74c26eB4EbC2BB0571B3e75bF15aF5**

L'adresse du createur est : **0x557aC70aED435EC5D57aDe234CbB2a95561aF898**

## Documentation

La documentation complète pour l'instalation, le déployement et l'utilisation tu Token42: [./documentation/README.md](./documentation/README.md)


## Choix de développement

Pour le développement de cet exercice, j'ai opté pour l'utilisation de Hardhat sur la blockchain de test Sepolia d'Ethereum.

Plusieurs raisons justifient ce choix :

1. **Ethereum** : Cette blockchain bénéficie d'un écosystème riche et d'une large communauté, offrant une solide base de ressources et de soutien pour le développement.

2. **Hardhat** : Cet outil de développement en console est compatible avec Node.js et s'intègre parfaitement dans mon environnement de travail, VSCode. Son utilisation est donc fluide et accessible.

3. **Portabilité et ressources** : La grande quantité de ressources disponibles en ligne sur Hardhat, combinée à mes connaissances en Node.js, en fait un choix idéal pour un premier projet blockchain.

Ainsi, la combinaison d'Ethereum et de Hardhat répond parfaitement à mes besoins pour apprendre sur un premier projet blockchain.

## Définitions

### Le Token

- **Qu'est-ce que c'est ?** Un token est un contrat déployé sur une blockchain (comme Ethereum) qui suit un ensemble standard de règles pour la création et la gestion des tokens fongibles (c'est-à-dire interchangeables, comme des pièces de monnaie).
- **ERC20 :** l'ERC20 est une standardisation. Les tokens ERC20 respectent un ensemble de fonctions et d'événements standardisés, tels que `name()`, `symbol()`, `decimals()`, `totalSupply()`, `balanceOf()`, `transfer()`, etc. Cela permet à tout token ERC20 d'être compatible avec les portefeuilles, les exchanges et d'autres contrats intelligents qui prennent en charge ce standard.
- **Exemples :** Des tokens bien connus tels que **USDT (Tether)**, **LINK (Chainlink)**, et **UNI (Uniswap)** sont des tokens ERC20.

### Le Wallet

- **Qu'est-ce que c'est ?** Un wallet (ou portefeuille) permet aux utilisateurs de gérer leurs clés privées pour accéder à leurs adresses sur la blockchain, où sont stockés les tokens et cryptomonnaies. Il permet aux utilisateurs d'envoyer, de recevoir et de gérer leurs actifs numériques.
- **Multisignature :** Un wallet multisignature nécessite plusieurs signatures pour autoriser une transaction, renforçant ainsi la sécurité en demandant l'approbation de plusieurs parties.
- **Exemple :** Imaginez une entreprise qui détient des fonds sur un portefeuille blockchain. Pour toute dépense ou transfert, au moins 3 des 5 membres du conseil doivent approuver la transaction. Cela évite qu'une seule personne ne puisse détourner les fonds.

### Relation entre les deux

Le token est un actif numérique enregistré sur la blockchain, tandis que le wallet est l'outil qui permet aux utilisateurs d'interagir avec cet actif. Les transactions de tokens ERC20, comme envoyer des tokens à quelqu'un d'autre, sont initiées et signées à partir d'un wallet, mais elles sont ensuite exécutées par le contrat intelligent du token sur la blockchain.

En résumé, bien que le wallet et le token soient liés, ils ont des fonctions distinctes : le wallet sert de pont entre l'utilisateur et ses actifs, tandis que le contrat du token détermine la logique et les règles de ces actifs.

## Ressources

- [Medium : Création d'un token ERC20 avec Hardhat](https://medium.com/@kaishinaw/erc20-using-hardhat-a-comprehensive-guide-3211efba98d4) — Un tutoriel pas à pas pour créer un token ERC20 avec Hardhat.
- [(Vidéo) Création d'une Dapp avec Hardhat](https://www.youtube.com/watch?v=nNUpA0d6CFo) — (Dapp) Full Stack Ethereum Development Guide - Using Solidity, Hardhat, & ReactJS.
- [Node.js et npm](https://nodejs.org/en/docs/) — La documentation officielle pour Node.js et son gestionnaire de paquets npm.

- [Hardhat](https://hardhat.org/docs) — La documentation officielle pour Hardhat.

- [Metamask](https://metamask.io/) — Un Wallet web3 qui permet de gérer ses clefs simplement.