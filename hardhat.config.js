require('dotenv').config()
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/-ciepLPh-TWCsNBPb3LaTwKxyddsECu5',
      // url: 'https://polygon-mainnet.g.alchemy.com/v2/FM93UrwS_VtahJTrBz5W4jzJRRG90i4_',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
}
