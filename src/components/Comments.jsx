import React from "react";
import {SectionAbout} from "./SectionAbout";
import "./Comments.css";

export function Comments() {
    return (
        <div className="comments">
            <SectionAbout
                title="Lectores Opinan"
                color="white"
            />
            <div className="row">
                <div className="comment col-lg-3">
                    <h1>”</h1>
                    <h2>Me ha encantado! Terminé de leerlo ayer y todavía hoy sigo sorprendida con el final, un final
                        magistral! Además envía un mensaje que, considero, cualquier persona debería leer, para tomar
                        conciencia de la importancia del cuidado de nuestra madre tierra. Lo recomiendo sin duda!</h2>

                </div>
                <div className="comment col-lg-3">
                    <h1>”</h1>
                    <h2>Te engancha desde el primer capítulo. Mantiene la tensión hasta la última página. Todo esto con
                        un mensaje de fondo excepcional.
                        Me encantó.</h2>

                </div>
                <div className=" comment col-lg-3">
                    <h1>”</h1>
                    <h2>Acabo de acabar el libro y me ha encantado! Es una historia que sin duda no te deja indiferente,
                        me siento conmovida. Muy original argumento y muy bien llevado a cabo. Es desde luego un libro
                        con el que disfrutar leyendo.</h2>

                </div>
            </div>


        </div>

    )

}