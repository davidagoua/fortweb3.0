require("@nomicfoundation/hardhat-toolbox");

// https://eth-goerli.g.alchemy.com/v2/5ia6-ObMmXeSR7mMi2brnQZhHSXdwYzu
// 5ia6-ObMmXeSR7mMi2brnQZhHSXdwYzu
// wss://eth-goerli.g.alchemy.com/v2/5ia6-ObMmXeSR7mMi2brnQZhHSXdwYzu

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks : {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/5ia6-ObMmXeSR7mMi2brnQZhHSXdwYzu",
      accounts : ['7f3ced27ec2ea7c074698c23581d39ff6dc0da6d491674a6d0a1d16198323cec']
    }
  }
};
