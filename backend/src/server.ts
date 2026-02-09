import express from 'express';
import authRoutes from './routes/authRoutes.js'
import { configDotenv } from 'dotenv'
configDotenv();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/',authRoutes);

app.get('/',(req:any,res:any) => {
    res.json({
        message:"This is Remind api"
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
})