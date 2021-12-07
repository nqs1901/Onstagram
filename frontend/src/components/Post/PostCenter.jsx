import React, { useState } from "react";
import Carousel from "../Common/Carousel";

export default function PostCenter({ post }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card_body">
      <div
        className="card_body-content"
        style={{
          filter: "invert(1)",
          color: "white",
        }}
      >
        <span>
          {post.content.length < 60
            ? post.content
            : readMore
            ? post.content + " "
            : post.content.slice(0, 60) + "....."}
        </span>
        {post.content.length > 60 && (
          <span className="readMore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Hide content" : "Read more"}
          </span>
        )}
      </div>
      {post.images.length > 0 && (
        <Carousel images={post.images} id={post.id} />
      )}
    </div>
  );
}
