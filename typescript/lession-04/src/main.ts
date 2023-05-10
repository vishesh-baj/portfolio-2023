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

// functions
const add = (a: number, b: number): number => {
  return a + b;
};
