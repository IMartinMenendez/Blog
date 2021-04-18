import React from "react";
import "./AddComment.css";
import {Button} from "react-bootstrap";

export function AddComment() {
    return (
        <div className="comment-form">
            <h4>Deja tu comentario</h4>
            <form action='http://localhost:3001/article/:id' method="post">
                <div className="form-group form-inline">
                    <div className="form-group col-lg-6 col-md-6 name">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 email">
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>
                </div>
                <div className="form-group">
                        <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege"
                                  onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Messege'"
                                  required=""/>
                </div>
                <Button type="submit" className="button submit_btn">Post Comment</Button>
            </form>
        </div>
)
}