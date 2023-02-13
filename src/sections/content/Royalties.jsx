import { useState, useEffect } from "react";

import { useWeb3React } from "@web3-react/core";

import { utils } from "ethers";

import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";
import ParBefore from "../../components/ParBefore";
import Modal from "../../components/Modal";
import Answer from "../../components/Answer";

import ConnectButton from "../../components/ConnectButton";
import LoadIcon from "../../components/LoadIcon";

import useWebP from "../../components/utilities/useWebP";

export default function Royalties({ contract }) {
    const { active, account, deactivate } = useWeb3React();

    const [totalRoyalties, setTotalRoyalties] = useState(0);
    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        (async () => {
            try {
                setTotalRoyalties((utils.formatEther(await contract.totalRoyalties())));
            } catch (err) {
                console.log(err);
            }
        })();
    }, [account, contract]);

    const [royalties, setRoyalties] = useState(0);
    const [claimed, setClaimed] = useState(0);
    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        const getRoyalties = async () => {
            try {
                const royalty = Math.floor(utils.formatEther(await contract.getRoyalties()) * 100) / 100;
                setRoyalties(() => royalty);
            } catch (err) {
                console.log(err)
            }
        }
        getRoyalties();
        return () => setRoyalties(0);
    }, [account, contract, claimed]);

    const [nftBalance, setNftBalance] = useState("0");

    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        const getNftBalanceFromContract = async () => {
            try {
                const bal = (await contract.tokensOfWallet(account)).map(id => id.toNumber());
                setNftBalance(() => bal.length);
            } catch (err) {
                console.log(err);
            }
        }
        getNftBalanceFromContract();
        return () => setNftBalance(0);
    }, [account, contract]);


    const [balance, setBalance] = useState(0);

    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        const getBalanceFromProvider = async () => {
            try {
                const BALANCE = Math.floor(
                    (utils.formatEther(await contract.provider.getBalance(account)) * 100)
                ) / 100;
                //console.log('balance: ', BALANCE)
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
    }, [account, contract, claimed]);

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({ success: undefined, answer: undefined });
    const [show, setShow] = useState(false);

    const claimRoyalties = async () => {
        setLoading(true);
        try {
            const claim = await contract.claimAllRoyalties();
            await claim.wait();
            setData({ success: true, answer: "Royalties claimed!" });
            setShow(true);
            setClaimed(prevClaimed => prevClaimed + 1);
        } catch (err) {
            setData({
                success: false, answer: err.message.includes("user rejected transaction") ?
                    "User rejected transaction!" :
                    "Please refresh the page or clear the cache!"
            });
            setShow(true);
            //console.log(err)
        }
        setLoading(false);
    }

    const wps = useWebP();

    return (
        <>
            <section className={`${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none`}>
                <Container evenly>
                    <Title>Royalties</Title>
                    {!active ?
                        <ConnectButton /> :
                        <>
                            <div className="bg-gray-800 rounded shadow-lg shadow-black p-8">
                                <ParBefore className="before:content-['NFT']">You own {nftBalance} NFT</ParBefore>
                                <ParBefore className="before:content-['Royalties']">
                                    {royalties} CRO
                                </ParBefore>
                                <ParBefore className="before:content-['Total_shared']">{totalRoyalties} CRO</ParBefore>
                                {loading ?
                                    <Button><LoadIcon /></Button> :
                                    <Button onClick={claimRoyalties} className={`${royalties > 0 ? "" : "opacity-50 pointer-events-none"}`}>Claim</Button>}
                            </div>
                            <div className="bg-gray-800 rounded shadow-lg shadow-black p-8 mb-16">
                                <ParBefore className="before:content-['Account']">
                                    {`${account[0]}${account[2]}${account[3]}...${account[account.length - 3]}${account[account.length - 2]}${account[account.length - 1]}`}
                                </ParBefore>
                                <ParBefore className="before:content-['Balance']">{balance} CRO</ParBefore>
                                <Button onClick={deactivate}>Disconnect</Button>
                            </div>
                            <Modal show={show} setShow={setShow}>
                                <Answer success={data.success}>
                                    {data.answer}
                                </Answer>
                            </Modal>
                        </>

                    }
                </Container>
            </section>
        </>
    );
}