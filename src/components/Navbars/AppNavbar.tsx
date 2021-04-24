import React from "react";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import Web3Modal from "web3modal";

const ABI: AbiItem[] = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allBallots",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allBallotsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "ballotCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ballotLookup",
    "outputs": [
      {
        "internalType": "contract Ballot",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_proposal",
        "type": "string"
      },
      {
        "internalType": "string[]",
        "name": "_candidate",
        "type": "string[]"
      }
    ],
    "name": "createBallot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAddresses",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getBallot",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "myaddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getBallotCandidates",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "myaddress",
        "type": "address"
      }
    ],
    "name": "getBallots",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "participants",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "voteBallot",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const contractAddress = "0x4bf2934cc05788e44D966e9F7177D65A079de97F";

const INITIAL_STATE = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 43113,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null
};

const supportedChains = [
  {
    name: "Avalanche FUJI",
    short_name: "avax",
    chain: "AVAX",
    network: "testnet",
    chain_id: 43113,
    network_id: 1,
    rpc_url: "https://mainnet.infura.io/v3/%API_KEY%",
    native_currency: {
      symbol: "AVAX",
      name: "AVAX",
      decimals: "9",
      contractAddress: "",
      balance: ""
    }
  },
];

function initWeb3(provider: any) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: () => web3.utils.hexToNumber
      }
    ]
  });

  return web3;
}

class AppNavbar extends React.Component<any, any> {


  // @ts-ignore
  public web3Modal: Web3Modal;
  public state: any;
  public showBalance: boolean;
  public showAlert: boolean;

  constructor(props: any) {
    super(props);
    this.showBalance = false;
    this.showAlert = false;
    this.state = {
      ...INITIAL_STATE,
      ABI,
      contractAddress,

    };

    this.web3Modal = new Web3Modal({
      network: this.getNetwork(),
      cacheProvider: true,
      providerOptions: this.getProviderOptions()
    });
  }

  public componentDidMount() {
    if (this.web3Modal.cachedProvider) {
      this.onConnect();
    }

  }

  public onConnect = async () => {
    const provider = await this.web3Modal.connect();

    await this.subscribeProvider(provider);

    const web3 = initWeb3(provider);

    const chainId = await web3.eth.getChainId();
    const networkId = await web3.eth.net.getId();
    let connected = false;

    const accounts = await web3.eth.getAccounts();

    const address = accounts[0];
    web3.eth.defaultAccount = address;
    const subAddress = `${String(address).slice(0, 5)}...${String(address).slice(-5)}`;

    const balance = await web3.eth.getBalance(address);
    const subBalance = Web3.utils.fromWei(balance, 'ether').slice(0, 6);

    let chainData = supportedChains[0];

    if (chainId === 43113) {
      connected = true;

      chainData = supportedChains.filter(
        (chain: any) => chain.chain_id === chainId
      )[0];
    }

    await this.setState({
      web3,
      provider,
      connected,
      address,
      subAddress,
      chainId,
      balance,
      subBalance,
      networkId,
      chainData
    });

    window.web3 = web3;

  }

  public subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => this.resetApp());
    provider.on("accountsChanged", async (accounts: string[]) => {
      try {
        const { web3 } = this.state;

        if (this.state.connected) {
          const firstAccount = accounts[0];
          const subAddress = `${String(firstAccount).slice(0, 5)}...${String(firstAccount).slice(-5)}`;

          web3.eth.defaultAccount = firstAccount;

          const balance = await web3.eth.getBalance(firstAccount);
          const subBalance = Web3.utils.fromWei(balance, 'ether').slice(0, 6);

          await this.setState({ address: accounts[0], subAddress: subAddress, subBalance });
        }


      } catch (error) {
        console.log(error);
      }

    });
    provider.on("chainChanged", async (pChainId: String) => {

      try {
        const { web3 } = this.state;
        let connected = false;

        if (pChainId === '0xa869') {
          connected = true;
          const chainId = 43113;

          const networkId = await web3.eth.net.getId();

          const chainData = supportedChains.filter(
            (chain: any) => chain.chain_id === chainId
          )[0];

          await this.setState({ chainData, chainId, networkId });

          window.web3 = web3;
        }

        await this.setState({ connected });
      } catch (error) {
        console.log(error);
      }

    });


  };

  public getNetwork = () => {
    try {
      const chainData = supportedChains.filter(
        (chain: any) => chain.chain_id === this.state.chainId
      )[0];

      if (!chainData) {
        throw new Error("ChainId missing or not supported");
      }

      return chainData.network;
    } catch (error) {
      console.log(error);
    }

  }

  public getProviderOptions = () => {
    const providerOptions = {};
    return providerOptions;
  };

  public resetApp = async () => {
    const { web3 } = this.state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await this.web3Modal.clearCachedProvider();
    this.setState({ ...INITIAL_STATE });
  };

  public render() {

    return (
      <>
        {/* Navbar */}

        {!this.state.connected ? (
          <div
            className="text-white px-6 py-5 border-0 relative mb-4 bg-pink-500"
          >
            <span className="text-sm inline-block mr-5 align-middle">
              <i className="fas fa-bell mr-3" />
            </span>
            <span className="inline-block align-middle mr-8">
              To connect Ballot App, please select Avalanche Fuji Testnet!
          </span>
          </div>
        ) : null}

        <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">


          <div className="w-full mx-autp items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

              {this.state.connected ? (
                <li className="flex items-center">
                  <button
                    disabled={true}
                    className="bg-indigo-500 text-blueGray-200 active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  > {this.state.chainData?.name ?? 'No Network'}
                  </button>
                </li>
              ) : null}

              {this.state.connected ? (
                <li className="flex items-center">
                  <button
                    disabled={true}
                    className="bg-indigo-500 text-blueGray-200  active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  > {this.state.subBalance + ' ' + this.state.chainData.native_currency.symbol}
                  </button>
                </li>
              ) : null}


              <li className="flex items-center">
                <button
                  onClick={this.onConnect}
                  className="bg-indigo-500 text-blueGray-200 active:bg-blueGray-50 text-xs font-bold uppercase px-3 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                > {this.state.connected ? this.state.subAddress : 'Connect to a wallet'}
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* End Navbar */}
      </>
    );
  }
}

export default AppNavbar;