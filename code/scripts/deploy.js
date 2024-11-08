// scripts/deploy.js
const { ethers } = require("hardhat");

// Colors for console output
CYAN = '\x1b[36m%s\x1b[0m';
YELLOW = '\x1b[33m%s\x1b[0m';
GREEN = '\x1b[32m%s\x1b[0m';
RED = '\x1b[31m%s\x1b[0m';

async function main() {

  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(YELLOW, `Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const Token = await ethers.getContractFactory('Token');

  // Deploy the contract
  console.log(YELLOW, 'Deploying Token...');
  const token = await Token.deploy();
  await token.deployed();
  console.log(GREEN, `Token deployed to: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(RED, error);
    process.exitCode = 1;
  });