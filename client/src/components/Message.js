function Message({ message }) {
    // if msg is null, render nothing
    if (message.msg == null) return <div></div>;
    if (message.isError) {
        // render an error message
        return (
            <div className="w-full p-2 text-center bg-red-300">
                <p className="font-bold text-red-800 text-l">{message.msg}</p>
            </div>
        );
    }
    // return success otherwise
    return (
        <div className="w-full p-2 text-center bg-green-300">
            <p className="font-bold text-green-800 text-l">{message.msg}</p>
        </div>
    );
}

export default Message;
