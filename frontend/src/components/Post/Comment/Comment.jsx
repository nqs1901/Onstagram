import React from "react";
import Display from "./Display";

export default function Comment() {
  return (
    <div className="comments">
     
        <Display
       
        />
    

      
        <div
          className="p-2 border-top"
          style={{ cursor: "pointer", color: "crimson" }}
          
        >
          {/* See more comments... */}
        </div>
     
          {/* <div
            className="p-2 border-top"
            style={{ cursor: "pointer", color: "crimson" }}
            
          >
            Hide comments...
          </div> */}
    
    </div>
  );
}
