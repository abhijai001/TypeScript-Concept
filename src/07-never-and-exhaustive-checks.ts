export {};

// Never and Exhaustive Checks

type Role = "admin" | "user" | "guest";

function handleRole(role: Role): string {
  switch (role) {
    case "admin":
      return "Admin access";

    case "user":
      return "User access";

    case "guest":
      return "Guest access";

    default:
      return assertNever(role);
  }
}

function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`);
}

console.log(handleRole("admin"));
console.log(handleRole("user"));
console.log(handleRole("guest"));


// never is also used when a function never successfully returns.

function fail(message: string): never {
  throw new Error(message);
}

// fail("Something went wrong");


// Errors in catch blocks should be handled safely.

function runTask(): void {
  try {
    throw new Error("Task failed");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

runTask();