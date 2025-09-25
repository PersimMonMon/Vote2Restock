import {useState, useEffect} from "react"; 

function VoteButton({handleClick, itemId, choices}) {
  // use useState to toggle between 'Voted' and 'Vote'
  const [voted, setVote] = useState(choices === 1);

  useEffect(() => {
    setVote(choices === 1);
  }, [choices]);

  const onClick = () => {
    // change voted state and toggle userChoice
    setVote(!voted); 
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