import './App.css';
import React from "react";
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarouselCards} from "./components/Carousel";
import {Section} from "./components/Section";
import {CardArticle} from "./components/CardArticler";
import {Pagination} from "./components/Pagination";
import {Footer} from "./components/Footer";

function App() {
    return (
        <>
            <Header/>
            <Section
                title={"Artículos más leídos"}
            />
            <CarouselCards/>
            <Section
                title={"Todos los artículos"}/>
            <div className="row">
                <CardArticle
                    img={"https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_1280.jpg"}
                    title={"Novelas más leidas"}
                    description={"Descubre las novelas más leidas de la historia."}
                />
                <CardArticle
                    img={"https://cdn.pixabay.com/photo/2016/11/18/16/56/adult-1835799_1280.jpg"}
                    title={"Consejos para leer mucho más"}
                    description={"Quieres ser un gran lector? No te pierdas estos consejos."}
                />
                <CardArticle
                    img={"https://cdn.pixabay.com/photo/2015/09/18/11/37/woman-945427_1280.jpg"}
                    title={"Leer en cualquier parte"}
                    description={"Quieres ser un gran lector? No te pierdas estos consejos."}
                />
            </div>
            <Pagination/>
            <Footer/>
        </>
    )
}

export default App;
