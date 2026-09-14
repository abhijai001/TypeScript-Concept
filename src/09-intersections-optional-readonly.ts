// Intersections, Optional and Readonly

type User = {
  name: string;
  age: number;
};

type Admin = {
  permissions: string[];
};

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alex",
  age: 25,
  permissions: ["read", "write"]
};


// Optional properties

type Profile = {
  name: string;
  age?: number;
  bio?: string;
};

const profile: Profile = {
  name: "Sam"
};

const anotherProfile: Profile = {
  name: "John",
  age: 22,
  bio: "TypeScript developer"
};


// Readonly properties

type Account = {
  readonly id: number;
  username: string;
};

const account: Account = {
  id: 101,
  username: "alex"
};

account.username = "alex_dev";

// account.id = 202; // ❌ Cannot assign to 'id' because it is readonly

console.log(admin);
console.log(profile);
console.log(anotherProfile);
console.log(account);