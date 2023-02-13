import { useState, useEffect } from "react";

import { useWeb3React } from "@web3-react/core";

import { utils } from "ethers";

import Container from "../../components/Container";
import Title from "../../components/Title";
import ConnectButton from "../../components/ConnectButton";

import Nft from "./collection/Nft";

export default function Collection({ contract }) {
    const { active, account } = useWeb3React();

    const [uri, setUri] = useState([]);

    useEffect(() => {
        if (!account) return;
        if (!contract) return;
        const getUri = async () => {
            try {
                const idArray = (await contract.tokensOfWallet(account)).map(id => id.toNumber());
                const tempUri = await contract.tokenURI(1);
                const uriArray = idArray.map(id => `https://ipfs.io/ipfs/${tempUri.split("/")[2]}/${id}`);
                setUri(() => uriArray);
            } catch (err) {
                console.log(err);
            }
        }
        getUri();
        //console.log(uri)
        return () => setUri([]);
    }, [account, contract]);

    return (
        <>
            <section className="bg-bg bg-cover lg:bg-none">
                <Container evenly>
                    <Title>Collection</Title>
                    {!active ?
                        <ConnectButton /> :
                        <>
                            {
                                uri.length ?
                                    <div className="py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {uri.map(singleUri => <Nft key={singleUri} uri={singleUri} />)}
                                    </div> :
                                    <div className="py-4">
                                        <p>You don't own any Jack Yolo Odissey NFT.</p>
                                    </div>
                            }
                        </>
                    }
                </Container>
            </section>
        </>
    );
}