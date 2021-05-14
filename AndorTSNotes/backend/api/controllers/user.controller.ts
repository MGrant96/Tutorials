import {Request, Response} from "express";

const jwt = require('jsonwebtoken');

export class UserController {
    generateToken(req:Request, res: Response){ // Login first dont give token this is just example!!!!
        let token = jwt.sign({
            role: "admin"
        },)
        res.success(token);
    }
} 