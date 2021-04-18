import React from "react";
import "./CommentsReaders.css";

export function CommentsReaders(props) {
    return (
        <div className="person-comment row">
            <div className="col-lg-2">
                <img className="img-Comments"
                     src={props.comment.image}
                     alt="commentsImage"/>
            </div>
            <div className="col-lg-2">
                <p className="name"><b>{props.comment.name}</b></p>
                <p className="date">{props.comment.date}</p>
                <p className="finalComment">{props.comment.comment}</p>
            </div>
        </div>
    );
}