import "./header.css"
import React from "react";
import {Navbar, Form, FormControl, Button, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className="header-area">
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand as={Link} className="logoName" to="/">La Ultima página</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/article">Artículos</Nav.Link>
                        <Nav.Link as={Link} to="/About">Sobre mi</Nav.Link>
                        <Nav.Link as={Link} to="" title="Available soon">Tienda</Nav.Link>
                    </Nav>
                    <Form inline className="search">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

