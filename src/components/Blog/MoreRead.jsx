import React from "react";
import {SectionAbout} from "../About page/SectionAbout";
import {AddComment} from "../Article Page/AddComment";

export function MoreRead(props) {
    console.log(props)
    return (
        <>
                <div className="picture">
                    <img src={props.img} alt={"imageArticle"}/>
                </div>
                <SectionAbout
                    title={props.title}
                />
                <p className="articlePage">{props.article}
                </p>

                <hr className="hr-about"/>
                <AddComment/>

        </>
    )
}