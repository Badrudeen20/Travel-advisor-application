import React, { useState } from 'react'
import './style.scss'
const Nav = () => {
    const [search,setSeach] = useState(false)
    return (
        <nav>
            <ul>
                <li><h4>Travel Adviser</h4></li>
                <li>
                    <form className={search? 'active':''}>
                        <input type="text" placeholder="Search" />
                    </form>
                    <span onClick={()=>setSeach(!search)} className={`ion-ios7-search-strong ${search? 'active':''}`}></span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
