"use strict";
console.log('Hello World');
var aString;
aString = "Hi";
var aNum;
aNum = 5;
var aBool;
aBool = true;
// Can be any Type, default Js so no point using ts if you use this all the time
var anyVar = "a String";
anyVar = 5;
var year;
year = 2021;
year = "2021";
// Parse the string to always be a number
var parsedYear = parseInt(year);
var arrString;
arrString = ['a', 'b', 'c'];
arrString[0] = 'd';
arrString.push("e");
var arrNum;
arrNum = [1, 2, 3, 4];
arrNum[0] = 6;
arrNum.push(7);
var arrBool;
arrBool = [true, false];
arrBool[0] = false;
arrBool.push(true);
// mixed arr: union
var arrMix;
arrMix = [1, 'a', true];
// Tuple: explicitly define the types of spots in the tuple
var arrTup;
arrTup = ["a String", 5];
// Objects
var person = {
    name: "Michael",
    age: 25
};
var yearAlias;
// Functions
function calcSum(a, b) {
    return a + b;
}
calcSum(2, 2);
// Rewrite above as an arrow functin
var calcSum2;
calcSum2 = function (first, second) {
    return first + second;
};
// Returns Void
var sayHi = function () {
    console.log("Hi");
};
var Michael = {
    name: "Michael",
    age: 25
};
var Person = /** @class */ (function () {
    // Access Modifiers and Declaration within the constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        return "Hi, I'm " + this.name + " I am " + this.age;
    };
    return Person;
}());
var John = new Person("John", 35);
console.log(John.greet());
// DOM and Type Casting
// element or null, ts doesnt know if it exists, define as inputElement
var inputName = document.querySelector('#name');
var inputAge = document.querySelector('#age');
var inputForm = document.querySelector('form'); // uses ! to say it is there and dont have to check below
var greeting = document.querySelector('.greeting');
// Not sure if form is there so uses ? to check
// inputForm?.addEventListener
inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var person_ = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person_.greet();
    inputForm.reset();
});
// Generics  <T> placeholder that pushes onto the type of the arg
function doSomething(arg) {
    // do something
    return arg;
}
// Works for all 
doSomething('g');
doSomething(4);
doSomething(true);
doSomething('3');
var aBook = {
    id: 1,
    name: 'Title 1',
    data: "More data here"
};
var bBook = {
    id: 2,
    name: 'Title 2',
    data: ["Review 1", "Review 2"]
};
// Enums
var ManufacturerMake;
(function (ManufacturerMake) {
    ManufacturerMake[ManufacturerMake["TESLA"] = 0] = "TESLA";
    ManufacturerMake[ManufacturerMake["AUDI"] = 1] = "AUDI";
    ManufacturerMake[ManufacturerMake["MERCEDES"] = 2] = "MERCEDES";
    ManufacturerMake[ManufacturerMake["VOLVO"] = 3] = "VOLVO";
    ManufacturerMake[ManufacturerMake["BMW"] = 4] = "BMW";
})(ManufacturerMake || (ManufacturerMake = {}));
var myCar = {
    year: 2021,
    make: 3
};
var myCar2 = {
    year: 2021,
    make: ManufacturerMake.MERCEDES
};
console.log(myCar.make);
console.log(myCar2.make);
