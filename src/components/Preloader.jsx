import { useState, useRef, useLayoutEffect } from "react";

import gsap from "gsap";

import Logo from "./Logo";

export default function Preloader() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    const elRef = useRef(null);
    useLayoutEffect(() => {
        const to = gsap.to(elRef.current, {
            duration: 1,
            autoAlpha: 0,
            onComplete: () => setIsLoaded(() => true)
        });
        return () => to.kill();
    }, []);

    return (
        <>
            {!isLoaded ?
                <div ref={elRef} className="fixed top-0 bottom-0 left-0 right-0 bg-black z-50 grid place-content-center">
                    <div className="animate-ping">
                        <Logo square invert />
                    </div>
                </div> :
                null}
        </>
    )
}