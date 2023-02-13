export default function SocialIcons({ twitter, discord }) {
    return <div className="flex justify-center items-center gap-1">
        {twitter !== null ?
            <a href={`https://twitter.com/${twitter}`} target="_blank" className="place-content-center w-8 h-8">
                <img src="img/twitter-logo.svg" className="w-full h-full" alt="Twitter Logo" />
            </a> : <div className="grid place-content-center w-8 h-8 pointer-events-none opacity-50"><img src="img/twitter-logo.svg" className="w-full h-full" alt="Twitter Logo" />
            </div>}

        {discord !== null ?
            <a href={`https://discord.com/${discord}`} target="_blank" className="bg-white rounded-full grid place-content-center w-8 h-8">
                <img src="img/discord-logo.svg" className="w-5 h-5" alt="Discord Logo" />
            </a> : <div className="bg-white rounded-full grid place-content-center w-8 h-8 pointer-events-none opacity-50">
                <img src="img/discord-logo.svg" className="w-5 h-5" alt="Discord Logo" />
            </div>}
    </div>
}