import React from 'react'

export default function Avatar({src, size}) {
    return (
        <img src={src} alt="avatar" className={size}
        style={{filter:'invert(1)'}} />
    )
}
