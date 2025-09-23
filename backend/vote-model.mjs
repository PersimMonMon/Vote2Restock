import mongoose from 'mongoose';
import 'dotenv/config';

const VOTE_DB_NAME = 'vote_db';
let connection = undefined;

// Connect to MongoDB
async function connect() {
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: VOTE_DB_NAME});
        console.log('Successfully connected to MongoDB using Mongoose!');
    } catch(err) {
        console.error(err);
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

// generate a userId 
async function createVote(userId, itemId) {
    const output = new Vote ({userId: userId, itemId: itemId})
    const saved = await output.save();
    return saved;
};

// check if we already made a model from userId and itemId
async function checkDup(userId, itemId) {
    const existence = await Vote.findOne({userId, itemId});
    return !!existence;
};

// get the total vote count
async function getVotes(itemId) {
    const result = await Vote.aggregate([
        { $match: { itemId: itemId} },       // filter to only have itemId
        { $group: { 
            _id: "$itemId", 
            totalVotes: { $sum: "$userChoice"} 
            } 
        }  
    ]);
    return result;
};

// get userChoice 
async function getChoice(userId, itemId) {
    const found = await Vote.findOne({userId, itemId});

    if (!found) {
        return null;
    };

    let choice = found.userChoice; 
    return choice;
};

// toggle the vote (put request)
async function toggleVote(userId, itemId) {
    const vote = await Vote.findOne({userId, itemId})
    vote.userChoice = vote.userChoice === 1 ? 0 : 1;
    return await vote.save();
};

export { connect, createVote, getVotes, toggleVote, checkDup, getChoice };