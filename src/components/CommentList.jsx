import React from 'react';
import Comment from "./Comment.jsx"

function CommentList(props) {
    return ( 
        <div>
         <Comment name="홍길동" comment="안녕하세요!" />
         <Comment name="유재석" comment="리액트~" />
         <Comment name="강민경" comment="하이~" />
        </div>
    )
}
export default CommentList;