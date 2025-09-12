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
    userChoice: { type: Number, default: 0 }
})

// Create model to create, read, update, and delete documents 
const Vote = mongoose.model(VOTE_DB_NAME, voteSchema);

// 
async function getVotes(itemId) {
    const voteCount = await Vote.aggregate([
        { $match: { itemId: itemId}},       // filter to only have itemId
        { $group: { 
            _id: "$itemId", 
            totalVotes: { $sum: "$userChoice"} 
            } 
        }  
    ]);
    return voteCount;
};

// toggle the vote (put request)
async function toggleVote(userId, itemId) {
    const vote = await Vote.findOne({userId, itemId})
    vote.userChoice = vote.userChoice === 1 ? 0 : 1;
    return await vote.save();
};