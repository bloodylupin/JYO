import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useWeb3React } from "@web3-react/core";

import { Contract, providers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../components/utilities/jackyoloodissey-solidity_data";


import Home from "./content/Home";
import Mint from "./content/Mint";
import Collection from "./content/Collection";
import Royalties from "./content/Royalties";
import NotFound from "./content/NotFound";

export default function Content() {

    const { library } = useWeb3React();

    const [contract, setContract] = useState(false);

    useEffect(() => {
        if (!library) return;
        const getContract = async () => {
            try {
                const provider = await library.provider;
                const web3Provider = new providers.Web3Provider(provider);
                const signer = web3Provider.getSigner();

                const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
                setContract(contract);
            } catch (err) {
                console.log(err)
            }
        }
        getContract();
        return () => setContract(false);
    }, [library]);

    return (
        <>
            <main className="bg-gray-800 lg:bg-bg bg-cover lg:bg-fixed relative z-10 overflow-x-hidden">
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />

                    <Route path="/mint" element={<Mint contract={contract} />} />
                    <Route path="/royalties" element={<Royalties contract={contract} />} />
                    <Route path="/collection" element={<Collection contract={contract} />} />

                </Routes>
            </main>
        </>
    )
}