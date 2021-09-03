import React from 'react'
import data from "../Data/data.jsx"
import { useState, useEffect } from 'react'
import { CgMenuLeft } from "react-icons/cg"
import { RiShoppingCartLine } from "react-icons/ri"
import "./main.css"
import Sidebar from '../sidebar.js'

export default function Main() {
    const [mediaWidth, setMediaWidth] = useState(window.innerWidth)
    const [sidebar, setSidebar] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setMediaWidth(window.innerWidth)
        })
    }, [])
    return (
        <>
            {mediaWidth > 991
                ?
                <>
                    <div className="logo">
                        <h1>lorem ipsum</h1>
                    </div>
                    <Sidebar sidebar={true} />
                    <div className="main">
                        <div className="grid-container">
                            <div className="grid-item1">
                                What are you having for lunch?
                            </div>
                            <div className="grid-item2">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur maiores illum placeat non veritatis asperiores.</p>
                                <span style={{ marginLeft: "0" }} className="grid-item-line"><hr /></span>
                            </div>
                        </div>
                        <div className="pizza-grid">
                            {data.map(item => {
                                return (
                                    <div className="pizza-item" key={item.id}>
                                        <img src={item.image} alt="pizza" />
                                        <h2>{item.name}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="nav_bar">
                        <div className="sidebar_btn" ><CgMenuLeft onClick={() => setSidebar(!sidebar)} /></div>
                        <h6>Lorem</h6>
                        <div className="shopping-cart"><RiShoppingCartLine /></div>
                    </div>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <Sidebar sidebar={sidebar} />
                    </div>
                    <div className="main">
                        <div className="grid-item1">
                            What are you having for lunch?
                        </div>
                        <div className="pizza-grid">
                            {data.map(item => {
                                return (
                                    <div className="pizza-item" key={item.id}>
                                        <img src={item.image} alt="pizza" />
                                        <h2>{item.name}</h2>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="grid-item2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consectetur maiores illum placeat non veritatis asperiores.</p>
                            <span style={{ marginLeft: "0" }} className="grid-item-line"><hr /></span>
                        </div>
                    </div>
                </>
            }

        </>
    )
}
