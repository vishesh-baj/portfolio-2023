// type aliases
type StringOrNumber = string | number;
type StringOrNumberArray = StringOrNumber[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: StringOrNumberArray;
};

// type literals
let myName: "Vishesh";
let userNames: "Vishesh" | "Bajpayee" | "Awesome";
userNames = "Awesome";

// functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(add(3, 4));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// default param value here
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

// rest parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {}
  i++;
};

// custom type guards
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};
// use of never type
const numOfString = (value: number | string): string => {
  if (typeof value === "string") return "string";

  if (isNumber(value)) return "number";
  return createError("this should never happen");
};
