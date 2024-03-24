import mongoose from 'mongoose';
import { logger } from '../utils/logger.js';

export default (function database() {
    const startdb = () => {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'TheDevs'
        })
        .then(() => {
            logger.info('Database connected successfully...')
        })
        .catch(err => {
            logger.error('Error connecting to the database:', err)
            logger.info('Reconnecting to database...')
            startdb()
        })
    }

    startdb()
})()













// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to MongoDB');
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    logger.error('Error connecting to MongoDB:', error);
    console.log('Error connecting to MongoDB');
  });