import { NavLink } from "react-router-dom";

import Logo from "../components/Logo";

export default function Header() {
    return (
        <>
            <header className="py-4 bg-gray-600/25 sticky bottom-0 left-0 right-0 z-50 hover:bg-gray-600 transition duration-300">
                <div className="container px-4 mx-auto flex justify-between items-center gap-4">
                    <a href="/JYO/">
                        <Logo invert />
                    </a>
                    <nav>
                        <ul className="flex gap-4">
                            <li className="text-center">
                                <NavLink className="transition hover:grayscale-0" to="/"><span>🏠</span><span className="hidden lg:block">Home</span></NavLink>
                            </li>

                            <li className="text-center">
                                <NavLink className="transition hover:grayscale-0" to="/mint"><span>🪄</span><span className="hidden lg:block">Mint</span></NavLink>
                            </li>
                            <li className="text-center">
                                <NavLink className="transition hover:grayscale-0" to="/royalties"><span>💲</span><span className="hidden lg:block">Royalties</span></NavLink>
                            </li>
                            <li className="text-center">
                                <NavLink className="transition hover:grayscale-0" to="/collection"><span>🖼️</span><span className="hidden lg:block">Collection</span></NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}