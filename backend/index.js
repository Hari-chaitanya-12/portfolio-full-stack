import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import routes from './routes/routes.js'; 

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Portfolio Backend is running on port: ${PORT}`));