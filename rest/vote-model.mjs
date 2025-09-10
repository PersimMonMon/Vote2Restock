import mongoose from 'mongoose';
import 'dotenv/config';

const VOTE_DB_NAME = 'vote_db';
let connection = undefined;

// Connect to MongoDB
async function connect() {
    try{
        connection = mongoose.connect(VOTE_DB_NAME, 
                {dbName: VOTE_DB_NAME});
        console.log('Successfully connected to MongoDB using Mongoose!');
    } catch(err) {
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`);
    };
};

// Define schema (highly recommend when using MongoDB)**
const voteSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    itemId: { type: String, required: true },
    userChoice: { type: Number, required: true }
})

// Create model to create, read, update, and delete documents 
const Vote = mongoose.model(VOTE_DB_NAME, voteSchema);

// Make function to create new objects
async function createVote(userId, itemId, userChoice) {
    const vote = new Vote(userId, itemId, userChoice)
    const saved = await vote.save();
    return saved;
}



// verify user only votes once 
async checkVotes(){
    console.log('hi')
}