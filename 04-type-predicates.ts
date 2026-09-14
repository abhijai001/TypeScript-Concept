export {};

// Type Predicates

type User = {
  name: string;
  age: number;
};

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

function printUser(value: unknown): void {
  if (isUser(value)) {
    console.log(`${value.name} is ${value.age} years old`);
  } else {
    console.log("Not a valid user");
  }
}

printUser({
  name: "Alex",
  age: 22
});

printUser({
  name: "Sam",
  age: "twenty"
});


// Type predicates can also narrow union types.

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(value: unknown): value is ChaiOrder {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    "sugar" in value &&
    typeof value.type === "string" &&
    typeof value.sugar === "number"
  );
}

function serveOrder(order: ChaiOrder | string): void {
  if (isChaiOrder(order)) {
    console.log(
      `Serving ${order.type} chai with ${order.sugar} sugar`
    );
  } else {
    console.log(`Serving custom chai: ${order}`);
  }
}

serveOrder({
  type: "masala",
  sugar: 2
});

serveOrder("special chai");