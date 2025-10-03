// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.6.6;

import "node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDT is ERC20("Tether USD", "USDT") {
    constructor(uint256 initialSupply) public {
        _mint(msg.sender, initialSupply * (10 ** uint256(decimals())));
    } 

    function decimals() public view virtual override returns(uint8) {
        return 6;
    }
}