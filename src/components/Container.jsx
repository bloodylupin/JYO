import { forwardRef } from "react";

const Container = ({ children, className = "", start, evenly }, ref) => {
    return (
        <>
            <div ref={ref} className={`container min-h-screen px-4 mx-auto flex flex-col items-center text-center gap-4 ${start ? "justify-start" : evenly ? "justify-evenly" : "justify-center"} ${className}`}>
                {children}
            </div>
        </>
    )
}

export default forwardRef(Container)