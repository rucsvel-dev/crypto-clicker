import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const Clicker = await ethers.getContractFactory("Clicker");
  const clicker = await Clicker.deploy();
  await clicker.deployed();

  console.log(`deployed to:`, clicker.address);

  const config = `
  export const greeterAddress = "${clicker.address}"
  `;
  const data = JSON.stringify(config);

  fs.writeFileSync("config.js", JSON.parse(data));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
