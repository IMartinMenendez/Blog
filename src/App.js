import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "./components/Footer";
import {Home} from "./components/Blog/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About} from "./components/About page/About";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/About">
                    <About/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;
