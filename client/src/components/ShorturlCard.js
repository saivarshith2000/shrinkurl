import { useState } from "react";

function ShorturlCard({ shorturl }) {
    const [copied, setCopied] = useState(false);

    const CopyUrl = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(shorturl);
        setCopied(true);
    };

    return (
        <div className="flex px-8 py-2 m-auto mt-8 text-center align-middle bg-blue-200 rounded-sm shadow-lg">
            <p className="pr-8 m-auto text-gray-800">
                <a
                    href={shorturl}
                    className="text-lg font-bold"
                    target="_blank"
                >
                    {shorturl}
                </a>
            </p>
            <button
                onClick={(e) => CopyUrl(e)}
                className="p-2 m-auto text-sm font-bold text-white bg-blue-400 rounded-sm"
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}

export default ShorturlCard;
