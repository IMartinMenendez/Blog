import React from "react";
import {Carousel} from "react-bootstrap";
import {Article} from "./Article";
import "./carousel.css";
import IconNext from "../Icons/next.png";
import useFetch from 'use-http';
import {transformArray} from "./Utils";

export function CarouselCards() {
    const {loading, error, data} = useFetch(`https://immense-forest-00374.herokuapp.com/articles/popular`, {}, []);
    return (
        <Carousel
            nextIcon={<span><img className="nextIcon" alt="IconNext" src={IconNext}/></span>}
            prevIcon={<span><img className="prevIcon" alt="IconPrev" src={IconNext}/></span>}>

            {error && 'error'}
            {loading && 'loading'}
            {data !== undefined && transformArray(data.popular_articles, 3).map(articles => <Carousel.Item>
                <div className="row">
                    {articles.map(article =>
                        <Article article={article}/>)}
                </div>
            </Carousel.Item>)}
            {data !== undefined && console.log('transfromArray ', transformArray(data.popular_articles, 3))}
        </Carousel>
    )
}