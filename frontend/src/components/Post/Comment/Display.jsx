import React from 'react'
import Card from './Card'

export default function Display({comment, post}) {
    return (
        <div className="comment_display">
        <Card comment={comment} post={post} commentId={comment._id} >
            <div className="pl-4">
                
                    
                        {/* <Card
                       
                         />
                        <Card>
                            <Card
                        
                        />
                        </Card>
               */}
                

      
                     {/* <div style={{cursor: 'pointer', color: 'crimson'}}
                    >
                        See more comments...
                    </div> */}

                    
                    {/* <div style={{cursor: 'pointer', color: 'crimson'}}
                   >
                        Hide comments...
                    </div> */}
                
            </div>
        </Card>
    </div>
    )
}
