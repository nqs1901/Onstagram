import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Avatar from "../../Common/Avatar";
import Edit from "./Edit";
import Input from "./Input";
import Like from "../Like";

export default function Card({ children, comment, post, commentId }) {
  const [content, setContent] = useState("");
  const [readMore, setReadMore] = useState(false);

  const [onEdit, setOnEdit] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  const [onReply, setOnReply] = useState(false);

  useEffect(() => {
    setContent(comment.content);
    setIsLike(false);
    setOnReply(false);
    // if(comment.likes.find(like => like._id === auth.user._id)){
    //     setIsLike(true)
    // }
  }, []);
  const styleCard = {
    opacity: 1,
    pointerEvents: "inherit",
  };
  return (
    <div className="comment_card mt-0" style={styleCard}>
      <div className="comment_content">
        <Link to="/">
          {/* <Avatar src={comment.user.avatar} size="small-avatar" /> */}
          <div className="mx-2">{comment.user.username}</div>
        </Link>
        <div
          className="flex-fill"
          style={{
            filter: "invert(1)",
            color: "white",
          }}
        >
          {onEdit ? (
            <textarea
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            <div>
              {comment.tag && comment.tag._id !== comment.user._id && (
                <Link to={`/profile/${comment.tag._id}`} className="mr-1">
                  @{comment.tag.username}
                </Link>
              )}
              <span class="content">
                {content.length < 50
                  ? content
                  : readMore
                  ? content + " "
                  : content.slice(0, 50) + " . . . "}
              </span>
              {content.length > 50 && (
                <span
                  className="readMore"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Hide content" : "Read more"}
                </span>
              )}
            </div>
          )}
        </div>

        <div
          className="d-flex align-items-center mx-2"
          style={{ cursor: "pointer" }}
        >
          <Edit />
          <Like />
        </div>
      </div>

      {/* <Input  >
                <div className="mr-1">
                    @sa
                </div>
            </Input> */}

      {children}
    </div>
  );
}
