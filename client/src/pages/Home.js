import NavBar from "../components/NavBar";

function Home() {
    return (
        <div className>
            <NavBar />
            <div className="relative z-0 py-16 pt-16 bg-blue-50">
                <div className="flex flex-col w-2/3 mx-auto my-0 flex-column">
                    <div className="w-full p-16 m-auto mb-0 text-center">
                        <div className="mb-4 text-4xl font-semibold text-gray-800">
                            ShrinkUrl
                        </div>
                        <div className="mb-0 text-xl text-gray-500">
                            A Simple URL shortening tool
                        </div>
                    </div>
                    <div className="flex w-2/3 m-auto my-0">
                        <div className="flex w-full m-auto shadow-lg">
                            <input
                                className="w-4/5 p-4 rounded-sm rounded-r-none outline-none font-xl"
                                placeholder="Enter your URL"
                            ></input>
                            <button className="w-1/5 p-4 my-auto text-xl font-semibold bg-blue-600 rounded-sm rounded-l-none text-gray-50 hover:bg-blue-800">
                                Shrink
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
