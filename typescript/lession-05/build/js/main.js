"use strict";
// type literals
let myName;
let userNames;
userNames = "Awesome";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(add(3, 4));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value here
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) { }
    i++;
};
// custom type guards
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of never type
const numOfString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen");
};
