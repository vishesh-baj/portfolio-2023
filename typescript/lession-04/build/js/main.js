"use strict";
let stringArr = ["a", "b", "c"];
let guitars = ["strat", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("Hey");
guitars[0] = 231;
guitars.unshift("212");
guitars = stringArr;
mixedData = guitars;
let test = [];
let band = [];
band.push("ASidk");
// Tupple
let myTuple = ["Srtring", 123, true];
let mixed = ["John", 1, false];
mixed = myTuple;
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
let evh = {
    active: false,
    albums: ["awesomeness", 1212],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `${guitarist.name.toLocaleLowerCase()}!`;
    }
    return "hello unknown";
};
greetGuitarist(evh);
// ENUMS
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
})(Grade || (Grade = {}));
