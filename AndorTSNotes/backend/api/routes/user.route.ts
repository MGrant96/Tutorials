import {before, POST, GET, route} from "awilix-router-core";
import {Request, Response} from "express";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";


@route("/api/user")
export class UserRoute {
    constructor(private userController:UserController) {
    }

    @POST()
    @route("/token")
    generateToken(req:Request, res: Response){ // Login first dont give token this is just example!!!!
        this.userController.generateToken(req, res);
    }

    @GET()
    @route("/token")
    @before(authenticate(["user"]))
    testAccess(req:Request, res: Response){ // Login first dont give token this is just example!!!!
        this.userController.generateToken(req, res);
    }
    
} 

