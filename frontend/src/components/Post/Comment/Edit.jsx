import React from 'react'

export default function Edit() {
    const MenuItem = () => {
        return(
            <>
                <div className="dropdown-item" >
                    <span className="material-icons">create</span> Edit
                </div>
                <div className="dropdown-item">
                    <span className="material-icons">delete_outline</span> Remove
                </div>
            </>
        )
    }
    return (
        <div className="menu">
            <div className="nav-item dropdown">
                <span className="material-icons" id="moreLink" data-toggle="dropdown">
                    more_vert
                </span>

                <div className="dropdown-menu" aria-labelledby="moreLink">
                 {MenuItem()}
                             {/* <div className="dropdown-item" onClick={handleRemove}>
                                <span className="material-icons">delete_outline</span> Remove
                            </div> */}
                      
                </div>

            </div>
        
        
    </div>
    )
}
