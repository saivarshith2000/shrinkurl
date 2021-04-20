import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
