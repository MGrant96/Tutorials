import {Request, Response} from "express";

export class TestController {
    dummyData(req:Request, res:Response){
        res.success("Hello")
    }
}