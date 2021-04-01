import React from "react";
import "./article.css";
import {Card, CardDeck, Button} from "react-bootstrap";
import IconChat from "./Icons/chat.png";
import IconImage from "./Icons/like.png";


export function Article(props) {

    return (
        <CardDeck className="article-Card">
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
                    <img src={IconImage} className="icons" alt="icons"/>
                    <img src={IconChat} className="icons" alt="icons"/>


                </Card.Footer>
            </Card>
        </CardDeck>
)
}