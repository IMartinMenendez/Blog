import React from "react";
import {Section} from "../Section";
import "./newsletter.css";

export function Newsletter() {
    return(
        <div>
            <Section
                title = "Thank you for joining us!" />
                <img className="thanks" src="https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        </div>
    )
}