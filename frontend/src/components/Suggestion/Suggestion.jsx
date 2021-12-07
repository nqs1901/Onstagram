import React from 'react'
import Follow from '../Common/Follow'
import User from '../Common/User'

export default function Suggestion() {
    return (
        <div className="mt-3">
        <User />

        <div className="d-flex justify-content-between align-items-center my-2">
            <h5 className="text-danger">Manage Network</h5>
            {
                
                <i className="fas fa-redo" style={{cursor: 'pointer'}}
                />
            }
        </div>

        {/* {
            suggestions.loading
            ? <img src={LoadIcon} alt="loading" className="d-block mx-auto my-4" /> */}
             <div className="suggestions">
                
                   
                        <User >
                            <Follow />
                        </User>

                        <User >
                            <Follow />
                        </User>
                    
                
            </div>
        

    

    </div>
    )
}
