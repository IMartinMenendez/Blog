import "./header.css"
import React, {useState} from "react";
import {Navbar, Nav, Modal} from "react-bootstrap";
import { Link } from 'react-router-dom';



export function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="header-area">
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand as={Link} className="logoName" to="/">La Ultima página</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/article">Artículos</Nav.Link>
                        <Nav.Link as={Link} to="/About">Sobre mi</Nav.Link>
                        <Nav.Link onClick={handleShow} as={Link} to="">Tienda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Disponible muy pronto!</Modal.Title>
                </Modal.Header>
            </Modal>
        </div>
    );
}

