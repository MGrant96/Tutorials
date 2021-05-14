import {Request, Response} from "express";
import {IJwtPayload} from "../../interfaces/jwt-payload.interface";
import {HttpStatusCode} from "arls-kaiyo-lite/enums/http-response-codes.enum";
import {ResponseApiError} from "arls-kaiyo-lite/models/response-api.model";

interface IUser {
    name: string,
    access: any;
}

const roles: IUser[] = [
    {
        name: "admin",
        access: {
            users: true,
            test: true,
        }
    },
    {
        name: "user",
        access: {
            users: false,
            test: true,
        }
    }
]

function checkAccess(role: string): IUser | null {
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === role) {
            return roles[i];
        }
    }
    return null;
}

const jwt = require('jsonwebtoken');
const authenticate = (allow: string[]) => {
    return (req: Request, res: Response, next: () => void) => {
        let token = req.headers.authorization;
        jwt.verify(token, "test", (err: any, decoded: IJwtPayload) => {
            if (err) {
                res.status(HttpStatusCode.Unauthorized).json(new ResponseApiError("Unauthorized"));
            } else {
                let role = checkAccess(decoded.role)
                if (role) {
                    for (let i = 0; i < allow.length; i++) {
                        let k: string = allow[i];
                        if(role.access[k] !== true) {
                            return res.status(HttpStatusCode.Unauthorized).json(new ResponseApiError("Unauthorized"));
                        }
                    }
                    next();
                } else {
                    return res.status(HttpStatusCode.Unauthorized).json(new ResponseApiError("Unauthorized"));
                }
            }
        })
    }
}
export {authenticate};