import ProductList from "../components/ProductList";
import loadInitialModels from "../components/LoadModels";

const HomePage = () => {

  // create model for each product for new userId
  loadInitialModels();
  
  // create function to toggle click
  const handleClick = async (itemId) => {
    console.log(itemId);

    // ues fetch to call on post api to create vote model (userId, itemId, and userChoice)
    try {
      const response = await fetch('/generateVote', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({itemId})

        // check if response (200-299) using .ok 
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch(error) {
      console.error('Fetch error:', error);
    }
  };

  // create function to generate userId (store with sessionStorage)

    return (
        <div className="container">
        <div className="main-section">
          <div className="products-container">
            <ProductList handleClick={handleClick}/>
          </div>
        </div>
        <div className="side-section">
          <div className="vote-container"></div>
        </div>
      </div>
    );
};

export default HomePage;