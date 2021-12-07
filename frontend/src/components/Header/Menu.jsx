import React from 'react'
import Avatar from '../Common/Avatar'

export default function Menu() {
    const navLinks = [
        { label: 'Home', icon: 'home', path: '/'},
        { label: 'Message', icon: 'near_me', path: '/message'},
        { label: 'Discover', icon: 'explore', path: '/discover'}
    ]
    return (
        <div className="menu">
        <ul className="navbar-nav flex-row">
            {
                navLinks.map((link, index) => (
                    <li className='nav-item px-2'>
                        <div className="nav-link">
                            <span className="material-icons">{link.icon}</span>
                        </div>
                    </li>
                ))
            }

            <li className="nav-item dropdown" style={{opacity: 1}} >
                <span className="nav-link position-relative" id="navbarDropdown" 
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                    <span className="material-icons" 
                    style={{color:'crimson' }}>
                        favorite
                    </span>

                    <span className="notify_length">3</span>

                </span>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                style={{transform: 'translateX(75px)'}}>
                    {/* <NotifyModal /> */}
                </div>
                    
            </li>
       
        
            <li className="nav-item dropdown" style={{opacity: 1}} >
                <span className="nav-link dropdown-toggle" id="navbarDropdown" 
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <Avatar src="https://res.cloudinary.com/devat-channel/image/upload/v1631811242/v-network/vj9pee0vwrifc1bugijz.jpg" size="medium-avatar" />
                </span>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="dropdown-item">Profile</div>

                <label htmlFor="theme" className="dropdown-item"
                >

                    
                </label>

                <div className="dropdown-divider"></div>
                <div className="dropdown-item" 
                >
                    Logout
                </div>
            </div>
        </li>
    </ul>
</div>

    )
}
