import React from 'react'
import Follow from '../Common/Follow'
import User from '../Common/User'

export default function Follower({setShowFollowers}) {
    return (
        <div className="follow">
            <div className="follow_box">
                <h5 className="text-center">Followers</h5>
                <hr/>
                
                <div className="follow_content">
                   
                            <User >
                                
                                     <Follow/>
                                
                            </User>
                  
                </div>
                

                <div className="close" onClick={() => setShowFollowers(false)}>
                    &times;
                </div>
                
            </div>
        </div>
    )
}
