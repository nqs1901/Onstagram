import React from 'react'
import Status from '../../components/Status/Status'
import Feed from '../../components/Feed/Feed'
import Suggestion from '../../components/Suggestion/Suggestion'

export default function Home() {
    return (
        <div className="home row mx-0">
            <div className="col-md-8">
                <Status />

                
                   
                         <Feed />
                
                
            </div>
                <div className=" col-md-4">
                    <div className="suggestion">
                        <Suggestion/>

                    </div>
           
            </div>
            
        </div>
    )
}
