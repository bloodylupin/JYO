import { useWeb3React } from "@web3-react/core";

import Container from "../../components/Container";
import Title from "../../components/Title";
import ConnectButton from "../../components/ConnectButton";

import MintButton from "./mint/MintButton";

import useWebP from "../../components/utilities/useWebP";

export default function Mint({ contract }) {
    const { active } = useWeb3React();

    const wps = useWebP();

    return (
        <>
            <section className={`${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none`}>
                <Container evenly>
                    <Title>Mint</Title>
                    {!active ?
                        <ConnectButton /> :
                        <MintButton contract={contract} />
                    }
                </Container>
            </section>
        </>
    );
}