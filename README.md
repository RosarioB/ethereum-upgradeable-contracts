# ethereum-upgradeable-contracts
Examples of Ethereum upgradeable contracts. This is also the source code of this [Youtube video](https://www.youtube.com/watch?v=7-EoVgHwVnc&t=2s).

1. Clone the repository
2. In the project root create a file .env and add:
   
    `PRIVATE_KEY="your_private_key"`
   
    `INFURA_SEPOLIA_ENDPOINT="your_infura_sepolia_api_key"`
4.  Install the project dependencies: `npm install` or `yarn install`
5.  Compile the contracts: `npx hardhat compile`
7.  Deploy the Box contract: `npx hardhat run scripts/deploy_upgradeable_box.ts --network sepolia`
8.  Deploy the BoxV2 contract: `npx hardhat run scripts/upgrade_box.ts --network sepolia`
