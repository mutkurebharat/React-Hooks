import { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePos = (e) => {
    console.log("Logging Mouse Positions");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Assigning Event");
    window.addEventListener("mousemove", logMousePos);

    return () => {
        console.log("Removing Event");
         window.removeEventListener("mousemove", logMousePos);
    }
  }, []);

  return (
    <div>
      <h1>
        X - {x}, Y - {y}
      </h1>
    </div>
  );
};

export default HookMouse;
