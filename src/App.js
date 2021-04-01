import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarouselCards} from "./components/Carousel";
import {Section} from "./components/Section";

function App() {
    return (
        <>
            <Header/>
            <div className="row">
                <Section
                title={"Artículos más leídos"}
                />
            </div>
                <CarouselCards/>
        </>
    );
}

export default App;
