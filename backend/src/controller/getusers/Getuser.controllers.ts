import type { Request, Response } from "express";
import type { AuthenticateRequest } from "../../Type/Authenticatereq.ts";
import Getuserservice from "../../services/getusers/Getuserservice.ts";

class GetuserController {
    async getuser(
        req: AuthenticateRequest,
      res: Response
    ){
        return await Getuserservice.getusers(req,res);

    }
}
export default new GetuserController();