import { Link } from "react-router-dom";

function NavBar({ username }) {
    // Render the navigation urls
    const renderNav = () => {
        let urls = [
            { text: "Sign In", url: "/signin" },
            { text: "Sign Up", url: "/signup" },
            { text: "Github", url: "/github" },
        ];
        if (username != null) {
            urls = [
                { text: "Sign Out", url: "/signout" },
                { text: "Github", url: "/github" },
                { text: "Hello, " + username, url: "/" },
            ];
        }
        return urls.map((url) => {
            if (url.text === "Github") {
                return (
                    <a
                        className="p-2 m-auto mx-4 rounded-sm hover:bg-blue-600 hover:text-gray-50"
                        key={url.url}
                        href="https://github.com/saivarshith2000/shrinkurl"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="text-xl">{url.text}</p>
                    </a>
                );
            }
            return (
                <Link
                    className="p-2 m-auto mx-4 rounded-sm hover:bg-blue-600 hover:text-gray-50"
                    key={url.url}
                    to={url.url}
                >
                    <p className="text-xl">{url.text}</p>
                </Link>
            );
        });
    };

    return (
        <div className="relative z-50 p-3 shadow-lg bg-gray-50">
            <div className="flex flex-row justify-between w-2/3 m-auto align-middle">
                <Link
                    to="/"
                    className="p-2 my-auto text-4xl font-bold align-middle bg-blue-600 rounded-sm text-gray-50"
                >
                    <div>ShrinkUrl</div>
                </Link>
                <div className="flex flex-row justify-between align-middle">
                    {renderNav()}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
