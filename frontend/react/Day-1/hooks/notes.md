✅ 1. What are Hooks?

Hooks are functions that let you “hook into” React features.

Example:

useState → to add state (variables that cause re-render)

useEffect → to run side effects (API calls, timers, subscriptions)

useRef → to store values that don’t cause re-render (or access DOM)

useContext → to share global data

useReducer → advanced state management

Hooks work only inside functional components.

✅ 2. useState — The Most Important Hook

useState lets React remember values between re-renders.

Syntax:

const [count, setCount] = useState(0);


count → current value

setCount → function to update value

0 → initial value

Every time you call setCount(...), the component re-renders.

Example:

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

✅ 3. useEffect — Runs Code When Something Happens

useEffect lets you run:

API calls

Event listeners

Timers

Subscriptions

DOM updates

Syntax:

useEffect(() => {
  console.log("Runs on mount or when dependencies change");
}, [dependencies]);


3 main cases:

1️⃣ No dependency:
useEffect(() => {
  console.log("Runs on every render");
});

2️⃣ Empty dependency:
useEffect(() => {
  console.log("Runs only once (on mount)");
}, []);

3️⃣ With dependency:
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);

✅ 4. Why Hooks exist (interview answer)

Before Hooks, React used class components with:

this.state

this.setState

lifecycle methods: componentDidMount, componentDidUpdate, etc.

Hooks simplify everything:

No more classes

Logic is cleaner and easier

Reusable logic (custom hooks)

✅ 5. Rules of Hooks (Very Important!)

Two rules:

1️⃣ Only call hooks at the top level
✅ Good:

function Component() {
  const [count, setCount] = useState(0);
}


❌ Bad:

if (true) {
  useState(0);
}


2️⃣ Only call hooks inside React components or custom hooks
❌ Not allowed in loops, conditions, normal functions.

✅ 6. Custom Hooks

You can build your own hook:

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}


Then use it like:

const { count, setCount } = useCounter();
