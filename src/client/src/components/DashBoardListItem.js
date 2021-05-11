function DashBoardListItem({ url, deleteUrl }) {
    const onClick = async (e) => {
        e.preventDefault();
        deleteUrl(url.shorturl)
    };

    return (
        <div className="flex justify-between p-4 pl-8 mt-4 align-middle rounded-md shadow-lg bg-blue-50">
            <div className="flex flex-col">
                <a
                    className="mb-1 text-purple-600"
                    href={url.longurl.slice(
                        0,
                        Math.max(url.longurl.length, 256)
                    )}
                    target="_blank"
                    rel="noreferrer"
                >
                    {url.longurl}
                </a>
                <a
                    className="font-bold text-blue-600 underline"
                    href={url.shorturl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {url.shorturl}
                </a>
            </div>

            <div className="flex align-middle p-auto ">
                <p className="p-2 m-auto mr-4 font-bold text-white bg-green-600 rounded-md">
                    {" "}
                    {url.redirects} clicks
                </p>
                <button
                    onClick={onClick}
                    className="p-2 m-auto font-bold text-white bg-red-600 rounded-md hover:bg-red-800"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default DashBoardListItem;
