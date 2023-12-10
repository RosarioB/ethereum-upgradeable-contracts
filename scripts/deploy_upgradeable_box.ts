import { ethers, upgrades } from 'hardhat';

const main = async () : Promise<void> => {
  const Box = await ethers.getContractFactory('Box');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store', kind: 'transparent' });
  await box.waitForDeployment();
  console.log('Box deployed to:', await box.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});