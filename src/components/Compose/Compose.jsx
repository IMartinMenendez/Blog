import React from "react";
import {Button} from "react-bootstrap";
import "./Compose.css";

export function Compose() {
    return (
        <>
            <form action='http://localhost:3001/compose' method="post" className="compose">
                <div className="form">
                    <input name="password" type="text" className="form-control" id="password" placeholder="Password" onFocus="this.placeholder = ''"/>
                </div>
                <div className="form">
                    <input name="image" type="text" className="form-control" id="Image" placeholder="Image link" onFocus="this.placeholder = ''"/>
                </div>
                <div className="form">
                    <input name="title" type="text" className="form-control" id="Title" placeholder="Title" onFocus="this.placeholder = ''"/>
                </div>
                <div className="form">
                    <input name="subtitle" type="text" className="form-control" id="Subtitle" placeholder="Subtitle" onFocus="this.placeholder = ''"/>
                </div>
                <div className="form">
                    <textarea name="article" className="form-control mb-10" rows="20" placeholder="Article" onFocus="this.placeholder = ''"/>
                </div>
                <Button type="submit" variant="primary" className="button form submit_btn">Post Article</Button>
            </form>


        </>


    )
}