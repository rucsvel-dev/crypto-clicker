import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");
  await greeter.deployed();

  console.log(`deployed to:`, greeter.address);

  const config = `
  export const greeterAddress = "${greeter.address}"
  `;
  const data = JSON.stringify(config);

  fs.writeFileSync("config.js", JSON.parse(data));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
