import type { Request, Response } from "express";
import GetmessagesServices from "../../services/getmessages/Getmessages.Services.ts";

class GetmessagesController {
    async getmessages(
        req: Request,
        res: Response
    ){
        return await GetmessagesServices.getmessage()
    }
}
export default new GetmessagesController();