import React from "react";
import "./footer.css";
import {Button, Form, FormControl} from "react-bootstrap";
import IconFacebook from "./Icons/facebook.png";
import IconInstagram from "./Icons/instagram.png";
import IconYoutube from "./Icons/youtube.png";

export function Footer() {
    return (

        <div className="footer row">
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>Sobre mi</h3>
                <p>Soñadora incansable. Lectora boraz de novelas y libros de todo tipo. Escritora. Si te apasiona la
                    lectura este es tú sitio, donde compartiré opiniones de mis lecturas favoritas, libros interesantes
                    y consejos de escritura. ¿Suena bien?
                </p>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>Únete a la Newsletter</h3>
                <p>Estarás actualizado de las últimas novedades.</p>
                <Form action='https://immense-forest-00374.herokuapp.com/' method="post" inline
                      className="email-footer">
                    <FormControl name="email" type="email" placeholder="Email" className="mr-sm-2"/>
                    <Button type="submit" variant="light">Send</Button>
                </Form>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>Siguenos</h3>
                <p>Para estar siempre conectado.</p>
                <div className="iconsFooter">
                    <a href="https://www.facebook.com/Irene-Mart%C3%ADn-Libros-101493418043197"
                       className="logoFooter"><img src={IconFacebook} className="icons" alt="icons"/></a>
                    <a href="https://www.instagram.com/irene_mmenendez/" className="logoFooter"><img src={IconInstagram}
                                                                                                     className="icons"
                                                                                                     alt="icons"/></a>
                    <a href="https://www.youtube.com" className="logoFooter"><img src={IconYoutube} className="icons"
                                                                                  alt="icons"/></a>
                </div>
            </div>

            <div className="row">
                <p>Made with ♥️ by <a className="linkPortfolio"
                                      href={"https://imartinmenendez.github.io/portfolio/?#home"}>Irene Martin</a></p>
            </div>

        </div>
    )
}