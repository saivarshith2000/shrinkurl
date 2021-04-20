import { useState } from "react";
import validUrl from "valid-url";

function Home({ setMessage }) {
    const [url, setUrl] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        // check if invalid
        if (!validUrl.isUri(url)) {
            setMessage({
                isError: true,
                msg: "Invalid URL. Please check your URL",
            });
            return;
        }
        console.log(url);
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
                            <input
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-4/5 p-4 text-gray-600 rounded-sm rounded-r-none outline-none font-xl"
                                placeholder="Enter your super long URL ..."
                            ></input>
                            <button className="w-1/5 p-4 my-auto text-xl font-semibold bg-blue-600 rounded-sm rounded-l-none text-gray-50 hover:bg-blue-800">
                                Shrink
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
