import { useState, useRef, useLayoutEffect } from "react";

import gsap from "gsap";

import Button from "../../../components/Button";

export default function FaqItem({ question, answer }, key) {
    const [show, setShow] = useState(false);
    const elRef = useRef(null);
    const elTimelineRef = useRef(null);

    useLayoutEffect(() => {
        elTimelineRef.current = gsap.timeline({ paused: true, defaults: { duration: .15 } })
            .to(elRef.current.querySelector("button"), {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderBottom: "1px solid #1f2937"
            })
            .fromTo(elRef.current.querySelector("p"), {
                height: 0,
                autoAlpha: 0,
                scale: 0
            }, {
                height: "max-content",
                autoAlpha: 1,
                scale: 1,
                onStart: () => elRef.current.querySelector("p").classList.add("p-4", "pb-3"),
                onComplete: () => setShow(() => true),
                onReverseComplete: () => {
                    setShow(() => false);
                    elRef.current.querySelector("p").classList.remove("p-4", "pb-3");
                }
            });
        return () => elTimelineRef.current.kill();
    }, []);
    return (
        <div className="bg-gray-600 p-4 rounded cursor-pointer" ref={elRef} key={key} onClick={() => {
            !show ? elTimelineRef.current.play() : elTimelineRef.current.reverse();
        }}>
            <Button left className="w-full p-4 pb-3 shadow-lg shadow-black rounded flex items-center gap-2"><span>👉</span> {question}</Button>
            <p className="bg-teal-600 rounded-b">
                {answer}
            </p>
        </div>
    )
}