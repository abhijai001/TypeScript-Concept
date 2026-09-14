// Objects and Structural Typing

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alex",
  age: 22
};


// TypeScript checks the structure of the object.
// Extra properties are allowed when the value is stored first.

const person = {
  name: "Sam",
  age: 25,
  city: "Lucknow"
};

const anotherUser: User = person;

console.log(anotherUser);


// Direct object literals are checked more strictly.

const userWithExtraData: User = {
  name: "John",
  age: 30
  // city: "Delhi" // ❌ excess property
};

console.log(userWithExtraData);


// Structural typing also works with functions.

type HasName = {
  name: string;
};

function printName(value: HasName): void {
  console.log(value.name);
}

printName({
  name: "Alex",
  age: 22
});

printName(person);