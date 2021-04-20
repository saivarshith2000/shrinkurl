function Message({ message }) {
    // if msg is null, render nothing
    if (message.msg == null) return <div></div>;
    if (message.isError) {
        // render an error message
        return (
            <div className="w-full p-4 bg-red-300">
                <p className="text-red-800 text-l">{message.msg}</p>
            </div>
        );
    }
    // return success otherwise
    return (
        <div className="p-4 bg-green-300">
            <p className="text-green-800 text-l">{message.msg}</p>
        </div>
    );
}

export default Message;
