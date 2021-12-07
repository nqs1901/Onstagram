import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Menu from './Menu'


export default function Header() {
    return (
        <div className="header bg-light">
        <nav className="navbar navbar-expand-lg navbar-light 
        bg-light justify-content-between align-middle">
            <div className="logo">
                <h1 className="navbar-brand text-uppercase p-0 m-0"
                onClick={() => window.scrollTo({top: 0})}>
                    Onstagram
                </h1>
            </div>

            <Search />

            <Menu />
        </nav>
    </div>
    )
}
