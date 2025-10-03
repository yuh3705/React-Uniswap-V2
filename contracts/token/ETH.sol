// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.6.6;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ETH is ERC20("Ethers", "ETH") {
    constructor(uint256 initialSupply) public {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    }
}