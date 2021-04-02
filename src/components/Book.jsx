import React from "react";
import {Card, Button} from "react-bootstrap";
import "./book.css";


export function Book(props) {
    return (
        <div className="Card-Book">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr className="hr-about"/>
                    <a href="https://amzn.to/360bKdr">Comprar</a>
                </Card.Body>
            </Card>
      </div>
    )
}
