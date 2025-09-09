import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as votes from './vote-model.mjs';

//create const for port and express 
const PORT = express.env.PORT 
const app = express()  // express takes no parameters, only want one app instance created 

// Parse all incoming data, turn JSON filled items into JSON object 
app.use(express.json());

// Connect express to PORT and listen to incoming request 
app.listen(PORT, async () => {
    await votes.connect();
    console.log(`Server listening on port ${PORT}...`);
});

// Determine what data items will store (the properties)


// define the CRUD 
