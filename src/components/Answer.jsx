export default function Answer({ success, children }) {
    return (
        <>
            <div className={`${success ? "bg-green-800" : "bg-red-800"} rounded p-4 text-white text-center`}>
                <h3 className="text-xl mb-4">
                    {success ? "Congratulations!" : "Something went wrong..."}
                </h3>
                <hr className="border-white mb-4"/>
                <p>{children}</p>
            </div>
        </>
    )
}