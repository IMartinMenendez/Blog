import React from "react";
import "./sectionAbout.css";

export function SectionAbout(props) {
    return (
        <>
        <h1 style={{ color: props.color }} className="section">{props.title}</h1>
        <hr style={{ backgroundColor: props.color }} className="hr-about"/>
        </>
)
}

