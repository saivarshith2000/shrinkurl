import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignOut({ setUsername, setMessage }) {
    const history = useHistory();
    // make a call to /auth/signout to clear auth cookie
    useEffect(() => {
        const signout = async () => {
            try {
                await axios.post("/auth/signout", {});
                setUsername(null);
            } catch (err) {
                setMessage({ isError: true, msg: "Unable to Sign out at the moment. Error contacting auth service. Please try later." });
                history.push("/");
            }
        };
        signout();
        history.push("/");
    }, []);
    return <div></div>;
}

export default SignOut;
