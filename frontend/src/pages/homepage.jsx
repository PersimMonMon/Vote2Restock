import ProductList from "../components/ProductList";
import loadInitialModels from "../components/UserModels";
import React, {useState, useEffect} from "react";

const HomePage = () => {

  // create model for each product for new userId (use useState and useEffect to control async func)
  const [userId, setId] = useState(null);

  //have useEffect run once 
  useEffect(() => {
    const onLoad = async () => {
      const id = await loadInitialModels();
      setId(id); 
      console.log('hey models are loading');
    };
    onLoad(); // change state (update userId)
  }, [])
  
  
  // create function to toggle click
  const handleClick = async (itemId) => {
    console.log(itemId);

    // ues fetch to call on post api to create vote model (userId, itemId, and userChoice)
    try {
      const response = await fetch('/toggle', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId, itemId})

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