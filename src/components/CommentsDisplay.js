import { useState } from "react";
import Comment from "./Comment";
import Search from "./Search";

function CommentsDisplay({comments}){
    const [showComments, setShowComments] = useState(true);
    const [commentList, setCommentList] = useState(comments);
    const [searchValue, setSearchValue] = useState("");

    function handleShowCommentsClick(){
        setShowComments((showComments) => !showComments);
    }

    function handleCommentDelete(id){
        const newCommentList = commentList.filter(comment => comment.id !== id);
        setCommentList(newCommentList);
    }

    function handleSearch(value){
        setSearchValue(value);
    }

    const commentsToDisplay = showComments ? commentList.filter(comment => comment.user.includes(searchValue)).map(comment => <Comment key={comment.id} comment={comment} onDelete={handleCommentDelete}/>): null;
    const numberOfComments = showComments ? `${commentsToDisplay.length} Comments` : "";

    return (
        <div>
            <button onClick={handleShowCommentsClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr/>
            <h3>{numberOfComments}</h3>
            {showComments ? <Search onSearch={handleSearch}/> : null}
            {commentsToDisplay}
        </div>
    );
}

export default CommentsDisplay;