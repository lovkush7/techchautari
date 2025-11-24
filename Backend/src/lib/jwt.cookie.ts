import jwt from "jsonwebtoken"
import Envconfig from "../config/envconfig.ts"
import type { Request, Response } from "express";



const generateToken = (userid:string,res:Response)=>{

    const token = jwt.sign(
        {userid},
      Envconfig.JWT_SEC!,
      {expiresIn:"7d"}
    );

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge:7*24*60*60*1000
    
    });
    return token;
}
export default generateToken;