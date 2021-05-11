import React from "react";
import "./ArticlePage.css";
import {SectionAbout} from "../About page/SectionAbout";
import useFetch from 'use-http';

export function ArticlePage(props) {
    const {loading, error, data} = useFetch(`https://immense-forest-00374.herokuapp.com/articles/${props.match.params.id}`, {}, [])
    return (
        <>
            {error && 'Error'}
            {loading && 'Loading'}
            {data !== undefined &&
            <>
                <div className="picture">
                    <img className="imgArticle-Page" src={data.map(function(prop){return prop = prop.img})} alt={"imageArticle"}/>
                </div>
                <SectionAbout
                    title={data.map(function(prop){return prop = prop.title})}
                />
                <p className="articlePage">{data.map(function(prop){return prop = prop.article})}
                </p>
                <hr className="hr-about"/>
            </>}
        </>
    )
}