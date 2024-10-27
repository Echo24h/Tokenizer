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