import React from 'react'
import PostBottom from './PostBottom'
import PostCenter from './PostCenter'
import PostTop from './PostTop'

 import Input  from './Comment/Input'
import Comment from './Comment/Comment'
export default function Post({post}) {
    return (
        <div className="card my-3"> 
            <PostTop post={post}/>
            <PostCenter post={post}/>
            <PostBottom post={post}/>
            <Comment post={post}/>
            <Input post={post}/>
        </div>
    )
}
