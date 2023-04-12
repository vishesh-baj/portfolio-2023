import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  console.log("USERS: ", state);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = () => setUserId(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };
  const userOptions = () =>
    users.map((user) => {
      return (
        <option value={user.id} key={user.id}>
          {user.name}
        </option>
      );
    });

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          onChange={onTitleChange}
          value={title}
          type="text"
          name="postTitle"
          id="postTitle"
        />
        <label htmlFor="author">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Post Content: </label>
        <textarea
          onChange={onContentChange}
          value={content}
          name="postContent"
          id="postContent"
        ></textarea>
        <button onClick={onSavePostClicked} type="button">
          add post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
