import React, { useState, useEffect } from "react";
import Display from "./Display";

export default function Comment({ post }) {
  const [showComments, setShowComments] = useState([]);

  useEffect(() => {
    const newCm = post.comments.filter((cm) => !cm.reply);
    setShowComments(newCm.slice(newCm.length - 2));
  }, [post.comments]);

  return (
    <div className="comments">
      {showComments.map((comment, index) => (
        <Display key={index} comment={comment} post={post} />
      ))}
      {post.comments.length > 2 && (
        <div className="seeall" style={{ cursor: "pointer", color: "crimson" }}>
          See all {post.comments.length} comments
        </div>
      )}
    </div>
  );
}
