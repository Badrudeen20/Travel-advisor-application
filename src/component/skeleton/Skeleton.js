import React from 'react'
import './style.scss'
const Skeleton = () => {
    return (
        <>
        <div className="img_skeleton animated-bg"></div>
        <div className="detail_skeleton">
            <div className="name_skeleton animated-bg"></div>
            <div className="rating_skeleton animated-bg"></div>
        </div>
        </>
    )
}

export default Skeleton
