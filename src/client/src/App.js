import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

// import common components
import Message from "./components/Message";
import NavBar from "./components/NavBar";

function App() {
    const [message, setMessage] = useState({ isError: false, msg: null });
    return (
        <Router>
            <NavBar />
            <Message message={message} />
            <Switch>
                <Route path="/signin">
                    <SignIn setMessage={setMessage} />
                </Route>
                <Route path="/signup">
                    <SignUp setMessage={setMessage} />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home setMessage={setMessage} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
