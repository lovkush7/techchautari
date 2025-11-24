import type { Request, Response } from "express";
import User from "../../entities/User.entities.ts";
import generateToken from "../../lib/jwt.cookie.ts";

class SignupService {
    async signup(
        req: Request,
        res:Response
    ){

        const {fullname,email,password} = req.body;
        try{
            const user = await User.findOne({
                where:{
                    email
                }
            })

            if(user){
                return {success: false, message:"user already exist"}
            }

            const newUser = new User();
            newUser.Fullname = fullname;
            newUser.email = email;
            newUser.password = password;
            await newUser.save();

            generateToken(res,newUser.id);

            return {
                success: true
            }

        }catch(err){
            console.log("the error is"+err);
            return {success: false , message: "internal server error"}
        }

    }
}
export default new SignupService();