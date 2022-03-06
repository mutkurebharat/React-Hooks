import { useEffect, useState } from "react";
import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("Something Went Wrong");
      });
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading.........." : post.title}</h1>
      <h1>{error ? error : null}</h1>
    </div>
  );
};

export default DataFetchingOne;
