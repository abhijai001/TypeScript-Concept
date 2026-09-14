export {};

// Type Assertions

type User = {
  name: string;
  age: number;
};

const data: unknown = {
  name: "Alex",
  age: 22
};

// We are telling TypeScript to treat data as User.
const user = data as User;

console.log(user.name);
console.log(user.age);


// A type assertion does not change the actual value.

const value: unknown = "hello";
const text = value as string;

console.log(text.toUpperCase());


// Angle-bracket syntax also exists, but "as" is preferred in TS/TSX.
// const text = <string>value;


// Assertion does not validate the data at runtime.

const wrongData: unknown = {
  name: "Alex"
};

const wrongUser = wrongData as User;

console.log(wrongUser.name);
console.log(wrongUser.age);