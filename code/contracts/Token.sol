// contracts/Token.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    // Define the supply of Token: 42
    uint256 constant initialSupply = 42 * (10**18);

    address public owner;

    // Constructor will be called on contract creation
    constructor() ERC20("Token42", "T42") {
        owner = msg.sender;
        _mint(msg.sender, initialSupply);
    }

    // Function to mint more tokens
    function mint(uint256 amount) public {
        if (msg.sender != owner) {
            revert("Only owner can mint");
        }
        _mint(msg.sender, amount);
    }

    // Function to burn tokens
    function burn(uint256 amount) public {
        if (msg.sender != owner) {
            revert("Only owner can burn");
        }
        _burn(msg.sender, amount);
    }
}