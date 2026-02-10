import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken'
import { configDotenv } from "dotenv";

configDotenv();

export interface AuthRequest extends Request {
    user?: {
        id: number,
        email:string
    }
}

const JWT_SECRET = process.env.JWT_SECRET

export const Middleware = (req:AuthRequest,res:Response,next:NextFunction) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message:"missing authorization table"
        })
    }

    if(!JWT_SECRET){
        return res.status(500).json({
            message:"server misconfiguration: missing JWT_SECRET"
        })
    }

    try{
        const decoded = jwt.verify(token,JWT_SECRET) as JwtPayload

        req.user = {
            id: decoded.id as number,
            email: decoded.email as string
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}