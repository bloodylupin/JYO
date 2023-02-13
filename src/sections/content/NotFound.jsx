import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Title from "../../components/Title";
import Button from "../../components/Button";

import useWebP from "../../components/utilities/useWebP";

export default function NotFound() {

    const wps = useWebP();

    return (
        <>
            <section className={`py-4 ${wps ? "bg-bg-webp" : "bg-bg"} bg-cover lg:bg-none`}>
                <Container evenly>
                    <Title>404 - Page not found</Title>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </Container>
            </section>

        </>
    )
}