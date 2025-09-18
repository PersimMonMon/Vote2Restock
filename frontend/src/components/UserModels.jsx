//get the userId and itemId 
import products from '../products/products.js';

// createVote fetch api and make a model for each product 
const loadModel = async(userId, itemId) => {
  try { 
    const response = await fetch('/generateVote', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId, itemId})
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch(error) {
    console.error('Fetch error', error);
  };
};

//loop products and get the itemId, then call get request (use .map instead of forEach as it does not ignore promises)
const loadInitialModels = async () => {

  //generate userId and store in localStorage
  const userId = JSON.parse(localStorage.getItem('newUserId'));

  if (userId) {
    return userId;
  };

  const newUserId = Date.now() + Math.random() * 1000;
  localStorage.setItem('newUserId', JSON.stringify(newUserId));

  // return all promisses to await 
  await Promise.all(products.map((item) => {
    return loadModel(newUserId, item.id)
}));
  //return userId so we can call on HomePage
  return newUserId; 
};

export default loadInitialModels;
