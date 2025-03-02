/* Hooks can only be called at the top-level of a function component. So can't be called in a loop or in a nested function such as event handle
- Can't be called conditionally (if statements)
-  Can't be called in a class, can only be called in function components
- 

*/

// Case 1 :
export function AnotherComponent() {
  function handleClick() {
    useEffect(() => {
      console.log('Some Effect');
    });
  }
  return <button onClick={handleClick}>Cause Effect </button>;
}

//code above violates the law of hooks because it's called in a function handler rather than at the top level of the component

// Correction
export function AnotherComponent() {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      console.log('Some Effect');
    }
  }, [clicked]);
  function handleClick() {
    setClicked(true);
  }
  return <button onClick={handleClick}> Cause Effect </button>;
}
