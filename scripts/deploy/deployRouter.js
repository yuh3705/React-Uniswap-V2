const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const factoryAddress = "0x3f4CB7E39BF9fC3e31068852897f2B0bbdb4399F";
    const ETHAddress = "0x4f7AB399837080229798574866700C066CBc3dc2"; 

    const Router = await ethers.getContractFactory("UniswapV2Router02");

    const router = await Router.deploy(factoryAddress, ETHAddress);
    await router.deploymentTransaction().wait(); 

    console.log("UniswapV2Router02 deployed to:", await router.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});