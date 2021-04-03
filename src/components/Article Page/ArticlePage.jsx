import React from "react";
import "./ArticlePage.css";
import {SectionAbout} from "../About page/SectionAbout";
import {CommentsReaders} from "./CommentReaders";
import {AddComment} from "./AddComment";

export function ArticlePage() {
    return (
        <>
            <div className="picture">
            </div>
            <SectionAbout
                title="Novelas más leidas"
            />
            <p className="articlePage">t is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look liket is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like t is a
                long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here, content here', making it look like
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
        </>
    )
}