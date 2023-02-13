import { useState, useEffect } from "react";

import Modal from "../../../components/Modal";

export default function Nft({ uri }) {
    const [metadata, setMetadata] = useState({ name: "", gatewayImage: "" });
    const [show, setShow] = useState(false);

    useEffect(() => {
        const getMetadata = async () => {
            try {
                const singleMetadata = await fetch(uri)
                    .then(resp => resp.json())
                    .then(data => data)
                    .catch(err => console.log(err));
                const gatewayImage = `https://ipfs.io/ipfs/${singleMetadata.image.split("/")[2]}/${singleMetadata.image.split("/")[3]}`;
                setMetadata({ ...singleMetadata, gatewayImage });
            } catch (err) {
                console.log(err)
            }
        }
        getMetadata();
    }, []);

    return (
        <>
            <figure className="relative aspect-[853/1280] cursor-pointer" onClick={() => setShow(() => true)}>
                <img src="img/placeholder.png" alt="" className="rounded absolute animate-pulse bg-gray-400/50 shadow-lg shadow-black" />
                <img src={metadata.gatewayImage} className="rounded shadow-lg shadow-black relative" alt={metadata.name} />
                <figcaption className="text-xs lg:text-base absolute p-4 bottom-0 bg-gray-400/50 right-0 rounded-tl rounded-br text-center">#{metadata.name.split("#")[1]}</figcaption>
            </figure>
            <Modal show={show} setShow={setShow}>
                <figure className="relative aspect-[853/1280] min-w-[240px] max-h-[640px]">
                    <a href={metadata.gatewayImage} target="_blank" className="block">
                        <img src="img/placeholder.png" alt="" className="rounded absolute animate-pulse bg-gray-400/50 shadow-lg shadow-black z-0" />
                        <img src={metadata.gatewayImage} className="rounded shadow-lg shadow-black relative" alt={metadata.name} />
                        <figcaption className="text-xs lg:text-base absolute p-4 bottom-0 bg-gray-400/50 right-0 rounded-tl rounded-br text-center">#{metadata.name.split("#")[1]}</figcaption>
                    </a>
                </figure>
            </Modal>
        </>
    )
}