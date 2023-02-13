import { useState } from "react";

import { useWeb3React } from "@web3-react/core";

import { connectors } from "./utilities/connectors";

import Button from "./Button";
import Modal from "./Modal";
import Answer from "./Answer";

import { Buffer } from "buffer";

window.Buffer = Buffer;

export default function ConnectButton() {
    const { chainId, account, activate, deactivate, library } = useWeb3React();

    const [show, setShow] = useState(false);

    const [answerShow, setAnswerShow] = useState(false);
    const [data, setData] = useState({ success: undefined, answer: undefined });

    const connectMetaMask = async () => {
        await activate(connectors.injected, err => {
            setData(() => ({ success: false, answer: err.message }));
            setAnswerShow(() => true);
            if (chainId !== 25) window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x19",
                    rpcUrls: ["https://evm.cronos.org"],
                    chainName: "Cronos Mainnet Beta",
                    nativeCurrency: {
                        name: "CRO",
                        symbol: "CRO",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://cronoscan.com/"]
                }]
            }).catch(err => console.log(err));
            console.log(err);
        });
    }

    const connectWalletConnect = async () => {
        await activate(connectors.walletConnect, err => {
            setData(() => ({ success: false, answer: err.message }));
            setAnswerShow(() => true);
            console.log(err);
        });
    }
    return (
        <>

            <Button onClick={() => setShow(prevShow => !prevShow)}>Connect Wallet</Button>

            <Modal show={show} setShow={setShow}>
                <div className="grid gap-4 text-white">
                    <h2>Connect Wallet</h2>
                    <hr className="border-white" />
                    <Button onClick={connectMetaMask}>
                        <div className="flex items-center text-left">
                            <img src="img/metamask-logo.svg" className="bg-gray-600 rounded aspect-square" width={50} height={50} alt="Metamask" />
                            <span className="ml-4">Metamask</span>
                        </div>
                    </Button>
                    <Button onClick={connectWalletConnect}>
                        <div className="flex items-center text-left">
                            <img src="img/walletconnect-logo.svg" className="bg-gray-600 rounded aspect-square" width={50} height={50} alt="Wallet Connect" />
                            <span className="ml-4">Wallet Connect</span>
                        </div>
                    </Button>
                </div>
            </Modal>

            <Modal show={answerShow} setShow={setAnswerShow}>
                <Answer success={data.success}>
                    {data.answer}
                </Answer>
            </Modal>
        </>
    )
}