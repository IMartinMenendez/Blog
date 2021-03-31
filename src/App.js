import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarouselCards} from "./components/Carousel";

function App() {
    return (
        <>
            <Header/>
            <div className="row">
                <CarouselCards/>
            </div>

        </>
    );
}

export default App;
