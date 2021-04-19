import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';

import boxRoutes from './routes/boxRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/boxes', boxRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, console.log('Server running'));
