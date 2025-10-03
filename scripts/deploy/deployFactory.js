const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy(deployer.address); 
  await factory.waitForDeployment();

  console.log(`UniswapV2Factory deployed to: ${factory.target}`);
}

main().catch((error) => {
  console.error("Error deploying contract:", error);
  process.exitCode = 1;
});