// Real-world TypeScript and React

// --------------------------------------------------
// Declaration files (.d.ts)
// --------------------------------------------------

// A .d.ts file describes the types provided by
// JavaScript code or a library.

// Example:
//
// declare function formatDate(date: Date): string;


// --------------------------------------------------
// Typed API data
// --------------------------------------------------

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<User[]> = {
  data: [
    {
      id: 1,
      name: "Alex",
      email: "alex@example.com"
    }
  ],
  status: 200
};

response.data.forEach((user) => {
  console.log(user.name);
});


// --------------------------------------------------
// Axios-style API request
// --------------------------------------------------

// With Axios, libraries provide TypeScript types.
// A request can be typed so the response is predictable.
//
// Example:
//
// const response = await axios.get<User[]>("/users");
//
// response.data is User[]


// --------------------------------------------------
// Safe error handling
// --------------------------------------------------

async function fetchUsers(): Promise<User[]> {
  try {
    throw new Error("Failed to fetch users");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    return [];
  }
}

fetchUsers();


// --------------------------------------------------
// import type
// --------------------------------------------------

// When importing something only for its type:
//
// import type { User } from "./types";
//
// This makes it clear that User is only used as a type.


// --------------------------------------------------
// React component props
// --------------------------------------------------

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}


// --------------------------------------------------
// React state
// --------------------------------------------------

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}


// --------------------------------------------------
// Forms and events
// --------------------------------------------------

function LoginForm() {
  const [email, setEmail] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={handleChange}
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}


// --------------------------------------------------
// ReactNode and children
// --------------------------------------------------

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}


// PropsWithChildren is another way to type children.
//
// type ContainerProps = React.PropsWithChildren<{
//   title: string;
// }>;


// --------------------------------------------------
// Generic custom hook
// --------------------------------------------------

function useValue<T>(value: T): T {
  return value;
}

const stringValue = useValue("Hello");
const numberValue = useValue(100);

console.log(stringValue);
console.log(numberValue);


// --------------------------------------------------
// Example usage
// --------------------------------------------------

const user: User = {
  id: 1,
  name: "Alex",
  email: "alex@example.com"
};

console.log(
  <UserCard user={user} />
);

console.log(
  <Container>
    <p>Hello TypeScript</p>
  </Container>
);