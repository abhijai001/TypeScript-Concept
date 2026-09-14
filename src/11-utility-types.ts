// Utility Types

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};


// Partial<T> makes all properties optional.

type UserUpdate = Partial<User>;

const update: UserUpdate = {
  name: "Alex"
};


// Required<T> makes all properties required.

type RequiredUser = Required<User>;

const completeUser: RequiredUser = {
  id: 1,
  name: "Alex",
  age: 22,
  email: "alex@example.com"
};


// Pick<T, K> selects specific properties.

type UserPreview = Pick<User, "name" | "email">;

const preview: UserPreview = {
  name: "Alex",
  email: "alex@example.com"
};


// Omit<T, K> removes specific properties.

type PublicUser = Omit<User, "email">;

const publicUser: PublicUser = {
  id: 1,
  name: "Alex",
  age: 22
};


function updateUser(data: Partial<User>): void {
  console.log("Updating user:", data);
}

updateUser({ name: "Sam" });
updateUser({ age: 25, email: "sam@example.com" });

console.log(update);
console.log(completeUser);
console.log(preview);
console.log(publicUser);
