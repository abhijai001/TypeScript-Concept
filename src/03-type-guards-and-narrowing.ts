export {};

// Type Guards and Type Narrowing

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(42);


// Truthiness narrowing

function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, guest");
  }
}

greet("Alex");
greet();


// Equality narrowing

function handleRole(role: "admin" | "user" | "guest") {
  if (role === "admin") {
    console.log("Admin access");
  } else if (role === "user") {
    console.log("User access");
  } else {
    console.log("Guest access");
  }
}

handleRole("admin");
handleRole("user");


// instanceof narrowing

class KulhadChai {
  serve() {
    console.log("Serving Kulhad chai");
  }
}

class CuttingChai {
  serve() {
    console.log("Serving cutting chai");
  }
}

function serveChai(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    chai.serve();
  } else {
    chai.serve();
  }
}

serveChai(new KulhadChai());
serveChai(new CuttingChai());


// "in" narrowing

type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

function brewChai(chai: MasalaChai | GingerChai) {
  if ("spiceLevel" in chai) {
    console.log(`Masala chai: spice level ${chai.spiceLevel}`);
  } else {
    console.log(`Ginger chai: ${chai.amount}g ginger`);
  }
}

brewChai({
  type: "masala",
  spiceLevel: 5
});

brewChai({
  type: "ginger",
  amount: 10
});