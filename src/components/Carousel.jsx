import React from "react";
import {Carousel} from "react-bootstrap";
import {Article} from "./Article";
import "./carousel.css";
import IconNext from "./Icons/next.png";

export function CarouselCards() {
    return (
        <Carousel
            nextIcon={<span><img className="nextIcon" src={IconNext}/></span>}
            prevIcon={<span><img className="prevIcon" src={IconNext}/></span>}>
            <Carousel.Item>
                <div className="row">
                    <Article
                        img={"https://cdn.pixabay.com/photo/2017/05/29/20/56/coffee-2354885_960_720.jpg"}
                        title={"Increibles historias que debes leer"}
                        description={"Libros que no debes perderte este verano."}
                    />
                    <Article
                        img={"https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                        title={"Aventuras que atrapan"}
                        description={"Libros que no podrás parar de leer."}
                    />
                    <Article
                        img={"https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_1280.jpg"}
                        title={"Mejores novelas para este verano"}
                        description={"Apuntate esta lista de libros que tienes que leer."}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="row">
                    <Article
                        img={"https://cdn.pixabay.com/photo/2017/03/23/12/23/vintage-2168174_960_720.jpg"}
                        title={"Técnicas para crear tus propias historias"}
                        description={"Quieres escribir? No te pierdas estos consejos."}
                    />
                    <Article
                        img={"https://cdn.pixabay.com/photo/2018/07/10/10/29/girl-3528292_960_720.jpg"}
                        title={"Lecturas para relajar."}
                        description={"Libros que no podrás parar de leer."}
                    />
                    <Article
                        img={"https://cdn.pixabay.com/photo/2017/12/17/21/44/coffee-3025022_960_720.jpg"}
                        title={"Aventuras que atrapan"}
                        description={"Libros que no podrás parar de leer."}
                    />
                </div>

            </Carousel.Item>
        </Carousel>
    )
}