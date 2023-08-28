import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
const App = () => {
  return (
    <div>
      <h1>Awesome blog</h1>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/" element={<PostList />} />
      </Routes>
    </div>
  );
};

export default App;
