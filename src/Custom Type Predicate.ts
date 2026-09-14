//Agar function true return karta hai, TypeScript is value ko User maan sakta hai.
type User = {
  name: string;
  age: number;
};
function isUser(value: unknown): value is User { //This is a type predicate
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  );
}
const data:unknown={
    name: "Abhijeet",
    age: 19
}
if (isUser(data)) {
  data.name; // ✅
  data.age;  // ✅
}