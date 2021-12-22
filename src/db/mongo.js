import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
import config from 'config';

const MONGO_HOST = config.get('MONGO_HOST');
const MONGO_DB = config.get('MONGO_DB')
const {
    MONGO_USER,
    MONGO_PASSWORD
} = process.env;

export default mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB}`)