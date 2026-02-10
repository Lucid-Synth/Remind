import bcrypt from 'bcrypt'
import { db } from '../config/db.js';
import { user } from '../drizzle/schema.js';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken'

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
    const { email,password } = req.body;

    if(!email||!password){
        return res.status(400).json({
            message:"Required field missing"
        })
    }

    const User = await db.select()
    .from(user)
    .where(eq(user.email,email))

    if(User.length === 0 ){
        return res.status(401).json({
            message: "User not found"
        })
    }

    const existinguser:any = User[0]

    const isValid = await bcrypt.compare(
        password,
        existinguser.password
    )

    if(!isValid){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }

    const token = jwt.sign(
        {id: existinguser.id,email: existinguser.email},
        process.env.JWT_SECRET!,
        {expiresIn:"1d"}
    )

    res.json({
        token,
        message:"Login successful"
    })
}