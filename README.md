# Vote2Restock | Furniture Voting App 
A full-stack web application that allows users to vote on furniture items, with votes on each furniture card. Built using React with Vite, Node.js, Express, and MongoDB (Mongoose), this app demonstrates presistent user interactions, REST APIs, and dynamic frontend state management. 

# Features
  - Users can vote for furniture items, with votes stored persistently in MongoDB.
  - Users can toggle their vote (cast or remove) at any time.
  - Displays a total votes per item and user-specific voting history.
  - Dynamically updates vote counts without page reloads.
  - Generates unique user IDs automatically for new sessions.

# Technologies
  - Frontend: React, Vite, HTML, CSS, JavaScript
  - Backend: Node.js, Express REST APIs
  - Database: MongoDB with Mongoose
  - State Management: React Hooks (useState, useEffect)
  - Other: express-async-handler

# Sample Product Data (product.js) 
``` 
const products = [
  { id: "sofa", name: 'Luxor Upholstered Sofa', category: 'Living Room', price: 499.99, image: '/assets/sofa.png' },
  { id: "dining-table", name: 'Imperial Dining Table', category: 'Dining Room', price: 299.99, image: '/assets/dining-table.png' },
  { id: "coffee-table", name: 'Contemporary Coffee Table', category: 'Living Room', price: 129.99, image: '/assets/coffee-table.png' },
  { id: "bed-frame", name: 'Regal Bed Frame', category: 'Bedroom', price: 349.99, image: '/assets/bed-frame.png' },
  { id: "armchair", name: 'Elegance Armchair', category: 'Living Room', price: 199.99, image: '/assets/armchair.png' },
  { id: "bookshelf", name: 'Sierra Bookshelf', category: 'Office', price: 159.99, image: '/assets/bookshelf.png' },
  { id: "nightstand", name: 'Monarch Nightstand', category: 'Bedroom', price: 89.99, image: '/assets/nightstand.png' },
  { id: "dining-chairs", name: 'Glamour Dining Chairs (Set of 4)', category: 'Dining Room', price: 99.99, image: '/assets/dining-chairs.png' },
  { id: "tv-stand", name: 'Premium TV Stand', category: 'Living Room', price: 229.99, image: '/assets/tv-stand.png' },
  { id: "office-desk", name: 'Executive Office Desk', category: 'Office', price: 199.99, image: '/assets/office-desk.png' }
];

export default products;
```

# Backend Setup 
1. Clone the repository and install dependencies:
```
git clone <repo-url>
cd <repo-directory>
npm install
```

2. Set environment variables in a .end file:
```
PORT=<choose_port>
MONGODB_CONNECT_STRING=<your_mongodb_connection_string>
```

3. Start the backend server:
```
node server.js 
```

# Backend API Endpoints 

|Method  |  Endpoint       |  Description                                                                   |
|--------|-----------------|--------------------------------------------------------------------------------|
|GET     |  /              |  The string you want to hash                                                   |
|GET     |  /votes         |  Returns total votes per furniture item.                                       | 
|GET     |  /getChoice     |  Returns all votes cast by a specific user (userId as query param)             | 
|POST    |  /generateVote  |  Create a new vote for user (userId and itemId). Prevents duplicates.          | 
|PUT     |  /toggle        |  Toggle a user's vote for a specific item (userId and itemId in request body). | 

# Frontend Overview 
  - HomePage renders all products using just the ProjectList.jsx file
  - Each item has a VoteButton showing "Vote" or "Voted" based on user's choice.
  - User ID generation: 
    - A unique userId is automatically created for new users and stored in localStorage.
    - Votes are tied to this ID for persistence across page reloads.
  - State Management:
    - choices tracks with items the user has voted for.
    - total tracks total votes for each item.
  - Vote handling:
    - Clicking a button calls the backend PUT /toggle endpoint, updates choices and total votes.

# Running the App
1. Start the backend server.
2. Start the frontend (React + Vite):
```
npm run dev
```
3. Open the app in your browser (this changes depending on your chosen PORT)













