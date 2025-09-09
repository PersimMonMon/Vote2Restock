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