import React from 'react'
import Avatar from '../Common/Avatar'

export default function Status() {
    return (
        <div className="status my-3 d-flex">
            <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="big-avatar" />
            
            <button className="ml-3 statusBtn flex-fill"
            >
                nqs, what are you thinking?
            </button>
        </div>
    )
}
