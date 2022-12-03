import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
import { resolve } from "path";

import "hardhat-tracer";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const mnemonic: string | undefined = process.env.MNEMONIC;
if (!mnemonic) {
  throw new Error("Please set your MNEMONIC in a .env file");
}

const infuraApiKey: string | undefined =
  process.env.INFURA_API_KEY;
if (!infuraApiKey) {
  throw new Error(
    "Please set your INFURA_API_KEY in a .env file",
  );
}

const chainIds = {
  // "{INSERT_NAME}": {INSERT_ID},
  hardhat: 31337,
  mainnet: 1,
  sepolia: 11155111,
};

function getChainConfig(
  chain: keyof typeof chainIds,
): NetworkUserConfig {
  let jsonRpcUrl: string;
  switch (chain) {
    // case "{INSERT_NAME}":
    // jsonRpcUrl = "{INSERT_URL}";
    // break;
    default:
      jsonRpcUrl =
        "https://" + chain + ".infura.io/v3/" + infuraApiKey;
  }
  return {
    // Comment out for default hardhat account settings
    accounts: {
      count: 10,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[chain],
    url: jsonRpcUrl,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      rinkeby: process.env.ETHERSCAN_API_KEY || "",
    },
    // customChains: [
    //   {
    //     // network: {INSERT_NAME},
    //     // chainId: {INSERT_ID},
    //     // urls: {
    //       // apiURL:
    //         // "{INSERT_URL}",
    //       // browserURL: "{INSERT_URL}",
    //     // },
    //   },
    // ],
  },
  gasReporter: {
    enabled: !!(
      process.env.REPORT_GAS &&
      process.env.REPORT_GAS != "false"
    ),
    showTimeSpent: true,
    showMethodSig: true,
    token: "ONE",
    currency: "USD",
    // gasPriceApi: process.env.GASPRICE_API_ENDPOINT,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    hardhat: {
      blockGasLimit: 30000000,
      accounts: {
        mnemonic,
      },
      chainId: chainIds.hardhat,
    },
    // network: getChainConfig("{INSERT_NAME}"),
    mainnet: getChainConfig("mainnet"),
    sepolia: getChainConfig("sepolia"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.9",
    settings: {
      metadata: {
        bytecodeHash: "none",
      },
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;