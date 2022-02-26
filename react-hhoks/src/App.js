import "./App.css";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import CLassMouse from "./useEffect/CLassMouse";
import DataFetching from "./useEffect/Data_Fetching/DataFetching";
import HookMouse from "./useEffect/HookMouse";
import HookCounterOne from "./useEffect/HoolCounterOne";
import IntervalClassCounter from "./useEffect/IntervalClassCounter";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import MouseContainer from "./useEffect/MouseContainer";
import ClassCounter from "./useState/ClassCounter";
import HookCounter from "./useState/HookCounter";
import UseStateArr from "./useState/UseStateArr";
import UseStateObj from "./useState/UseStateObj";

function App() {
  return (
    <div className="App">
      {/* -------------------- useState ---------------------------------- */}
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <UseStateObj /> */}
      {/* <UseStateArr /> */}
      {/* -------------------- useState ---------------------------------- */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <CLassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}

      {/* ---------------- Data Fetching Using UseEffect ------------------------ */}
      <DataFetching />
    </div>
  );
}

export default App;
