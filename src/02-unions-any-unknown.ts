export {};

// Unions, any and unknown

// A union means the value can be one of multiple types.
let userId: string | number = "user-101";

userId = 101;

// userId = true; // ❌


function printId(id: string | number): void {
  console.log(id);
}

printId("user-101");
printId(101);


// any removes most type checking.
// Use it only when you have a good reason.

let data: any = "hello";

data = 100;
data = true;
data.randomProperty;
data.someFunction();


// unknown is also for values whose type isn't known yet,
// but TypeScript makes you check the type before using it.

let value: unknown = "TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

if (typeof value === "number") {
  console.log(value.toFixed(2));
}


function printValue(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
    return;
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }

  console.log("Unknown value");
}

printValue("hello");
printValue(42);
printValue(true);