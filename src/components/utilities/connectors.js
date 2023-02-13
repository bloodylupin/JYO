window.global ||= window;

import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";


const injected = new InjectedConnector({
    supportedChainIds: [25]
});



const ALL_SUPPORTED_CHAIN_IDS = [25]

const INFURA_NETWORK_URLS =
{
    25: "https://evm.cronos.org"
}

const CHAIN_ID = 25;

const walletconnect = new WalletConnectConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
    rpc: INFURA_NETWORK_URLS,
    chainId: CHAIN_ID,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true
});


export const connectors = {
    injected: injected,
    walletConnect: walletconnect,
};