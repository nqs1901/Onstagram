import React from 'react'
import Avatar from '../Common/Avatar'
import { useSelector, useDispatch } from 'react-redux'


export default function Status() {
    const { auth } = useSelector(state => state)
    console.error("AAA", auth)
    return (
        <div className="status my-3 d-flex">
            <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="big-avatar" />
            
            <button className="ml-3 statusBtn flex-fill"
            >
                , what are you thinking?
            </button>
        </div>
    )
}
