import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid user data or ID' });
  }
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON body' });
  }
  console.error('API error:', err.name);
  res.status(500).json({ message: 'Internal server error' });
});

export default app;
