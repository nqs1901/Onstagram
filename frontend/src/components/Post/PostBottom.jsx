import React from "react";
import Like from "./Like";
import Send from "../../img/send.svg";

export default function PostBottom() {
  return (
    <div className="card_footer">
      <div className="card_icon_menu">
        <div className="card-icon-menu-react">
          <Like
          />
          {/* <div className="text-dark">
            <i className="far fa-comment" />
          </div> */}

          <img src={Send} alt="Send" />
        </div>

        
          {/* <i className="fas fa-bookmark text-info" /> */}
     
           <i className="far fa-bookmark" />
        
      </div>

      <div className="d-flex justify-content-between">
        <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
          1 likes
        </h6>

        <h6 style={{ padding: "0 25px", cursor: "pointer" }}>
          2 comments
        </h6>
      </div>

      {/* {isShare && (
        <ShareModal url={`${BASE_URL}/post/${post._id}`} theme={theme} />
      )} */}
    </div>
  );
}
