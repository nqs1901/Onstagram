import React from 'react'
import Avatar from '../Common/Avatar'

export default function Info() {
    return (
        <div className="info">
      
                <div className="info_container">
                    <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="supper-avatar" />

                    <div className="info_content">
                        <div className="info_content_title">
                            <h2>quang sang</h2>
                           
                              <button className="btn btn btn-light btn-sm"
                                >
                                    Edit Profile
                                </button>
                                
                                {/* // : <FollowBtn user={user} /> */}
                            
                           
                            
                        </div>

                        <div className="mt-2 follow_btn">
                        <span className="mr-5">
                                3 Posts
                            </span>
                            <span className="mr-4">
                                3 Followers
                            </span>
                            <span className="ml-4" >
                                3 Following
                            </span>
                        </div>

                        <h6 className="mt-3">Nguyen Quang Sang</h6>
                       
                        <p>...</p>
                    </div>

                    {/* {
                        onEdit && <EditProfile setOnEdit={setOnEdit} />
                    } */}

                    {/* {
                        showFollowers &&
                        <Followers 
                        users={user.followers} 
                        setShowFollowers={setShowFollowers} 
                        />
                    }
                    {
                        showFollowing &&
                        <Following 
                        users={user.following} 
                        setShowFollowing={setShowFollowing} 
                        />
                    } */}
                </div>
    
    </div>
    )
}
