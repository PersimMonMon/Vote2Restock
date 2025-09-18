import {useState} from "react"; 

function VoteButton({handleClick, itemId}) {
  // use useState to toggle between 'Voted' and 'Vote'
  const [voted, setVote] = useState(false);

  const onClick = () => {

    // change voted state 
    setVote(!voted); 

    // change userChoice to toggle 
    handleClick(itemId);
  }
  
  return (
    <button 
    className={`vote-button ${voted ? 'active' : 'default'}`}
    onClick={onClick}
    >
    { voted ? 'Voted' : 'Vote' }
    </button>
  )
};

export default VoteButton;