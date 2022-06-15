import {useState} from "react";

function Votes({upvotes, downvotes}){

    const [votesData, setVotes] = useState({upvotes: upvotes, downvotes: downvotes})

    function handleVoteClick(e){
      const name = e.target.name;
      const value = parseInt(e.target.innerText) + 1
      setVotes({...votesData, [name]: value})
    }

    return (
        <div className="votes">
            <button name="upvotes" onClick={handleVoteClick}>{votesData.upvotes} 👍</button>
            <button name="downvotes" onClick={handleVoteClick}>{votesData.downvotes} 👎</button>
        </div>
    );
}

export default Votes;