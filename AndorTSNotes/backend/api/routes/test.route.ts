import {before, GET, route} from "awilix-router-core";
import {Request, Response} from "express";
import { TestController } from "../controllers/test.controller";
import { authenticate } from "../middlewares/auth.middleware";

@route("/")
export class TestRoute {
    constructor(private testController:TestController){

    }

    @GET()
    @before(authenticate(["test"]))
    @route("/")
    dummyData(req:Request, res:Response) {
        this.testController.dummyData(req, res)
    }

    @GET()
    @before(authenticate(["test"]))
    @route("/")
    dummyDataAdmin(req:Request, res:Response) {
        this.testController.dummyDataAdmin(req, res)
    }
}