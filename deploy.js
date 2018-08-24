const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledCampaignFactory = require('./build/CampaignFactory.json');

const mnemonic =
  'chief outside coast artefact enrich pelican raw top yellow witness slogan glide';
const networkUrl =
  'https://rinkeby.infura.io/v3/b4e2b3bf723f4985ae36bc838089e50d';

const provider = new HDWalletProvider(mnemonic, networkUrl);
const web3 = new Web3(provider);

var accounts, lottery;

const deploy = async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(
    JSON.parse(compiledCampaignFactory.interface)
  )
    .deploy({
      data: '0x' + compiledCampaignFactory.bytecode
    })
    .send({
      from: accounts[0],
      gas: '2000000'
    });

  console.log('Contract Deployed! Contract Address: ', lottery.options.address);
  //Latest Deployed Campaign Factory Address: 0x982E4c1B69Fd8356024654f978A1780bCa3d4E66
};

deploy();
