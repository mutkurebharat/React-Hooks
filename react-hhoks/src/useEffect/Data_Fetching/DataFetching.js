import axios from "axios";
import { useEffect, useState } from "react";
const DataFetching = () => {
//   const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState({});
  const [id, setId] = useState(1);
  const [idBtn, setIdBtn] = useState(1)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idBtn]);

  const clickHandler = () => {
      setIdBtn(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>Fetch Data</button>
      <h1>{posts.title}</h1>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default DataFetching;
