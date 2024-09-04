import { useState } from 'react';
// import './Counter.css'; // Assume you have a Counter.css file for styling

function CounterApp() {
// const CounterApp = () => {
  // Step 1: Define state using the useState hook
  const [cnt, setCnt] = useState(0);

  // Step 2: Create functions to handle state changes
  // const increment = () => 
  //   setCount(count + 1);
  function increment() { 
    setCnt(cnt + 1);
  }
  

//   function increment() {
//     setCount(count + 1);
//   };

  const decrement = () => {
    if(cnt !== 0) {
      setCnt(cnt - 1);
    }    
  };

  // Step 3: The component renders based on the state
  return (
    <div className="counter">
      <h1>---- Counter App Using Functional Component ----</h1>
      <p>Count = {cnt}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
// 
export default CounterApp;