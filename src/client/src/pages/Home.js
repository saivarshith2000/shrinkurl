import { useState } from "react";
import validUrl from "valid-url";
import axios from "axios";

import DashBoard from "../components/DashBoard";
import MiddleBanner from "../components/MiddleBanner";

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
        // copy to clipboard
        // NOTE: this method only works on https.
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
            let endpoint = "/new/free";
            if (username != null) {
                endpoint = "/new/registered";
            }
            const resp = await axios.post(endpoint, { url });
            setShorturl(resp.data.shorturl);
        } catch (err) {
            setMessage({isError: true, msg: "An error occured while trying to generate shorturl"})
        }
    };

    const renderMiddleSection = () => {
        if (username != null) {
            return <DashBoard username={username} setMessage={setMessage}/>;
        }
        return <MiddleBanner/>
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
        <div>
            <div className="relative z-0 pb-4 bg-blue-50">
                <div className="flex flex-col w-2/3 mx-auto my-0 flex-column">
                    <div className="w-full m-auto mt-10 text-xl text-center text-gray-600">
                        A simple url shrinking service. Shrink your urls
                        instantly !!!
                    </div>
                    <div className="flex w-2/3 m-auto my-6">
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
            {/* middle section */}
            <div>{renderMiddleSection()}</div>
        </div>
    );
}

export default Home;
