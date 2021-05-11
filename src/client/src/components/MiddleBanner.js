import { Link } from "react-router-dom";

function MiddleBanner() {
    const urlStyle = "font-bold text-blue-600 underline" 
    return (
        <div className="w-1/2 p-4 m-auto mt-8 rounded-md shadow-lg">
            <p className="p-4 pb-0 text-4xl font-bold text-blue-700">Create a Shrinkurl account</p>
            <p className="p-4 text-xl text-gray-600">
                Short urls created with Shrinkurl without an account <b>expire
                after 24hrs</b>. With a shrinkurl account you can create short urls
                that do not expire. You can also track how many times they are
                used. <Link to="/signin" className={urlStyle}>Sign In</Link> if you already have an account. If
                you don't already have an account,  <Link to="/signup" className={urlStyle}>Sign Up here</Link>.
                You can follow the project on github here - <a className={urlStyle} href="https://github.com/saivarshith2000/shrinkurl" target="_blank" rel="noreferrer">shrinkurl</a>
            </p>
        </div>
    );
}

export default MiddleBanner;
