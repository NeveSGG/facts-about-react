import React from "react"
import backgroundImg from "../images/reactjs-icon2.png"
import "./Main.css"

export default function Main(){
    return (
        <div className="mainPage">
            <h1 className="titleText">Fun facts about React</h1>
            {/* <img></img> */}
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}