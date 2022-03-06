import React, { useReducer } from "react";
import "./App.css";
import ComponentC from "./useContext/ComponentC";
import ClassCounterOne from "./useEffect/ClassCounterOne";
import CLassMouse from "./useEffect/CLassMouse";
import DataFetching from "./useEffect/Data_Fetching/DataFetching";
import HookMouse from "./useEffect/HookMouse";
import HookCounterOne from "./useEffect/HoolCounterOne";
import IntervalClassCounter from "./useEffect/IntervalClassCounter";
import IntervalHookCounter from "./useEffect/IntervalHookCounter";
import MouseContainer from "./useEffect/MouseContainer";
import CounterOne from "./useReducer/CounterOne";
import CounterThree from "./useReducer/CounterThree";
import CounterTwo from "./useReducer/CounterTwo";
import DataFetchingOne from "./useReducer/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./useReducer/DataFetching/DataFetchingTwo";
import ComponentA from "./useReducer/useReducerWithuseContext/ComponentA";
import ComponentB from "./useReducer/useReducerWithuseContext/ComponentB";
import UseReducerComponentC from "./useReducer/useReducerWithuseContext/ComponentC";
import ClassCounter from "./useState/ClassCounter";
import HookCounter from "./useState/HookCounter";
import UseStateArr from "./useState/UseStateArr";
import UseStateObj from "./useState/UseStateObj";
export const UserContext = React.createContext();
export const BrandContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      break;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
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
      {/* <DataFetching /> */}

      {/* ------------------- useContext --------------------------------------------- */}

      {/* <UserContext.Provider value={{fName: "John", lName: "Smith"}}>
        <BrandContext.Provider value="ASUS">
          <ComponentC />
        </BrandContext.Provider>
      </UserContext.Provider> */}

      {/* ------------------- useReducer ---------------------------- */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* ------------------- useReducer with useContext---------------------------- */}

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <>
          <h1>Count - {count}</h1>
          <ComponentA />
          <ComponentB />
          <UseReducerComponentC />
        </>
      </CountContext.Provider> */}

      {/* ------------------- useReducer with useEffect---------------------------- */}

      {/* <DataFetchingOne /> */}
      <DataFetchingTwo />
    </div>
  );
}

export default App;
