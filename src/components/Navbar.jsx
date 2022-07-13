import React from "react"
import reactLogo from "../images/reactjs-icon.png"
import "./Navbar.css"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <img className="logo--image" src={reactLogo} alt="React Logo"></img>
                <h3 className="logo--text">ReactFacts</h3>
            </div>
            <h4 className="title">React Course - Project 1</h4>
        </nav>
    )
}