import React from "react";
import Icon from "../../Common/Icon";

export default function Input( {children}) {
  return (
    <form className="card-footer comment_input">
       {children}
      <input
        type="text"
        placeholder="Add your comments..."
        value=""
        style={{
          filter:"invert(1)",
          color:  "white",
          background:  "rgba(0,0,0,.03)",
        }}
      />

      <Icon />

      <button type="submit" className="postBtn">
        Post
      </button>
    </form>
  );
}
