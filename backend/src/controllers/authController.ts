import bcrypt from 'bcrypt'
import { db } from '../config/db.js';
import { user } from '../drizzle/schema.js';


export const registerhandler = async(req:any,res:any) => {
    const { name,email,password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({
            message:"All fields are required"
        });
    };

    const hashedPassword = await bcrypt.hash(password,10);
    try{
        await db.insert(user)
        .values({
            name,
            email,
            password:hashedPassword
        })

        return res.status(200).json({
            success: true,
            name,
            email,
            hashedPassword
        })
    }
    catch(error){
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}

export const loginHandler = async(req:any,res:any) => {
    res.json({
        message:"Login controller"
    })
}