import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";
const AddPostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ id: nanoid(), title, content }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a new Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          onChange={onTitleChange}
          value={title}
          type="text"
          name="postTitle"
          id="postTitle"
        />
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
