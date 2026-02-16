import express from 'express';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import contentRoutes from './routes/contentRoutes.js'
import { configDotenv } from 'dotenv'
configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL
}))

app.use('/',authRoutes);
app.use('/content',contentRoutes);

app.get('/',(req:any,res:any) => {
    res.json({
        message:"This is Remind api"
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})