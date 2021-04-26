console.log('Hello World')

let aString: string;
aString = "Hi"
let aNum : Number;
aNum = 5;
let aBool: boolean;
aBool = true;
// Can be any Type, default Js so no point using ts if you use this all the time
let anyVar: any = "a String";
anyVar = 5;

let year: string | number;
year = 2021;
year = "2021";
// Parse the string to always be a number
const parsedYear = parseInt(year);

let arrString: string[] 
arrString = ['a','b','c']
arrString[0] = 'd';
arrString.push("e");

let arrNum: number[] 
arrNum = [1,2,3,4]
arrNum[0] = 6
arrNum.push(7);

let arrBool: boolean[] 
arrBool= [true, false]
arrBool[0] = false;
arrBool.push(true);

// mixed arr: union
let arrMix: (string | number | boolean)[];
arrMix = [1, 'a', true]

// Tuple: explicitly define the types of spots in the tuple
let arrTup: [string, number]
arrTup = ["a String", 5]


// Objects
let person = {
    name: "Michael",
    age: 25
}

// Custom types: type alias
type stringOrNum = string | number;
let yearAlias: stringOrNum; 

// Functions
function calcSum(a: number, b: number) {
    return a + b;
}
calcSum(2, 2);

// Rewrite above as an arrow functin
let calcSum2: (a: number, b: number) => number;

calcSum2 = (first: number, second: number) => {
    return first + second;
}

// Returns Void
const sayHi = () => {
    console.log("Hi");
}

// Interfaces Ensures a certain structure of an object
interface PersonInterface {
    name: string;
    age: number;
}

let Michael: PersonInterface = {
    name: "Michael",
    age: 25
}

class Person implements PersonInterface {
    // Access Modifiers and Declaration within the constructor
    constructor(public name: string, public age: number) {
        
    }

    // Method
    greet() {
        return `Hi, I'm ${this.name} I am ${this.age}`
    }
}

let John = new Person("John", 35);

console.log(John.greet());

// DOM and Type Casting
// element or null, ts doesnt know if it exists, define as inputElement
const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')!; // uses ! to say it is there and dont have to check below
const greeting = document.querySelector('.greeting') as HTMLDivElement;

// Not sure if form is there so uses ? to check
// inputForm?.addEventListener
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const person_ = new Person(inputName.value, inputAge.valueAsNumber);

    greeting.innerText = person_.greet();

    inputForm.reset();
})

// Generics  <T> placeholder that pushes onto the type of the arg
function doSomething<T>(arg: T): T {
    // do something
    return arg
}
// Works for all 
doSomething('g');
doSomething(4);
doSomething(true);

doSomething<string>('3');

interface book<T>{
    id: number;
    name: string;
    data: T
}

const aBook: book<string>= {
    id: 1,
    name: 'Title 1',
    data: "More data here"
}

const bBook: book<string[]>= {
    id: 2,
    name: 'Title 2',
    data: ["Review 1", "Review 2"]
}

// Enums
enum ManufacturerMake { TESLA, AUDI, MERCEDES, VOLVO, BMW }

const myCar = {
    year: 2021,
    make: 3
}

const myCar2 = {
    year: 2021,
    make: ManufacturerMake.MERCEDES
}
console.log(myCar.make)
console.log(myCar2.make)



