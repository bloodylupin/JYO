import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core";

import { utils } from "ethers";

import Button from "../../../components/Button";
import ParBefore from "../../../components/ParBefore";
import Modal from "../../../components/Modal";
import Answer from "../../../components/Answer";
import LoadIcon from "../../../components/LoadIcon";

export default function MintButton({ contract }) {
    const { chainId, account, activate, deactivate, library } = useWeb3React();

    const [balance, setBalance] = useState("0.0");
    const [loading, setLoading] = useState(false);
    const [minted, setMinted] = useState(0);

    const [data, setData] = useState({ success: undefined, answer: undefined });
    const [show, setShow] = useState(false);

    const mint = async () => {
        setLoading(true);
        try {
            const mint = await contract.mint({ value: utils.parseEther(`${price}`) });

            await mint.wait();

            setData({ success: true, answer: parseInt(supply) + 1 });
            setShow(true);

            setMinted(prevCount => prevCount + 1);
        } catch (err) {
            console.log(err)
            setData({
                success: false, answer: err.message === 'Internal JSON-RPC error.' ?
                    err.data.message.split("=")[2] :
                    err.message.includes("insufficient balance for transfer") ?
                        `Insufficient balance for mint: Price ${price} CRO` :
                        err.message.includes("user rejected transaction") ?
                            "User rejected transaction" :
                            "Please refresh the page or clear the cache!"
            });
            setShow(true);
        }
        setLoading(false);
    }

    const MAX_SUPPLY = 91;

    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        const getBalanceFromProvider = async () => {
            try {
                const BALANCE = Math.floor(
                    (utils.formatEther(await contract.provider.getBalance(account)) * 100)
                ) / 100;
                //console.log('balance: ', BALANCE)
                //console.log('chainId: ', chainId)
                setBalance(() => BALANCE);
            }
            catch (err) {
                console.log(err);
            }
        }
        getBalanceFromProvider();

        return () => {
            setBalance("0.0");
        }
    }, [account, contract, minted]);

    const [price, setPrice] = useState("0.0");

    useEffect(() => {
        if (!contract) return;
        const getPriceFromSmartContract = async () => {
            try {
                const PRICE = utils.formatEther(await contract.mintPrice());
                //console.log('price: ', PRICE)
                setPrice(() => PRICE);
            }
            catch (err) {
                console.log(err);
                //console.log('chainId: ', chainId)
            }
        }
        getPriceFromSmartContract();

        return () => {
            setPrice(false);
        }
    }, [contract, minted]);

    const [supply, setSupply] = useState(0);
    useEffect(() => {
        if (!contract) return;
        //console.log(contract)
        const getSupplyFromSmartContract = async () => {
            try {
                const SUPPLY = (await contract.totalSupply()).toString();
                //console.log('supply: ', SUPPLY)
                setSupply(() => SUPPLY);
            }
            catch (err) {
                console.log(err);
                //console.log('chainId: ', chainId)
            }
        }
        getSupplyFromSmartContract();

        return () => {
            setSupply(0);
        }
    }, [contract, minted]);

    return (
        <>
            <div className="bg-gray-800 rounded shadow-lg shadow-black p-8">
                <ParBefore className="before:content-['Collection']">Jack Yolo Odissey</ParBefore>
                <ParBefore className="before:content-['Price']">{price} CRO</ParBefore>
                <ParBefore className="before:content-['Supply']">{supply} / {MAX_SUPPLY}</ParBefore>
                {loading ?
                    <Button><LoadIcon /></Button> :
                    supply >= MAX_SUPPLY ?
                        <div className="relative before:z-30 before:text-sm before:content-['Thank_You_💖'] before:-rotate-12  before:absolute before:-right-4 before:bg-slate-900 before:lowercase before:rounded before:top-0">
                            <Button className="opacity-50 pointer-events-none">Sold out</Button>
                        </div>
                        :

                        <Button onClick={mint}>Mint</Button>}
                <Modal show={show} setShow={setShow}>
                    <Answer success={data.success}>
                        {data.success ?
                            <>
                                <p className="mb-8">You minted number {data.answer}!</p>
                                <Link to="/collection">
                                    <Button>View Collection</Button>
                                </Link>
                            </> : data.answer}
                    </Answer>
                </Modal>
            </div>
            <div className="bg-gray-800 rounded shadow-lg shadow-black p-8 mb-16">
                <ParBefore className="before:content-['Account']">
                    {`${account[0]}${account[2]}${account[3]}...${account[account.length - 3]}${account[account.length - 2]}${account[account.length - 1]}`}
                </ParBefore>
                <ParBefore className="before:content-['Balance']">{balance} CRO</ParBefore>
                <Button onClick={deactivate}>Disconnect</Button>
            </div>

        </>
    )
}