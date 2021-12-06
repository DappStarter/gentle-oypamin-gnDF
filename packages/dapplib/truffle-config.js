require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan response total around hope enter metal gentle'; 
let testAccounts = [
"0x14b9fc9fe99d6102fba9a945ba67a1c7aebdb57efa3fe4b11882994639e2d481",
"0x7caa576abf8ec3ef6f4d46ca7be0e6a84d9bfbc25072b8f94c0f4ff98425cead",
"0x47446caf03b79c2a003ea195de1565b0e59985a389878515ac48109579ddd022",
"0xcc80464be56d619992df1326668ece9b76db6d0f033e41a847bede419439cb58",
"0x65b2923105cfebd5cc0baf23972abf37ea56d6f24e6d2b6100fd2be4f3977430",
"0x56e7cecaf27f6b0fa3a303b9a25ca35ec0e24bfe9ed5203054ef85f8bea7eb9d",
"0x4183e617da2abf28505e1e9d64289fc66c7f5ac1d4e90cb2a0a5a55c1dc7d526",
"0x892e83a3f947e70c6bdd96830befa0b1691d270bfeefc8ac3a377278bbf9cbe6",
"0x7b6cca02f69c89490ea92c45a5e9b2e9b30405ff586dbdadc5af6ed3cfb3400e",
"0x1960b1b96058ab4684f3ebb2b9bb7b927acdeea3be1e84f60b20fbb900bf415a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

