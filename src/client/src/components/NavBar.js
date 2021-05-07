import { Link } from "react-router-dom";

function NavBar({ isLoggedIn, username }) {
    // Render the navigation urls
    const renderNav = () => {
        let urls = [
            { text: "Sign In", url: "/signin" },
            { text: "Sign Up", url: "/signup" },
            { text: "About", url: "/about" },
        ];
        if (isLoggedIn) {
            urls = [
                { text: "Logout", url: "/signout" },
                { text: "About", url: "/about" },
                { text: "Hello, " + username, url: "/" },
            ];
        }
        return urls.map((url) => (
            <Link
                className="p-2 m-auto mx-4 rounded-sm hover:bg-blue-600 hover:text-gray-50"
                key={url.url}
                to={url.url}
            >
                <p className="text-xl">{url.text}</p>
            </Link>
        ));
    };

    return (
        <div className="relative z-50 p-2 shadow-lg bg-gray-50">
            <div className="flex flex-row justify-between w-2/3 m-auto align-middle">
                <div className="p-2 my-auto text-4xl font-bold align-middle bg-blue-600 rounded-sm text-gray-50">
                    <Link to="/">ShrinkUrl</Link>
                </div>
                <div className="flex flex-row justify-between align-middle">
                    {renderNav()}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
