import { Router } from "express"
import SignupController from "../controller/signup/Signup.controller.ts";

const router = Router();
router.post("/signup",async(req,res)=>{
    const user = await SignupController.signup(req,res);
    res.status(200).json({success:true,data:user});
})

export default router;