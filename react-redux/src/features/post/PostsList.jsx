import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
  const { posts } = useSelector(selectAllPosts);
  const renderPosts = posts.map(({ id, title, content }) => {
    return (
      <article key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    );
  });
  return (
    <div>
      <h2>Posts List</h2>
      {renderPosts}
    </div>
  );
};

export default PostsList;
