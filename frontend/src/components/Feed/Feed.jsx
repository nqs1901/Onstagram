import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Post from '../Post/Post'

export default function Feed() {
    const { homePosts, auth } = useSelector(state => state)
    return (
        <div className="posts">
            {
                homePosts.posts.map(post => (
    

                    <Post key={post.id} post={post} />
                ))
            }

       

        {/* {
            load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />
        }

        
        <LoadMoreBtn result={homePosts.result} page={homePosts.page}
        load={load} handleLoadMore={handleLoadMore} /> */}
    </div>
    )
}
