import { useEffect, useState } from "react";
import axios from "axios";
import DashBoardListItem from "./DashBoardListItem";

function DashBoard({ username }) {
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

    const renderUrls = () => {
        console.log(urls)
        return urls.map((url) => {
            return <DashBoardListItem url={url} key={url.longurl} />;
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
