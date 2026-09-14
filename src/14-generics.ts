export {};

// Generics

function identity<T>(value: T): T {
  return value;
}

const text = identity("Hello");
const number = identity(100);

console.log(text);
console.log(number);


// Multiple generic types

function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const userInfo = pair("Alex", 22);

console.log(userInfo);


// Generic interface

interface Box<T> {
  value: T;
}

const stringBox: Box<string> = {
  value: "TypeScript"
};

const numberBox: Box<number> = {
  value: 100
};

console.log(stringBox);
console.log(numberBox);


// Generic function with arrays

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

console.log(getFirst(["A", "B", "C"]));
console.log(getFirst([10, 20, 30]));