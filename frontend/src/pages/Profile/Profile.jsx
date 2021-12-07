import React from 'react'
import Info from '../../components/Profile/Info'
import GridPost from '../../components/Profile/GridPost'

export default function Profile() {
    return (
        <div className="profile">
            
        <Info />

        

            <div className="profile_tab">
                <button className={ 'active'} >Posts</button>
                <button className={ 'active'} >Saved</button>
            </div>
        

        {/* {
            profile.loading 
            ? <img className="d-block mx-auto" src={LoadIcon} alt="loading" />
            : <>
                {
                    saveTab
                    ? <Saved auth={auth} dispatch={dispatch} /> */}
                    <GridPost />
                {/* }
            </>
        } */}
        
    </div>
    )
}
