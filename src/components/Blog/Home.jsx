import React, {useState} from "react";
import {PictureHead} from "../PictureHead";
import {Section} from "../Section";
import {CarouselCards} from "./Carousel";
import {CardArticle} from "./CardArticler";
import {Pagination} from "./Pagination";
import useFetch from 'use-http';

export function Home(props) {

    const [page, setPage] = useState(0);

    function pageClicked(page) {
       setPage(page);
    }

    function nextPage() {
        setPage(page + 1);
    }

    function previousPage() {
        setPage(page - 1);
    }

    const {loading, error, data} = useFetch(`http://localhost:3001/articles?page=${page}&per_page=3`, {}, [page]);
    const totalPages = data !== undefined ? data.total_pages : 0;

    return (
        <>
            <PictureHead/>
            <Section
                key={1}
                title={"Artículos más leídos"}
            />
            <CarouselCards/>
            <Section
                key={2}
                title={"Todos los artículos"}/>
            {error && 'Error'}
            {loading && 'Loading'}
            <div className="row">
                {data !== undefined && data.articles.map(article => <CardArticle article={article}/>)}
            </div>
            <Pagination
                pageClicked={pageClicked}
                totalPages={totalPages}
                currentPage={page}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
        </>
    )
}