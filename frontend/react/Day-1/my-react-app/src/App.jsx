// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {


//   return (

//   )
// }

// export default App



// ✅ Challenge 1 — Create a Simple Component

// Create a React component called Welcome that shows:

// Hello, Akbar!


// Write only the component code.

// function Welcome () {
//   return(
//     <h1>Hello, Akbar!</h1>
//   )
// }

// export default Welcome

// ✅ Challenge 2 — Parent to Child Communication

// Create a Parent component that sends a prop role="Full Stack Developer" to a Child component.
// The child should render:

// Role: Full Stack Developer

// function Parent() {
//   return(
//     <Child role = "Full Stack Developer"/>
//   )
// }

// function Child(props) {
//   return(
//     <h1>{props.role}</h1>
//   )
// }

// export default Parent


// ✅ Challenge 3 — Render a List

// Render this array in JSX:

// const skills = ["React", "Node", "MongoDB"];


// Output should look like:

// React
// Node
// MongoDB


// Remember to use key.

// function RenderListParent() {
//   const skills = ["React", "Node", "MongoDB"]
//   return(
//     <RenderListChild skills/>
//   )
// }

// function RenderListChild(props) {
//   return (
//     <h1 key={props.id}>{props.map(m => m)}</h1>
//   )
// }

// export default RenderListParent

// ✅ Challenge 4 — JSX Fix

// Fix this broken JSX:

// return 
//   <h1>Hello</h1>
//   <p>World</p>

// return ( 
//  <div>
// <h1>Hello</h1>
// <p>World</p>

//  </div> 

// )


// ✅ Challenge 5 — Conditional Rendering

// Write JSX that renders:

// Logged in


// if isLoggedIn is true, otherwise:

// Please log in

function UserLoginInParent() {

  return(
    <UserLoginInChild {...isloggedIn ? true : false}/>
  )
}

function UserLoginInChild(props) {
  return (
   <h1>{props}</h1>
  )
}

export default UserLoginInParent