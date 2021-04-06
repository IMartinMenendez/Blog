import React from "react";
import {PictureHead} from "../PictureHead";
import {Section} from "../Section";
import {CarouselCards} from "./Carousel";
import {CardArticle} from "./CardArticler";
import {Pagination} from "./Pagination";
import useFetch from 'use-http'

export function Home() {
    const {loading, error, data = []} = useFetch('http://localhost:3001/articles', {}, [])
    return (
        <>
            <PictureHead/>
            <Section
                title={"Artículos más leídos"}
            />
            <CarouselCards/>
            <Section
                title={"Todos los artículos"}/>
            {error && 'Error'}
            {loading && 'Loading'}
            <div className="row">
                {data.map(article => <CardArticle
                    img={article.img}
                    title={article.title}
                    description={article.description}
                />)
                }
            </div>
            <Pagination/>
        </>
    )
}