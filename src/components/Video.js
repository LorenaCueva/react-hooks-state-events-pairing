import Votes from "./Votes";
import CommentsDisplay from "./CommentsDisplay";

function Video({video}){
    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title={video.title}
            />
            <h2>{video.title}</h2>
            <sub>{video.views} Views | Uploaded {video.createdAt}</sub>
            <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
            <CommentsDisplay comments={video.comments}/>
        </div>
        
    );
}

export default Video;