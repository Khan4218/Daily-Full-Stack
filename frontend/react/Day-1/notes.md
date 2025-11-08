Phase 1 – React Basics (Concepts)
1. What is React?

React is a JavaScript library for building reusable user interfaces.
It lets you create components that manage their own state and update efficiently when data changes.

Think of a React app as a tree of components:
App → Header → UserList → UserCard → Button

2. JSX

JSX is a syntax extension that lets you write HTML inside JavaScript.

function Greeting() {
  return <h1>Hello Akbar!</h1>;
}


JSX is not HTML — it’s converted into JavaScript:

React.createElement("h1", null, "Hello Akbar!");

3. Components

There are two main types:

Functional Components (modern, preferred)

Class Components (older syntax)

Example – Functional:

function Welcome(props) {
  return <h2>Welcome, {props.name}</h2>;
}


Use it like:

<Welcome name="Akbar" />

4. Props → Inputs to Components

Props are how data flows from parent → child.

function UserCard({ name, role }) {
  return <p>{name} – {role}</p>;
}

<UserCard name="Mir Akbar Ali Khan" role="Full Stack Dev" />


Props are read-only.
If you need changing data → use state.

5. State → Internal Data

Managed inside the component with useState.

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}


When setCount runs, React re-renders the component with the new state.

6. useEffect → Run Side Effects

Used for fetching data, timers, subscriptions, etc.

import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty array → run only once

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}

7. One-way Data Flow

React updates flow downward:

Parent → Child (via props)
Child → Parent (via callback)


That’s the core React foundation.


React Data Flow Diagram

Here’s a text-based diagram that shows how React handles data and re-rendering.


┌──────────────────────────────┐
│          App.js              │
│  (Parent Component)          │
│                              │
│  const [count, setCount] =   │
│        useState(0);          │
│                              │
│  <Counter count={count}      │
│           onIncrement={setCount}/> │
└──────────────┬───────────────┘
               │
               │ props: { count, onIncrement }
               ▼
┌──────────────────────────────┐
│       Counter.jsx            │
│  (Child Component)           │
│                              │
│  function Counter({ count, onIncrement }) { │
│    return (                    │
│      <div>                     │
│        <p>{count}</p>          │
│        <button onClick={() => onIncrement(count + 1)}>+1</button> │
│      </div>                    │
│    );                          │
│  }                             │
└──────────────────────────────┘


How this works

The parent (App) owns the state (count).

It passes the data to the child (Counter) as props.

When the button is clicked, the child calls the parent’s function (onIncrement) to update the state.

React automatically re-renders both components with the new state.

✅ This is called unidirectional data flow (one-way data binding) — parent → child via props, child → parent via callbacks.



Phase 2 – Hands-On: Small React Component

Now let’s build this same idea in code.


Task 1: Simple Counter Component

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <Counter count={count} onIncrement={setCount} />
    </div>
  );
}

function Counter({ count, onIncrement }) {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => onIncrement(count + 1)}>+1</button>
      <button onClick={() => onIncrement(0)}>Reset</button>
    </div>
  );
}

export default App;
