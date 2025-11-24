import type { Request, Response } from "express";
import signupService from "../../Services/singup/signup.service.ts";

class Signupcontroller {
    async signup(
        req: Request,
        res: Response
    ){
        return await signupService.signup(req,res);

    }
}
export default new Signupcontroller();