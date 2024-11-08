# Sommaire
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Déploiement](#déploiement)
4. [Fonctionnalités](#fonctionnalités)
5. [Test](#test)
6. [Script](#script)

---

## Introduction

**⚠️ Attention** : Le projet se situe dans le dossier `./code`, en conséquence, toutes les commandes doivent être éxécuter dans `./code` et non à la racine.

## Installation

- **Node.js** doit être installé sur le système

- Dans le projet peut être installé avec la commande suivante:
    ```bash
    npm install
    ```

## Déploiement

- Dans le fichier `.env` du dossier `./code/`, ajoutez et configurez ceci:
    ```bash
    # ---- PUBLIC ----

    # Go to https://www.alchemyapi.io, sign up, create
    # a new App in its dashboard, and replace "KEY" with its key
    ALCHEMY_API_KEY="KEY"

    # Replace this private key with your Goerli account private key
    # To export your private key from Metamask, open Metamask and
    # go to Account Details > Export Private Key
    # Beware: NEVER put real Ether into testing accounts
    GOERLI_PRIVATE_KEY="PRIVATE_KEY"

    # ---- LOCALHOST ----

    # Replace this address with the contract address of the token owner
    # If you are in localhost this address is given during deployment
    TOKEN_ADDRESS="ADRESS"
    ```

### Pour déployer dans le réseau local

- Lancer le **live network** en local:
    ```bash
    npx hardhat node
    ```

- Déployer le contrat:
    ```bash
    npx hardhat run --network localhost scripts/deploy.js
    ```

### Pour déployer dans le réseau blockchain Georli

- Exécuter la commande suivante:
    ```bash
    npx hardhat run scripts/deploy.js --network goerli
    ```

- L'adresse du token s'affichera dans la console, il sera traçable sur [TESTNET Sepolia](https://sepolia.etherscan.io).

## Fonctionnalités

- **`name()`** :

- **`symbol()`** :

- **`decimals()`** :

- **`totalSupply()`** :

- **`balanceOf(account)`** :

- **`transfer(recipient, amount)`** :

- **`allowance(owner, spender)`** :

- **`approve(spender, amount)`** :

- **`transferFrom(sender, recipient, amount)`** :

- **`mint(amount)`** :

- **`burn(amount)`** :

### En savoir plus

Pour plus d'informations, vous pouvez consulter la documentation offiecielle de l'[ERC20 OpenZeppelin](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20).

## Test

- Les tests peuvent être modifier dans le fichier `test/Token.test.js`, ensuite ils peuvent être effectué avec la commande suivante :
    ```bash
    npx hardhat test
    ```

## Script

- Il est également possible de créer des scripts, un exemple est inclus dans le dossier `scripts/` et peut être exécuté avec la commande suivante :
    ```bash
    npx hardhat run --network localhost scripts/interact.js
    ```
**⚠️ Attention** : Il est nécessaire de remplacer l'adresse du contrat token par le concerné dans le script.