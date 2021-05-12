import React from "react";
import "./article.css";
import {Card, CardDeck, Button} from "react-bootstrap";
import IconChat from "../Icons/chat.png";
import IconImage from "../Icons/like.png";
import { Link } from 'react-router-dom';

export function Article(props) {
    const {article} = props;
    return (
        <CardDeck className="article-Card">
            <Card>
                <Card.Img variant="top" src={article.img}/>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.description}
                    </Card.Text>
                    <Button as={Link} to={`/article/${article.id}`} className="buttonCard">Leer</Button>
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