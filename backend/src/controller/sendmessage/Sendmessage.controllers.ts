import type { Request, Response } from "express";
import SendMessagesServices from "../../services/sendmessages/SendMessagesServices.ts";


class  SendMessagesController {
    async sendmessages(
        req: Request,
        res: Response
    ){
      
        return await SendMessagesServices.sendmessages(req,res);
    }

}
export default new SendMessagesController();