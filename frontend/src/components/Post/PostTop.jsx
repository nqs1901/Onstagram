import React from "react";
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import Avatar from "../Common/Avatar";

export default function PostTop({post}) {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log("post",post)
  return (
    <div className="card_header">
      <div className="d-flex">
        <Avatar src={post.user.avatar} size="big-avatar" />

        <div className="card_name">
          <h6 className="m-0">
            <div className="text-dark">
                {post.user.username}
            </div>
          </h6>
          <small className="text-muted">
          {moment(post.createdAt).fromNow()}
          </small>
        </div>
      </div>

      <div className="nav-item dropdown">
        <span className="material-icons" id="moreLink" data-toggle="dropdown">
          more_horiz
        </span>

        <div className="dropdown-menu">
          
            <>
              <div className="dropdown-item" >
                <span className="material-icons">create</span> Edit Post
              </div>
              <div className="dropdown-item" >
                <span className="material-icons">delete_outline</span> Remove
                Post
              </div>
            </>
         

          <div className="dropdown-item">
            <span className="material-icons">content_copy</span> Copy Link
          </div>
        </div>
      </div>
    </div>
  );
}
