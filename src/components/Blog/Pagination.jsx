import React from "react";
import "./pagination.css";
import IconNext from "../Icons/next.png";
import Button from "react-bootstrap/Button";


export function Pagination(props) {
    // const pageNext = (props.page + 1 );

    const pages = [];
    for (let i = 0; i < props.totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="col-lg-12">
            <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                    <li className="page-item">
                        <Button onClick={props.onPreviousPage} className="page-link" aria-label="Previous"
                                disabled={props.currentPage === 0}>
                            <span><img className="prevIcon" src={IconNext}/></span>
                        </Button>
                    </li>
                    {
                        pages.map(page =>
                            <li onClick={() => props.pageClicked(page)} className={props.currentPage === page ? "page-item active" : "page-item"}>
                                <a href="#" className="page-link">{page + 1}</a>
                            </li>)
                    }

                    <li className="page-item">
                        <Button onClick={props.onNextPage} className="page-link"
                                disabled={(props.currentPage + 1) >= props.totalPages} aria-label="Next">
                            <span><img className="nextIcon" src={IconNext}/></span>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
