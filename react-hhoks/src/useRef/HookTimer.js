import { useEffect, useState, useRef } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
        clearInterval(intervalRef.current);
    }
  }, [timer]);

  return (
    <>
      <h1>Hook Timer - {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Hook Timer
      </button>
    </>
  );
};

export default HookTimer;
