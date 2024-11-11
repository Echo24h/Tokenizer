# Sommaire
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Déploiement](#déploiement)
4. [Fonctionnalités](#fonctionnalités)
5. [Script](#script)

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

**Si vous souhaitez deployer le token en public**, il seras necessaire de creer un compte et une app sur [Alchemy](https://www.alchemyapi.io) ainsi qu'un compte [Metamask](https://metamask.io/).

- Dans le fichier `.env` du dossier `./code/`, ajoutez et configurez ceci:
    ```bash
    # ---- PUBLIC ONLY ----

    # Go to https://www.alchemyapi.io, sign up, create
    # a new App in its dashboard, and replace "KEY" with its key
    ALCHEMY_API_KEY="KEY"

    # Replace this private key with your Goerli account private key
    # To export your private key from Metamask, open Metamask and
    # go to Account Details > Export Private Key
    # Beware: NEVER put real Ether into testing accounts
    GOERLI_PRIVATE_KEY="PRIVATE_KEY"
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

**⚠️ Attention** : Il est nécessaire de posséder des Sepolia Ether (ETH de test) pour déployer le token en public. J'ai pu en recevoir **gratuitement** ici, avec une adresse totalement vide, sans Ethereum : [Google Cloud Web3](https://cloud.google.com/application/web3/faucet/ethereum/sepolia).

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
    # Network : Localhost
    npx hardhat run --network localhost scripts/test_local.js

    # Network : Georli (blockchain public)
    npx hardhat run --network goerli scripts/test_public.js 
    ```
**⚠️ Attention** : Pour les exemples `test_[...].js`, il est nécessaire de remplacer les adresses du contrat token et utilisateurs.