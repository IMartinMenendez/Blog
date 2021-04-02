import React from "react";
import "./pagination.css";
import IconNext from "../Icons/next.png";

export function Pagination() {
    return (
        <div className="col-lg-12">
            <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Previous">
                            <span><img className="prevIcon" src={IconNext}/></span>

                        </a>
                    </li>
                    <li className="page-item active"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item">
                        <a href="#" className="page-link" aria-label="Next">
                            <span><img className="nextIcon" src={IconNext}/></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}