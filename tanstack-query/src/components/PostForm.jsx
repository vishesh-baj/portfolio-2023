import React, { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const renderField = (label) => {
    return (
      <div>
        <label>{label}</label>
        <input type="text" name={label.toLowerCase()} id="" value={post} />
      </div>
    );
  };
  return <form>{renderField("Title")}</form>;
};

export default PostForm;
