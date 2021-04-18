import React from "react";
import "./about.css";
import videoRead from "../Video/read3.mp4";
import {SectionAbout} from "./SectionAbout";
import {Book} from "./Book";
import {Comments} from "./Comments";
import {Trailers} from "./Trailers";

export function About() {
    return (
        <>
            <div className="container-video">
                <h1 className="about-picture">Pasión por crear</h1>
                <video autoPlay muted loop id="myVideo" preload="none">
                    <source src={videoRead} type="video/mp4"/>
                </video>

            </div>
            <SectionAbout
                key={1}
                title={"Libros publicados"}
                color={"black"}
            />
            <div className="row">
                <Book
                    key={1}
                    img="https://m.media-amazon.com/images/I/41yawGnOVvL.jpg"
                    title="2053 - Los secretos de la muerte quedan revelados."
                />
            </div>
            <Comments/>
            <SectionAbout
            title="Trailers"
            color={"black"}
            />
            <Trailers/>
        </>
    )
}

