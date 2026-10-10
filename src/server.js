import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI || MONGO_URI.includes('<db_')) {
  console.error('Configure MONGO_URI in .env with your MongoDB Atlas connection.');
  process.exitCode = 1;
} else {
  mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 15000 })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err.name);
      process.exitCode = 1;
    });
}
