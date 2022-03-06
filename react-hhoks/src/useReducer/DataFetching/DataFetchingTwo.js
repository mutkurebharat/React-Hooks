import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something Went Wrong",
        post: {},
      };

    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <h1>{state.loading ? "Loading.........." : state.post.title}</h1>
      <h1>{state.error ? state.error : null}</h1>
    </div>
  );
};

export default DataFetchingTwo;
