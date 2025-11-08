What does JSX stand for, and why do we use it in React?

JSx stand for javascript html which is a syntax used to render html elements inside a react component
it lets you write html elements in js 
basically it compiles to react.createElement("h1" "Akbar" "h1")

In React, what is the difference between a component and an element?

components are used to change the state within that component and it is reuseable
elements are rendered by the components like <div>, <h1>, <button>

Why must React components start with a capital letter?

to avoid js to misinterperut with html elements we use capitalLetters for componets like <Header /> if we use <header> it will be a html element

What exactly are props, and are they read-only or mutable?

props are readonly they are not nutable, props are used to comunnicate between parent and child components 

What happens when you return multiple elements without wrapping them in a parent tag?

it gives us an error that tells needs atleast one parent element 

How do you pass data from parent to child?
Write a small example in code.

function Parent() {
    return (
      <Header name: "Akbar"/>
    )
   
}

function Child(props) {
   return (
    {<h1> props.name </h1>} 
   )
}

What is the purpose of a key in a list, and why is index a bad key sometimes?

key lets react identify specific product are order etc without it it may misinterupt with othe rvalues

What is the virtual DOM, and why does React use it?
react DOM creates a virtual DOM to make the react faster for rendering 






//challenges
✅ Challenge 1 — Correct

Your Welcome component is perfect.

✅ Challenge 2 — Correct

Parent-to-child props passing is correct and clean.

❌ Challenge 3 — Needs Fixes

You made two mistakes:

Mistake 1: Passing props incorrectly

You wrote:

<RenderListChild skills/>


This does nothing.
Correct way:

<RenderListChild skills={skills} />

Mistake 2: Child component is wrong

You wrote:

<h1 key={props.id}>{props.map(m => m)}</h1>


Issues:

props is an object, not an array → props.skills

You must render each skill separately

You cannot place multiple items inside one <h1>

props.id doesn’t exist

✅ Correct Code:

function RenderListParent() {
  const skills = ["React", "Node", "MongoDB"];
  return <RenderListChild skills={skills} />;
}

function RenderListChild(props) {
  return (
    <div>
      {props.skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}
    </div>
  );
}

export default RenderListParent;

✅ Challenge 4 — Correct

Your fixed JSX is perfect.

❌ Challenge 5 — Needs Fixes

Mistakes:

Mistake 1: Spread operator is wrong
<UserLoginInChild {...isloggedIn ? true : false}/>


isloggedIn is undefined

You are spreading boolean values → invalid JSX

Mistake 2: Child receives props incorrectly

You wrote:

<h1>{props}</h1>


Props is an object — not a string → this prints [object Object].

✅ Correct Version
function UserLoginInParent() {
  const isLoggedIn = true; // or false

  return <UserLoginInChild isLoggedIn={isLoggedIn} />;
}

function UserLoginInChild({ isLoggedIn }) {
  return (
    <h1>{isLoggedIn ? "Logged in" : "Please log in"}</h1>
  );
}

export default UserLoginInParent;
