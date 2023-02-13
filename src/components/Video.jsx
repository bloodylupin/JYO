export default function Video({ src, poster, className = "" }) {
    return <video src={src} muted autoPlay loop playsInline poster={poster} className={`w-64 h-96 pointer-events-none rounded ${className}`}>
        <source src={src} type="video/mp4"></source>
    </video>
}