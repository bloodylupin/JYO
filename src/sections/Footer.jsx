import Logo from "../components/Logo";

export default function Footer() {
    return (
        <>
            <div className="bg-transparent h-[58px]"></div>
            <footer className="py-1 fixed bottom-0 left-0 right-0 z-0 bg-gray-800">
                <div className="container px-4 mx-auto flex items-center justify-between">
                    <a href="/JYO/">
                        <Logo square invert />
                    </a>
                    <h2 className="text-sm">Jack Yolo Odissey © 2022</h2>
                    <div className="flex justify-center items-center gap-1">
                        <a href={`https://twitter.com/JackYoloOdissey`} target="_blank" className="place-content-center w-8 h-8">
                            <img src="img/twitter-logo.svg" className="w-full h-full" alt="Twitter Logo" />
                        </a>
                        <a href={`https://discord.gg/TAjH5MW4A6`} target="_blank" className="bg-white rounded-full grid place-content-center w-8 h-8">
                            <img src="img/discord-logo.svg" className="w-5 h-5" alt="Discord Logo" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}