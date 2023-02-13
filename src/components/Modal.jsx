import { useRef, useLayoutEffect } from "react";
import ReactDom from "react-dom";

import gsap from "gsap";

export default function Modal({ children, show, setShow }) {
    const elRef = useRef(null);
    const elTimelineRef = useRef(null);

    useLayoutEffect(() => {
        if (!show) return;
        elTimelineRef.current = gsap.timeline({ defaults: { duration: .17 } })
            .from(elRef.current.querySelector(".backdrop"), {
                autoAlpha: 0
            })
            .fromTo(elRef.current.querySelector(".content"), {
                autoAlpha: 0,
                scale: 0,
                filter: "blur(50px)"
            }, {
                autoAlpha: 1,
                scale: 1,
                filter: "blur(0px)",
                onReverseComplete: () => setShow(false)
            })

        return () => elTimelineRef.current.kill();
    }, [show]);

    const handleClose = () => {
        elTimelineRef.current.reverse();
    }
    return ReactDom.createPortal(
        <>
            {show ?
                <div className="fixed top-0 bottom-0 left-0 right-0 z-30 font-elite" ref={elRef}>
                    <div className="backdrop fixed top-0 bottom-0 left-0 right-0 bg-black/50 cursor-pointer" onClick={handleClose}></div>
                    <div className="content bg-gray-800 rounded shadow-lg shadow-black p-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {children}
                    </div>
                </div> :
                null}
        </>,
        document.getElementById("portal")
    );
}