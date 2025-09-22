import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as votes from './vote-model.mjs';

//create const for port and express 
const PORT = process.env.PORT 
const app = express()  // express takes no parameters, only want one app instance created 

// Parse all incoming data, turn JSON filled items into JSON object 
app.use(express.json());

// Connect express to PORT and listen to incoming request + connect to MongoDB
app.listen(PORT, async () => {
    try {
    await votes.connect(); 
    console.log(`Server listening on port ${PORT}...`);
  } catch(err) {
    console.error('Failed to connect to MongoDB:', err);
  }
});

app.post('/generateVote', asyncHandler (async (req, res) => {
    const {userId, itemId} = req.body
    const checkDupResult = await votes.checkDup(userId, itemId);

    if (!userId || !itemId) {
      return res.status(400).json({Error: "Invalid request"});
    };

    if (checkDupResult) {
      return res.status(400).json({Error: "User vote exists already"});
    }
    const response = await votes.createVote(userId, itemId);
    res.status(201).json(response);
}));

// default request when access to backend
app.get('/', (req, res) => {
  res.send('Welcome to the Vote API server!');
});

// get request 
app.get('/votes', asyncHandler (async (req, res) => {
    const { itemId } = req.query
    const voteObjects = await votes.getVotes(itemId)
    res.status(200).json(voteObjects);
}));

// put request 
app.put('/toggle', asyncHandler (async (req, res) => {
    const { userId, itemId} = req.body;
    const item = await votes.toggleVote(userId, itemId)
    res.status(200).json(item);
}));


