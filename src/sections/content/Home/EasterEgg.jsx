import Logo from "../../../components/Logo";
import Video from "../../../components/Video";

export default function EasterEgg() {
    return (
        <>
            <div className="relative">
                <Video src="vid/jack_yolo_odissey-video.mp4" poster="img/jack_yolo-logo-solid.png" className="relative mb-4 fadeInBlock" />
            </div>
            <p className="fadeIn my-4">Become parte of the community and be insta-rewarded!</p>
            <div className="fadeIn p-4 mb-16 rounded-full">
                <Logo square invert />
            </div>
        </>
    )
}


{/*
    const [count, setCount] = useState(0);
    useEffect(() => {
        const isEasterEgg = count === 4;
        let chosenColor;
        switch (count) {
            case 1: chosenColor = "red";
                break;
            case 2: chosenColor = "green";
                break;
            case 3: chosenColor = "blue";
                break;
            default: chosenColor = null;
                break;
        }
        setLogoColor(chosenColor);
        if (!isEasterEgg) return;
        timelineVideoRef.current.play();
        return () => setCount(0);
    }, [count]);

    const imgSrc = "img/essegg-JYO";

    const [show, setShow] = useState(false);

    const [logoColor, setLogoColor] = useState(null);*/
    
    
    /*style={{ backgroundColor: logoColor }} ref={containerRef} onClick={() => {
                timelineButtRef.current.play(0);
                setCount(prevCount => prevCount + 1);
            }}*/



        /*                <Modal show={show} setShow={setShow}>
                    <Answer success="true">
                        You found an "easter egg", come on Discord, open a ticket and say "easter egg"!
                    </Answer>
        </Modal>
    
    
    
    <picture onClick={() => setShow(true)}>
                    <source srcSet={`${imgSrc}.webp`} type="image/webp" />
                    <source srcSet={`${imgSrc}.jpg`} type="image/jpeg" />
                    <img src={`${imgSrc}.jpg`} className="absolute top-0 rounded -z-10 cursor-pointer" alt="seek" />
                </picture>*/}