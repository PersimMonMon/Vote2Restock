//get the userId and itemId 
import products from '../products/products.js';

const userChoice = 0;
let productId;

// createVote fetch api and make a model for each product 
const loadModel = async(newUserId, itemId, userChoice) => {
  try { 
    const response = await fetch('/generateVote', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newUserId, itemId, userChoice})
    })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch(error) {
    console.error('Fetch error', error);
  };
};

//loop products and get the itemId, then call get request (use .map instead of forEach as it does not ignore promises)
export const loadInitialModels = async () => {

  //generate userId and store in localStorage
  const userId = JSON.parse(localStorage.getItem('newUserId'));

  if (userId) {
    return;
  }

  const newUserId = Date.now() + Math.random() * 1000;
  localStorage.setItem('newUserId', JSON.stringify(newUserId));

  await Promise.all(products.map((item) => {
    return loadModel(newUserId, item.id, userChoice)
}));
};
