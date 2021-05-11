import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardListItem from "./DashBoardListItem";

function DashBoard({ username, setMessage }) {
    const [urls, setUrls] = useState([]);
    useEffect(() => {
        // this case should not arise generally
        if (username === null) {
            return;
        }
        // get urls from shrink service. The userid is embedded in auth_token
        const getUrls = async () => {
            try {
                const resp = await axios.post("/getRegisteredUrls");
                console.log(resp.data.data);
                setUrls(resp.data.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUrls();
    }, []);

    const deleteUrl = async (shorturl) => {
        try {
            await axios.post("/deleteUrl", { shorturl });
            setUrls(urls.filter((url) => url.shorturl !== shorturl));
            setMessage({ isError: false, msg: "Deleted Url" });
        } catch (err) {
            console.log(err);
            setMessage({
                isError: true,
                msg: "Failed to delete url. Please try again later",
            });
        }
    };

    const renderUrls = () => {
        if (urls.length === 0) {
            return (
                <div className="p-8 m-auto mt-8 text-lg font-bold text-blue-600 rounded-md shadow-md bg-blue-50">
                    You haven't shrunk any urls yet
                </div>
            );
        }
        return urls.map((url) => {
            return <DashBoardListItem url={url} key={url.longurl} deleteUrl={deleteUrl} />;
        });
    };
    return (
        <div className="w-1/2 pt-4 m-auto">
            <div className="text-3xl font-bold">Your shrunk URLs</div>
            <div>{renderUrls()}</div>
        </div>
    );
}

export default DashBoard;
