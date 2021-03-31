import "./header.css"
import React from "react";
import {Navbar, Form, FormControl, Button, Nav} from "react-bootstrap";

export function Header() {
return(
    <div className="header-area">
        <Navbar bg="light" variant="light">
            <Navbar.Brand  className="logoName" href="#home">La Ultima página</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Artículos</Nav.Link>
                <Nav.Link href="#features">Sobre mi</Nav.Link>
                <Nav.Link href="#pricing">Tienda</Nav.Link>
            </Nav>
            <Form inline className="search" >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
        <div className="header-picture">
            <div className="container">
            <h1 className="animation"> </h1>
            <h2>Sin moverte de casa.</h2>
            </div>
        </div>
    </div>
);
}

