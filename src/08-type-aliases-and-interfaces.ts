// Type Aliases and Interfaces

type User = {
  id: number;
  name: string;
  email: string;
};

const user: User = {
  id: 1,
  name: "Alex",
  email: "alex@example.com"
};


// Interfaces are commonly used to describe object shapes.

interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 101,
  name: "Laptop",
  price: 75000
};


// Interfaces can be extended.

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 2,
  name: "Sam",
  email: "sam@example.com",
  permissions: ["users:read", "users:write"]
};


// Type aliases can represent unions directly.

type ID = string | number;

let userId: ID = "user-101";
userId = 101;


// Both type aliases and interfaces can describe object shapes.

type Address = {
  city: string;
  country: string;
};

interface Company {
  name: string;
  employees: number;
}

const address: Address = {
  city: "Lucknow",
  country: "India"
};

const company: Company = {
  name: "Tech Corp",
  employees: 50
};

console.log(user);
console.log(product);
console.log(admin);
console.log(userId);
console.log(address);
console.log(company);