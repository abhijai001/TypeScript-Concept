export {};

// Functions

function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
}

function greet(name?: string): string {
  return name ? `Hello ${name}` : "Hello guest";
}

console.log(add(10, 20));
logMessage("TypeScript");
console.log(greet("Alex"));
console.log(greet());


// Arrays

const names: string[] = ["Alex", "Sam", "John"];
const numbers: Array<number> = [10, 20, 30];

console.log(names);
console.log(numbers);


// Readonly arrays

const scores: readonly number[] = [90, 85, 95];

// scores.push(100); // ❌


 // Tuples

const user: [string, number] = ["Alex", 22];

console.log(user[0]);
console.log(user[1]);


// Enums

enum Role {
  Admin,
  User,
  Guest
}

const role: Role = Role.Admin;

console.log(role);