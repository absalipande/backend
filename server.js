import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import UserRoute from './routes/UserRoute.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3060;

app.use(cors())
app.use(express.json());
app.use(UserRoute)
app.use(helmet());

mongoose.connect(process.env.DB_URI);

mongoose.connection.on('connected', () =>
  console.log('MongoDB connection has been established')
);

app.listen(PORT, () => {
  console.log(`Server is up and running on Port: ${PORT}`);
});
