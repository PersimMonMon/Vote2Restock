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
  let userId = JSON.parse(localStorage.getItem('userId'));

  if (!userId) {
    userId = Date.now() + Math.random() * 1000;
    localStorage.setItem('userId', JSON.stringify(userId));

    // return all promisses to await 
    await Promise.all(products.map((item) => {
    return loadModel(userId, item.id)}));

    console.log('Votes created for all products');
  } else {
    console.log('UserId exist already: did not create model');
  };
  //return userId so we can call on HomePage
  return userId; 
};

export default loadInitialModels;
