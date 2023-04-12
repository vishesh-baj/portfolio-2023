import { useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./features/counter/Counter";
import PostList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
function App() {
  const { posts } = useSelector((state) => state);
  console.log("POSTS", posts);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AddPostForm />
      <PostList />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
