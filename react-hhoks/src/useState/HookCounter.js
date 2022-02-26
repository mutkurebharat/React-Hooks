import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incermentFive = () => {
    for (let i = 0; i <= 5; i++) {
    setCount((prevCount) => {
      return prevCount + 1;
    });
    }
  };
  return (
    <div>
      <hr />
      <h1>Hook Counter - {count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incermentFive}>IncrementFive</button>
    </div>
  );
};

export default HookCounter;
