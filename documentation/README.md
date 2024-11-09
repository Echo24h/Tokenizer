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

- Ajouter le network dans `module.export` du fichier `hardhat.config.js`:
    ```javascript
    // hardhat.config.js
    module.exports = {
        solidity: "0.8.27",
        networks: {
            goerli: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
            accounts: [process.env.GOERLI_PRIVATE_KEY]
            }
        }
    };
    ```

- Exécuter la commande suivante:
    ```bash
    npx hardhat run scripts/deploy.js --network goerli
    ```

- L'adresse du token s'affichera dans la console, il sera traçable sur [TESTNET Sepolia](https://sepolia.etherscan.io).

## Fonctionnalités

- **`name()`** : Retourne le nom du token.

- **`symbol()`** : Retourne le symbol du token.

- **`decimals()`** : Renvoie le nombre de décimales du token.

- **`totalSupply()`** : Retourne le nombre de tokens existants.

- **`balanceOf(account)`** : Retourne le nombre de tokens détenus par le compte.

- **`transfer(recipient, amount)`** : Transfert le montant de token du compte de l’appelant vers le destinataire.

- **`allowance(owner, spender)`** : Retourne le nombre restant de tokens que le compte sera autorisé à dépenser au nom du propriétaire via transferFrom(). C'est zéro par défaut.

- **`approve(spender, amount)`** : Définit le montant autorisé à dépenser du compte sur les tokens de l'appelant.

- **`transferFrom(sender, recipient, amount)`** : Transfère le montant de tokens de l'expéditeur au destinataire à l'aide du mécanisme d'allocation approve(). Le montant est ensuite déduit de l’allocation de l’appelant.

- **`mint(amount)`** : Fabrique une quantité de tokens.

- **`burn(amount)`** : Détruit une quantité de tokens.

### En savoir plus

Pour plus d'informations, vous pouvez consulter la documentation offiecielle de l'[ERC20 OpenZeppelin](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20).

## Script

- Il est également possible de créer des scripts, un exemple de test token est inclus dans le dossier `scripts/` et peut être exécuté avec la commande suivante :
    ```bash
    npx hardhat run --network localhost scripts/test.js
    ```
**⚠️ Attention** : Pour l'exemple `test.js`, il est nécessaire de remplacer l'adresse du contrat token par le concerné dans le `.env`.