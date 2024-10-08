import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return "Unrecognized command";
  }
}

const initialState = { count: 0 };
export default function ReducerHookSample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}