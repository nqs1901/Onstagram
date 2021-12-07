import React from 'react'
import Avatar from '../../Common/Avatar'
import Edit from './Edit'
import Input from './Input'
import Like from '../Like'

export default function Card({children}) {
    const styleCard = {
        opacity:  1 ,
        pointerEvents:  'inherit'
    }
    return (
        <div className="comment_card mt-2" style={styleCard}>
        <div  className="d-flex text-dark">
            <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="small-avatar" />
            <h6 className="mx-1">{"sang"}</h6>
        </div>

        <div className="comment_content">
            <div className="flex-fill" 
            style={{
                filter: 'invert(1)',
                color: 'white',
            }}>
              
                    {/* <textarea rows="5"  /> */}

                    <div>
                        {
                      
                            <div  className="mr-1">
                                @as
                            </div>
                        }
                        <span>
                            
                                comment
                            
                        </span>
                        {/* {
                            content.length > 100 &&
                            <span className="readMore" onClick={() => setReadMore(!readMore)}>
                                {readMore ? 'Hide content' : 'Read more'}
                            </span>
                        } */}
                    </div>
                
                

                <div style={{cursor: 'pointer'}}>
                    <small className="text-muted mr-3">
                        1 day ago
                    </small>

                    <small className="font-weight-bold mr-3">
                        2 likes
                    </small>

                  
                        <>
                            <small className="font-weight-bold mr-3"
                            >
                                update
                            </small>
                            <small className="font-weight-bold mr-3"
                           >
                                cancel
                            </small>
                        </>

                        : <small className="font-weight-bold mr-3"
                        >
                           'reply'
                        </small>
                    
                    
                </div>
                
            </div>


            <div className="d-flex align-items-center mx-2" style={{cursor: 'pointer'}}>
                <Edit  />
                <Like  />
            </div>
        </div> 
       
            {/* <Input  >
                <div className="mr-1">
                    @sa
                </div>
            </Input> */}
        

        {children}
    </div>
    )
}
