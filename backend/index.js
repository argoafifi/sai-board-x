import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from "cors";
import db from './config/Database.js';
// import Users from './models/userModels.js'; // init database utk pertamakali
import router from './routes/index.js';
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    // await Users.sync(); // init database utk pertamakali
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:8080'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('server running on port 3000'));