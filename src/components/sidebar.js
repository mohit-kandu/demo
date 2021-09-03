import React from 'react'
import { SidebarData } from "./SidebarData"
import { IconContext } from "react-icons"
import "./sidebar.css"


export default function Sidebar({ sidebar }) {

    return (
        <>
            <IconContext.Provider value={{ color: '#999' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" >
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.class}>
                                    <span>{item.title}</span>
                                </li>
                            )
                        })}
                        <div className="cart-container">
                            <button className="nav-text cart-btn">Cart</button>
                        </div>
                    </ul>
                </nav>
            </IconContext.Provider>


        </>
    )
}

