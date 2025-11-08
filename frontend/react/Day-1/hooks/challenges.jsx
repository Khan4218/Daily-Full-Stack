// ✅ Challenge 1 — Basic useState

import { useEffect, useState } from "react"

// Create a component called Counter that:

// starts with count = 0

// has a button

// clicking the button increases the count by 1

// shows the updated count

// Write only the component code.

function Counter() {
    const [count, setCount] = useState(0)
 return(
    <div>
        <p>{count}</p>
        <button onClick ={() => {setCount(count + 1)}}> Increment </button>
    </div>

 )
}
export default Counter

// ✅ Challenge 2 — Update based on previous state

// Fix this broken code so it increments safely:

// const [count, setCount] = useState(0);

// <button onClick={() => setCount(count + 1)}>Increment</button>


// Rewrite it using the correct functional update.

const [count, setCount] = useState(0);

<button onClick={() => setCount(prev => prev + 1)}>Increment</button>


// ✅ Challenge 3 — useEffect on Mount

// Write a component that logs:

// Component Mounted


// only once when it mounts.

function Mount() {


    useEffect(() => {
       console.log("Component Mounted");
       
    },[])
}

// ✅ Challenge 4 — useEffect with dependency

// You have:



// Write a useEffect that runs ONLY when name changes.
const [name, setName] = useState("Akbar");

useEffect(() => {
    console.log("name changed");
    
}, [name])

// ✅ Challenge 5 — API Call Simulation

// Write a component that:

// has a state message

// after 2 seconds (using setTimeout), updates message to "Data Loaded"

// Use useEffect for the timer.

function Message() {
   const [message, setMessage] = useState("")

   useEffect(() => {
     const timer = setTimeout(() => {
      setMessage("Data Loaded")

     }, 2000)

     return () => clearTimeout(timer)

   }, [])

   return(
    <h1>{message}</h1>
   )
}


// Example output:
// Before 2 sec → empty
// After 2 sec → "Data Loaded"