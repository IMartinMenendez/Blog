import React, {useState} from "react";
import useFetch from 'use-http';
import {Section} from "../Section";
import {CardArticle} from "./CardArticler";
import {Pagination} from "./Pagination";
import "./ArticleAll.css";


export function ArticleAll() {
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

    const {loading, error, data} = useFetch(`https://immense-forest-00374.herokuapp.com/articles?page=${page}&per_page=3`, {}, [page]);
    const totalPages = data !== undefined ? data.total_pages : 0;
    return (
        <>
            <Section
                key={1}
                title={"Todos los artículos"}/>
                {error && 'Error'}
                {loading && 'Loading'}
            <div className="row">
                {data !== undefined && data.articles.map(article => <CardArticle article={article}/>)}
            </div>
            <Pagination
                key={1}
                pageClicked={pageClicked}
                totalPages={totalPages}
                currentPage={page}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
            />
        </>)
}