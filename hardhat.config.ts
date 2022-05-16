import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    matic: {
      url: process.env.MUMBAI_RPC_URL || "",
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  },
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: "USD",
  // },
  // etherscan: {
  //   apiKey: "UKK1EIM738DJHS8PCCPFZMNJAZDSHDB1CH",
  // },
};

export default config;
