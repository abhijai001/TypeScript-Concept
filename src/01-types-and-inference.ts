// Types and Type Inference

const userName: string = "Abhijeet";
const age: number = 20;
const isDeveloper: boolean = true;

// TypeScript can infer these types automatically.
const city = "Lucknow";
const score = 100;
const isLoggedIn = false;

function add(a: number, b: number): number {
  return a + b;
}

console.log(userName);
console.log(age);
console.log(isDeveloper);

console.log(city);
console.log(score);
console.log(isLoggedIn);

console.log(add(10, 20));