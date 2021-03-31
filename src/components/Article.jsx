import React from "react";
import "./article.css";
import {Card, CardDeck} from "react-bootstrap";

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
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}