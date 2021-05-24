import { KaiyoLite } from "arls-kaiyo-lite"
import { TestController } from "./api/controllers/test.controller";
import { UserController } from "./api/controllers/user.controller";
import { TestRoute } from "./api/routes/test.route";
import { UserRoute } from "./api/routes/user.route";
import {createMongoDbConnection} from "arls-kaiyo-lite/modules/mongodb.module";


const server = new KaiyoLite ( {
    routes: [
        TestRoute,
        UserRoute
    ],
    controllers: [
        TestController,
        UserController
    ],
    providers: [
        createMongoDbConnection({
            dbName: "auth-test",
            password: "",
            username: "",
            host: "localhost",
            port: 27017
        })
    ]
});

server.listenHttp(8080);

interface IPerson {
    name: string, 
    age: number,
}

function getPerson() {
    // go to db and fetch something
    // Calling the Interface Person
    let data: IPerson;

    data = {
        name: "X",
        age: 200
    };

    return data;
}

let data = getPerson();
// can see what is in data when typing data.
data.age
data.name

class Person {
    name: string;
    age?: number; // optional ? but for name you need to intialise name below in constructor 

    constructor(name: string, age: number) {
        this.name = name;
    }
}

function getPerson2() {
    // Calling the Person Class now
    let data = new Person("Y", 500);

    return data;
}

let professor = getPerson2();
professor.name
professor.age

enum AuthType {
    Admin = 1, // can also have it as a string Admin = "Admin" therefore you cant mispell it 
    Moderator = 2, 
    User = 3
}

// Class is when there is some functionality in it, getting data from like twosouorces can put together into a class
// interface is good when getting data from random places

// Types  Capital T for Test!!!
type Test = "one" | "two" | "three" | IPerson;

function doesSomething(s: Test) {

}

function somethingElse(authType: AuthType) {
    if (authType === AuthType.Admin) { // same as === 1
        console.log("Admin role")
    }
}

// doesSomething("mkm") // Incorrect
doesSomething("one") // Correct

// Option of passing in any

let dataString = "";

function doesSomethingAny(obj: any) {
    if (typeof obj !== "string"){
        JSON.stringify(obj);
    }
}

let one = 1;
let bool = true;

doesSomethingAny(dataString);
console.log(typeof one)