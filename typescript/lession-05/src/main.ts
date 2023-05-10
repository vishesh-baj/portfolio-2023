type One = string;
type Two = string | number;
type Three = "hello";

// conver to more or less specifics
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // less specific

let d = <One>"World";
let e = <string | number>"World";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
// be careful TS sees no problem here but a string is return
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

// The DOM

const img = document.querySelector("img")!;
// non null assertion
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
