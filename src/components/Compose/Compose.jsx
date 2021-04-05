import React from "react";
import {Button} from "react-bootstrap";
import "./Compose.css";

export function Compose() {
    return (
        <>
            <form className="compose">
                <div className="form">
                    <input type="text" className="form-control" id="password" placeholder="Password"/>
                </div>
                <div className="form">
                    <input type="text" className="form-control" id="Image" placeholder="Image link"/>
                </div>
                <div className="form">
                    <input type="text" className="form-control" id="Title" placeholder="Title"/>
                </div>
                <div className="form">
                    <input type="text" className="form-control" id="Subtitle" placeholder="Subtitle"/>
                </div>
                <div className="form">
                    <textarea className="form-control mb-10" rows="20" name="message" placeholder="Article"/>
                </div>
                <Button variant="primary" className="button form submit_btn">Post Article</Button>
            </form>


        </>


    )
}