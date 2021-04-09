import React from "react";
import {Button, Card, CardDeck} from "react-bootstrap";
import IconImage from "../Icons/like.png";
import IconChat from "../Icons/chat.png";
import "./cardArticle.css";

export function CardArticle(props) {
    const {article} = props;
    return (
        <CardDeck className="CardArticle">
            <Card>
                <Card.Img variant="top" src={article.img}/>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                    <Button href={`/article/${article.id}`} className="buttonCard">Leer</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                    <div className="iconFooter">
                        <p className="iconsP">{article.comment}</p><img src={IconImage} className="icons" alt="icons"/>
                        <p className="iconsP">{article.likes}</p><img src={IconChat} className="icons" alt="icons"/>
                    </div>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}
