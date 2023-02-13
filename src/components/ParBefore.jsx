export default function ParBefore({ children, className }) {

    return (<>
        <p className={`relative text-sm md:text-xl before:text-xs lg:before:text-base border border-white px-2 py-2 lg:px-4 mb-4 lg:py-4 before:absolute before:bg-gray-800 before:-top-[7px] lg:before:-top-3 before:left-1/2 before:-translate-x-1/2 ${className}`}>
            {children}
        </p>
    </>)

}