import { useState } from "react";
import validUrl from "valid-url";
import axios from "axios";

function Home({ setMessage, username }) {
    const [url, setUrl] = useState("");
    const [shorturl, setShorturl] = useState("");
    const [copied, setCopied] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (shorturl === "") {
            // get shorturl
            await getShortUrl();
            return;
        }
        console.log("copied to clipboard");
        // copy to clipboard
        navigator.clipboard.writeText(shorturl);
        setCopied(true);
        return;
    };

    const getShortUrl = async () => {
        // check if invalid
        if (!validUrl.isUri(url)) {
            setMessage({
                isError: true,
                msg: "Invalid URL. Please check your URL",
            });
            return;
        }
        try {
            let endpoint = "/new/free"
            if (username != null) {
                endpoint = '/new/registered'
            }
            const resp = await axios.post(endpoint, { url });
            console.log(resp.data.shorturl);
            setShorturl(resp.data.shorturl);
        } catch (err) {
            console.log(err);
        }
    };

    const renderUrlInput = () => {
        // if a shorturl is already set, display it instead of input bar
        if (shorturl === "") {
            return (
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-4/5 p-4 text-gray-600 rounded-sm rounded-r-none outline-none font-xl"
                    placeholder="Enter your super long URL ..."
                ></input>
            );
        }
        return (
            <input
                value={shorturl}
                className="w-4/5 p-4 text-gray-600 rounded-sm rounded-r-none outline-none font-xl"
            ></input>
        );
    };

    return (
        <div className>
            <div className="relative z-0 py-12 bg-blue-50">
                <div className="flex flex-col w-2/3 mx-auto my-0 flex-column">
                    <div className="w-full p-16 m-auto mb-0 text-center">
                        <div className="mb-4 text-6xl font-semibold text-gray-800">
                            ShrinkUrl
                        </div>
                        <div className="mb-0 text-xl text-gray-400">
                            A Simple URL shortening tool
                        </div>
                    </div>
                    <div className="flex w-2/3 m-auto my-0">
                        <form
                            onSubmit={onSubmit}
                            className="flex w-full m-auto shadow-lg"
                        >
                            {renderUrlInput()}
                            <button className="w-1/5 p-4 my-auto text-xl font-semibold bg-blue-600 rounded-sm rounded-l-none text-gray-50 hover:bg-blue-800">
                                {shorturl === ""
                                    ? "Shrink"
                                    : copied
                                    ? "Copied"
                                    : "Copy"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
