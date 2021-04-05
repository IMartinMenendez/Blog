import React from "react";
import "./CommentsReaders.css";

export function CommentsReaders(props) {
    return (
        <div className="person-comment row">
            <div className="col-lg-2">
                <img className="img-Comments"
                     src={props.image}
                     alt="comments image"/>
            </div>
            <div className="col-lg-2">
                <p className="name"><b>{props.name}</b></p>
                <p className="date">{props.date}</p>
                <p className="finalComment">{props.comment}</p>
            </div>
        </div>

    )
}