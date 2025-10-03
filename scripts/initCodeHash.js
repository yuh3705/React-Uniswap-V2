const { ethers } = require("hardhat");


async function getHash() {
    const Pair = await ethers.getContractFactory("UniswapV2Pair"); 
    const initCodeHash = ethers.keccak256(Pair.bytecode); // bytecode chưa deploy
    console.log("Init code hash:", initCodeHash);
}

getHash();