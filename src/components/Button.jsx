import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

export default function Button({ children, className = "", onClick = () => { }, left }) {
    const elRef = useRef(null);
    const tlRef = useRef(null);

    useLayoutEffect(() => {
        tlRef.current = gsap.timeline({ paused: true }).fromTo(elRef.current, {
            boxShadow: "inset 0 0 0 #000"
        }, {
            duration: .1,
            boxShadow: "inset 0 0 5px #000"
        });
        return () => tlRef.current.kill();
    }, []);

    return <button className={`p-4 text-white uppercase rounded block bg-gradient-to-br from-orange-700 to-orange-800 mx-auto ${left ? "text-left" : "text-center"} w-64 ${className}`} onClick={onClick} ref={elRef} onMouseDown={() => tlRef.current.play()} onMouseUp={() => tlRef.current.reverse()} onMouseLeave={() => { tlRef.current.reverse() }} onTouchStart={() => tlRef.current.play()} onTouchEnd={() => tlRef.current.reverse()}>
        {children}
    </button>
}