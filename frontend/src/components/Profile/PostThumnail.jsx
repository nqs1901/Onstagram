import React from "react";

export default function PostThumnail() {
  return (
    <div className="post_thumb">
      <div>
        <div className="post_thumb_display">
          {/* {
                            post.images[0].url.match(/video/i)
                            ?<video controls src={post.images[0].url} alt={post.images[0].url}
                            style={{filter: theme ? 'invert(1)' : 'invert(0)'}} /> */}

          <img
            src="https://images.fpt.shop/unsafe/fit-in/960x640/filters:quality(90):fill(white):upscale()/fptshop.com.vn/Uploads/Originals/2020/6/11/637274688345972278_iPhone_11_Green_2-up_US-EN_SCREEN.jpg"
            alt=""
            style={{ filter: "invert(0)" }}
          />

          <div className="post_thumb_menu">
            <i className="far fa-heart">3</i>
            <i className="far fa-comment">3</i>
          </div>
        </div>
      </div>
    
    </div>
  );
}
