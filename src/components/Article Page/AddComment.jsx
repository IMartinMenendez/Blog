import React from "react";
import "./AddComment.css";

export function AddComment() {
    return (
        <div className="comment-form">
            <h4>Deja tu comentario</h4>
            <form>
                <div className="form-group form-inline">
                    <div className="form-group col-lg-6 col-md-6 name">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group col-lg-6 col-md-6 email">
                        <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                    </div>

                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject"
                           onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Subject'"/>
                </div>
                <div className="form-group">
                        <textarea className="form-control mb-10" rows="5" name="message" placeholder="Messege"
                                  onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Messege'"
                                  required=""/>
                </div>
                <a href="#" className="button submit_btn">Post Comment</a>
            </form>
        </div>
)
}