import React from "react";
import "./ArticlePage.css";
import {SectionAbout} from "../About page/SectionAbout";
import useFetch from 'use-http'


export function ArticlePage(props) {
    const {loading, error, data} = useFetch(`http://localhost:3001/articles/${props.match.params.id}`, {}, [])
    return (
        <>
            {error && 'Error'}
            {loading && 'Loading'}
            {data !== undefined &&
            <>
                <div className="picture">
                    <img className="imgArticle-Page" src={data.img} alt={"imageArticle"}/>
                </div>
                <SectionAbout
                    title={data.title}
                />
                <p className="articlePage">{data.article}
                </p>
                <hr className="hr-about"/>
            </>}
        </>
    )
}