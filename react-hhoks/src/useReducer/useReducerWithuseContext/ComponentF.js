import { useContext } from "react";
import { CountContext } from "../../App";

const ComponentF = () => {
  const countContext = useContext(CountContext);
  console.log(countContext);
  return (
    <div>
      <hr></hr>
      <h1> Component F</h1>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentF;