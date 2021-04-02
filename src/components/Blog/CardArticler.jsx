import React from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import IconImage from "../Icons/like.png";
import IconChat from "../Icons/chat.png";
import "./cardArticle.css";

export function CardArticle(props) {

    return (
        <CardDeck className="CardArticle">
            <Card>
                <Card.Img variant="top" src={props.img}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button className="buttonCard">Leer</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <div className="iconFooter">
                        <p className="iconsP">{props.comment}</p><img src={IconImage} className="icons" alt="icons"/>
                        <p className="iconsP">{props.likes}</p><img src={IconChat} className="icons" alt="icons"/>
                    </div>

                </Card.Footer>
            </Card>
        </CardDeck>
    )
}
