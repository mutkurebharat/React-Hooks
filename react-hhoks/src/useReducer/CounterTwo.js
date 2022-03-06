import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "incrementTwo":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrementTwo":
      return { ...state, secondCounter: state.secondCounter - action.value };

    case "reset":
      return initialState;

    default:
      break;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>First Count - {count.firstCounter}</h1>
      <h1>Second Count - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 2 })}>
        IncrementTwo
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
        DecrementTwo
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;
