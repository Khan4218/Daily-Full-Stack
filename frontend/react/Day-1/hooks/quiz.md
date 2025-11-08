✅ Phase 2 Quiz — React Hooks
1) What does useState do in React? Explain in one or two lines.
useState is a function which helps us to update the state and rerender the UI

2) Why does updating state with setState cause a re-render?
setState is a function which is used to update the state it cause re render because of react behaviour with hooks

3) What is the correct way to update state based on the previous value?

Write the recommended useState update syntax.

Example scenario: incrementing a counter.

we declare hooks on top not inside if else or loops

const [currentvalue, function to update state] = useState(initialvalue)
const [count, setCount] = useState("0")

4) What does useEffect(() => { ... }, []) mean? When does it run?

useEffects runs when something changes 
useEffect is used to deal with side effects like api calls etc 
[dependencies] it state when and how the useEffect runs
for example if there is no dependencies it mounts and render continuosly


5) What happens if you forget the dependency array in useEffect?
it mounts and keeps on rendering 

6) Write a simple example of useEffect that logs “Mounted” only once.
ueEffect(() => {
    console.log("Mounted")
}, [count or current value])

7) In one line: What is the “Rules of Hooks”?
rules of hooks are you have to declare hooks on top use can use hook inside if else statements, for loops 

8) True or False:


You can call hooks inside loops or if statements.

false 



✅ 1) What does useState do?

Your answer: good but can be cleaner.

Correct version:
useState lets React store a value and update the UI whenever that value changes.

✅ Correct.

⚠️ 2) Why does setState cause a re-render?

Your answer is partially correct but not clear.

Correct explanation:
Updating state with setState causes a re-render because React re-renders the component whenever its state changes. This is how React detects changes and updates the UI.

✅ Concept correct, but wording weak.

❌ 3) Correct way to update state based on previous value

Your answer is incorrect — you explained what useState is, not the update pattern.

Correct answer:
Use the functional update form:

setCount(prev => prev + 1);


This ensures React always uses the latest state.

✅ Remember this pattern — it’s asked in interviews.

⚠️ 4) Meaning of useEffect(() => {}, [])

Your answer is half-correct.

Correct explanation:
useEffect(() => {}, []) runs only once, when the component first mounts.
The empty dependency array [] means “run only on the first render”.

✅ You know the idea but phrasing was messy.

❌ 5) What happens if you forget the dependency array?

Your answer is close but needs correction.

Correct explanation:
If you don’t include a dependency array, the effect runs on every render, which can cause infinite loops.

✅ You were right, just missing the “every render” phrase.

❌ 6) useEffect that logs “Mounted” only once

Your code is wrong:

You wrote ueEffect (typo)

You used [count] — that runs whenever count changes

To run ONCE, dependencies must be []

✅ Correct version:

useEffect(() => {
  console.log("Mounted");
}, []);


Memorize this — it’s asked very often.

❌ 7) Rules of Hooks

Your answer is partly wrong.

You wrote:
"you can use hook inside if else statements"
This is incorrect.

Correct rule in one line:

Hooks must be called at the top level of the component, not inside loops, conditions, or nested functions.

✅ Remember: Only top-level calls.

✅ 8) Hooks inside loops/ifs — True or False?

Your answer: False ✅ Correct.
