import React from 'react'
import Avatar from './Avatar'

export default function User({children}) {
    return (
        <div className={`d-flex p-2 align-items-center justify-content-between w-100`}>
            <div>
                <div 
                className="d-flex align-items-center">
                    
                    <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="big-avatar" />

                    <div className="ml-3 mr-3" style={{transform: 'translateY(-2px)'}}>
                        <span className="d-block">Quang Sang</span>
                        
                        <small style={{opacity: 0.7}}>
                        <div style={{filter: 'invert(0)' }}>
                        Suggested for you
                </div>
                <div>
                        {/* 34 <i className="fas fa-image" /> */}
                    </div>
                        </small>
                    </div>
                </div>
            </div>
            
            {children}
        </div>
    )
}
