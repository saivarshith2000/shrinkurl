import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// import pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";

// import common components
import Message from "./components/Message";
import NavBar from "./components/NavBar";

function App() {
    const [message, setMessage] = useState({ isError: false, msg: null });
    const [username, setUsername] = useState(null);

    // verify that use is authenticated. Send an empty post request to /auth/refresh.
    // if successful, a new token is set in cookie and username is returned, isLoggedIn becomes true
    // if failed, the loggedIn state is set for false.
    // empty array is passed as dependency for useEffect(). So, the function is called only once after
    // the initial render. This might cause a flicker for some components. But it should be massively
    // noticable. The components that re-render would be the navbar and dashboard component.
    useEffect(() => {
        // can't directly fetch here. It is an async function so, it can cause
        // race condition. So, define a function and call it instead.
        const refreshAuth = async () => {
            if (username != null) {
                // if user is already logged in, don't do anything. This case occurs when the user
                // redirects to the root route while the client session is already initialised
                return;
            }
            try {
                const resp = await axios.post("/auth/refresh", {});
                // the client is logged in. Store username in state
                setUsername(resp.data.username);
            } catch (err) {
                if (err.response && err.response.status === 400) {
                    // the client does not have the auth_token cookie -> user not signed in
                    setUsername(null);
                }
                console.log(err);
                setUsername(null);
            }
        };
        refreshAuth();
    }, []);

    return (
        <Router>
            <NavBar username={username} />
            <Message message={message} />
            <Switch>
                <Route path="/signin">
                    <SignIn setUsername={setUsername} setMessage={setMessage} />
                </Route>
                <Route path="/signup">
                    <SignUp setMessage={setMessage} />
                </Route>
                <Route path="/signout">
                    <SignOut setUsername={setUsername} setMessage={setMessage}/>
                </Route>
                <Route path="/" >
                    <Home setMessage={setMessage} username={username}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
