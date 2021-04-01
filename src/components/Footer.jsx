import React from "react";
import "./footer.css";
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import IconFacebook from "./Icons/facebook.png";
import IconInstagram from "./Icons/instagram.png";
import IconYoutube from "./Icons/youtube.png";

export function Footer() {
    return (

        <div className="footer row">
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>About us</h3>
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using 'Content here, content here', making it look like
                  </p>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>Únete a la Newsletter</h3>
                <p>Estarás actualizado de las últimas novedades.</p>
                <Form inline className="email">
                    <FormControl type="email" placeholder="Email" className="mr-sm-2"/>
                    <Button variant="light">Send</Button>
                </Form>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
                <h3>Siguenos</h3>
                <p>Para estar siempre conectado.</p>
                <div className="iconsFooter">
                    <i className="logoFooter"><img src={IconFacebook} className="icons" alt="icons"/></i>
                    <i className="logoFooter"><img src={IconInstagram} className="icons" alt="icons"/></i>
                    <i className="logoFooter"><img src={IconYoutube} className="icons" alt="icons"/></i>
                </div>
            </div>

            <div className="row">
                <p>Made with ♥️ by Irene Martin</p>
            </div>

        </div>
    )
}