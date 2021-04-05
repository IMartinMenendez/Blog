import "./header.css"
import React from "react";
import {Navbar, Form, FormControl, Button, Nav} from "react-bootstrap";

export function Header() {
    return (
        <div className="header-area">
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Brand className="logoName" href="/">La Ultima página</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/article">Artículos</Nav.Link>
                        <Nav.Link href="/About">Sobre mi</Nav.Link>
                        <Nav.Link href="" title="Available soon">Tienda</Nav.Link>
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

