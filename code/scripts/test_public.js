const { ethers } = require("hardhat");
require('dotenv').config();

// Colors
CYAN = '\x1b[36m%s\x1b[0m';
YELLOW = '\x1b[33m%s\x1b[0m';
RED = '\x1b[31m%s\x1b[0m';

async function main() {

    // --- Setup ---

    const contractAddress = "0xdd6D80291E74c26eB4EbC2BB0571B3e75bF15aF5";
    const ownerAddress = "0x557aC70aED435EC5D57aDe234CbB2a95561aF898";
    const recipientAddress = "0xdd6D80291E74c26eB4EbC2BB0571B3e75bF15aF5";
    
    console.log(YELLOW, 'Getting the token contract...');
    const token = await ethers.getContractAt('Token', contractAddress);

    // --- Test ---

    // name()
    console.log(CYAN, 'name()');
    console.log('Querying token name...');
    const name = await token.name();
    console.log(`Token Name: ${name}\n`);

    // symbol()
    console.log(CYAN, 'symbol()');
    console.log('Querying token symbol...');
    const symbol = await token.symbol();
    console.log(`Token Symbol: ${symbol}\n`);

    // decimals()
    console.log(CYAN, 'decimals()');
    console.log('Querying decimals...');
    const decimals = await token.decimals();
    console.log(`Token Decimals: ${decimals}\n`);

    // totalSupply()
    console.log(CYAN, 'totalSupply()');
    console.log('Querying total supply...');
    totalSupply = await token.totalSupply();
    console.log(`Total Supply: ${ethers.utils.formatUnits(totalSupply, decimals)} ${symbol}\n`);

    // balanceOf(address account)
    console.log(CYAN, 'balanceOf(address account)');
    console.log('Getting the balance of contract owner...');
    let ownerBalance = await token.balanceOf(ownerAddress);
    console.log(`Contract owner at ${ownerAddress} has a ${symbol} balance of ${ethers.utils.formatUnits(ownerBalance, decimals)}\n`);

    // transfer(to, amount)
    console.log(CYAN, 'transfer(to, amount)');
    console.log('Initiating a transfer...');
    const transferAmount = 1;
    console.log(`Transferring ${transferAmount} ${symbol} tokens to ${recipientAddress} from ${ownerAddress}`);
    await token.transfer(recipientAddress, ethers.utils.parseUnits(transferAmount.toString(), decimals));
    console.log('Transfer completed');
    ownerBalance = await token.balanceOf(ownerAddress);
    console.log(`Balance of owner (${ownerAddress}): ${ethers.utils.formatUnits(ownerBalance, decimals)} ${symbol}`);
    let recipientBalance = await token.balanceOf(recipientAddress);
    console.log(`Balance of recipient (${recipientAddress}): ${ethers.utils.formatUnits(recipientBalance, decimals)} ${symbol}\n`);

    // // approve(address spender, uint256 amount)
    // console.log(CYAN, 'approve(address spender, uint256 amount)');
    // console.log(`Setting allowance amount of spender over the caller\'s ${symbol} tokens...`);
    // const approveAmount = 1;
    // console.log(`This example allows the contractOwner to spend up to ${approveAmount} of the recipient\'s ${symbol} token`);
    // const signers = await ethers.getSigners();
    // console.log(signers);
    // const signerContract = token.connect(signers[0]); // Creates a new instance of the contract connected to the recipient
    // await signerContract.approve(ownerAddress, ethers.utils.parseUnits(approveAmount.toString(), decimals));
    // console.log(`Spending approved\n`);

    // // allowance(address owner, address spender)
    // console.log(CYAN, 'allowance(address owner, address spender)');
    // console.log(`Getting the contracOwner spending allowance over recipient\'s ${symbol} tokens...`);
    // let allowance = await token.allowance(recipientAddress, ownerAddress);
    // console.log(`contractOwner Allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);

    // // transferFrom(address from, address to, uint256 amount)
    // console.log(CYAN, 'transferFrom(address from, address to, uint256 amount)');
    // const transferFromAmount = 1;
    // console.log(`contracOwner transfers ${transferFromAmount} ${symbol} from recipient\'s account into own account...`);
    // await token.transferFrom(recipientAddress, ownerAddress, ethers.utils.parseUnits(transferFromAmount.toString(), decimals));
    // ownerBalance = await token.balanceOf(ownerAddress);
    // console.log(`New owner balance (${ownerAddress}): ${ethers.utils.formatUnits(ownerBalance, decimals)} ${symbol}`);
    // recipientBalance = await token.balanceOf(recipientAddress);
    // console.log(`New recipient balance (${recipientAddress}): ${ethers.utils.formatUnits(recipientBalance, decimals)} ${symbol}`);
    // allowance = await token.allowance(recipientAddress, ownerAddress);
    // console.log(`Remaining allowance: ${ethers.utils.formatUnits(allowance, decimals)} ${symbol}\n`);

    // mint(uint256 amount)
    console.log(CYAN, 'mint(uint256 amount)');
    const mintAmount = 110;
    console.log(`Minting ${mintAmount} ${symbol} tokens...`);
    await token.mint(ethers.utils.parseUnits(mintAmount.toString(), decimals));
    totalSupply = await token.totalSupply();
    console.log('Waiting 90 seconds...');
    await new Promise(r => setTimeout(r, 90000));
    console.log(`New total Supply: ${ethers.utils.formatUnits(totalSupply, decimals)} ${symbol}\n`);

    // burn(uint256 amount)
    console.log(CYAN, 'burn(uint256 amount)');
    const burnAmount = 100;
    console.log(`Burning ${burnAmount} ${symbol} tokens...`);
    await token.burn(ethers.utils.parseUnits(burnAmount.toString(), decimals));
    console.log('Waiting 90 seconds...');
    await new Promise(r => setTimeout(r, 90000));
    totalSupply = await token.totalSupply();
    console.log(`New total Supply: ${ethers.utils.formatUnits(totalSupply, decimals)} ${symbol}\n`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(RED, error);
        process.exitCode = 1;
    });