import Votes from "./Votes";

function Comment({comment, onDelete}){

    function handleRemoveClick(){
        onDelete(comment.id)
    }
    
    return(
        <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
            <Votes upvotes={comment.upvotes} downvotes={comment.downvotes}/>
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );
}

export default Comment;