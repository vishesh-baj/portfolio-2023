// type aliases

type StringOrNumber = string | number;
type StringOrNumberArr = StringOrNumber[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: StringOrNumberArr;
};
