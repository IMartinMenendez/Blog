import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Article} from "./components/Article";

function App() {
    return (
        <>
            <Header/>
            <div className="row">
            <Article/>
            <Article/>?
            </div>
        </>
    );
}

export default App;
