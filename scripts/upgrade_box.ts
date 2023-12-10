import { ethers, upgrades } from 'hardhat';

const main = async () : Promise<void> => {
    const BoxV2 = await ethers.getContractFactory('BoxV2');
    console.log('Upgrading Box...');
    await upgrades.upgradeProxy('0xdD9ADF841C0321289C6EC44Bd1A96ad49d53e7C0', BoxV2, { kind: 'transparent' });
    console.log('Box upgraded');
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});