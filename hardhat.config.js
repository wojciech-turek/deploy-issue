require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-solhint");
require("hardhat-contract-sizer");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-deploy");
require("@eth-optimism/plugins/hardhat/compiler");
require("@eth-optimism/hardhat-ovm");

const PRIVATE_KEY =
  "a6a70d939836ce6bf32323e5475cf14f6b81658e4fb6a59bed180569096f88f6";

module.exports = {
  solidity: {
    version: "0.6.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  ovm: {
    solcVersion: "0.6.12",
  },
  networks: {
    coverage: {
      url: "http://localhost:8555",
    },
    nahmii_testnet: {
      url: "https://l2.testnet.nahmii.io/",
      chainId: 5553,
      gas: 1481768232,
      // gas: 100000,
      // gasLimit: 100000,
      // gas: 9958299,
      gasPrice: 15000000,
      accounts: [`0x${PRIVATE_KEY}`],
      ovm: true,
    },
  },
};
