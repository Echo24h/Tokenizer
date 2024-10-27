# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

### Pour lancer le live network en local (test)
```shell
npx hardhat node
```

### Pour lancer des scripts (directory `scripts/`)

Deployer le contrat:
```shell
npx hardhat run --network localhost scripts/deploy.js
```

Récupérer l'adresse afficher dans la console, la remplacer dans les scripts, puis lancer n'importe quel autre script:
```shell
npx hardhat run --network localhost scripts/interact.js
```

### Pour lancer les test (directory `test/`)
```shell
npx hardhat test
```

## Deployer le token sur la blockchain

Créer un fichier `.env` comme celui-ci à la racine de `code/`:
```shell
# Go to https://www.alchemyapi.io, sign up, create
# a new App in its dashboard, and replace "KEY" with its key
ALCHEMY_API_KEY=

# Replace this private key with your Goerli account private key
# To export your private key from Metamask, open Metamask and
# go to Account Details > Export Private Key
# Beware: NEVER put real Ether into testing accounts
GOERLI_PRIVATE_KEY=
```

Puis éxécuter la commande suivante:
```shell
npx hardhat run scripts/deploy.js --network goerli
```

L'adresse du token s'affichera dans la console, il sera traçable sur https://sepolia.etherscan.io