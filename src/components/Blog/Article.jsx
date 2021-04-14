import React from "react";
import "./article.css";
import {Card, CardDeck, Button} from "react-bootstrap";
import IconChat from "../Icons/chat.png";
import IconImage from "../Icons/like.png";


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
                    <Button href={`/MoreReaded/${props.id}`} className="buttonCard">Leer</Button>
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