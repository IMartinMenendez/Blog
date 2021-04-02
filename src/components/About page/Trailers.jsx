import React from "react";
import videoTrailer from "../Video/2053 last version.mp4";
import "./Trailer.css";

export function Trailers() {
    return (
        <div className="video">
        <div className="row">
            <div className="col-lg-3">
                <div>
                    <h3 className="text-trailer">2053</h3>
                    <hr className="hr-trailer"/>
                </div>
                <video controls autoPlay muted loop id="myVideo">
                    <source src={videoTrailer} type="video/mp4"/>
                </video>
            </div>
        </div>
        </div>
    )
}