import React from "react";
import "./ArticlePage.css";
import {SectionAbout} from "../About page/SectionAbout";
import {CommentsReaders} from "./CommentReaders";
import {AddComment} from "./AddComment";
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
                   <img src={data.img} alt={"image"}/>
                </div>
                <SectionAbout
                    title={data.title}
                />
                <p className="articlePage">{data.article}
                </p>
                <hr className="hr-about"/>
                <CommentsReaders
                    image="https://cdn.pixabay.com/photo/2016/11/29/05/46/adult-1867618_1280.jpg"
                    name="Claudia R"
                    date="23 December"
                    comment="Great Article!"
                />
                <CommentsReaders
                    image="https://cdn.pixabay.com/photo/2017/10/10/16/33/shaman-2837843_1280.jpg"
                    name="Lucia Fernandez"
                    date="23 December"
                    comment="I really like the books mentioned here!"
                />
                <CommentsReaders
                    image="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
                    name="Claudia R"
                    date="2 December"
                    comment="I love this Blog. It is always very interesting"
                />
                <AddComment/>
            </>}
        </>
    )
}