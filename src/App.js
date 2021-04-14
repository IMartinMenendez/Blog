import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "./components/Footer";
import {Home} from "./components/Blog/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {About} from "./components/About page/About";
import {ArticlePage} from "./components/Article Page/ArticlePage";
import {Compose} from "./components/Compose/Compose";
import {ArticleAll} from "./components/Blog/ArticleAll";
import {Newsletter} from "./components/Blog/Newsletter";

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Article/" component={ArticleAll}/>
                <Route exact path="/Article/:id" component={ArticlePage}/>
                <Route exact path="/Compose" component={Compose}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/newsletter" component={Newsletter}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;
