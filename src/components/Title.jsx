import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Title({ children }) {
    const titleRef = useRef(null);
    const titleTlRef = useRef(null);
    useLayoutEffect(() => {
        titleTlRef.current = gsap.timeline().fromTo(titleRef.current, {
            autoAlpha: 0,
            scale: 0,
            filter: "blur(50px)",
            rotate: -360
        }, {
            duration: .7,
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            rotate: 0
        })
        return () => titleTlRef.current.kill();
    }, []);
    return <h1 style={{textShadow: "1px -1px 5px #000"}} ref={titleRef} className="mt-4">{children}</h1>
}