import React from 'react';
import {useState} from 'react'
import { FaSearch, FaHome, FaCreativeCommonsBy } from "react-icons/fa"

function Navbar(props){
    let icon_size = 60;

    const [activePage, setActivePage] = useState("home");

    function handleClick(page){
        setActivePage(page);
        props.onClick(page);
    }

    return(
      <div className="nav-bar">
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("home")}>
            <FaHome size={icon_size}/>     
        </div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("search")}> 
            <FaSearch size={icon_size}/> 
        </div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("profile")}> 
            <FaCreativeCommonsBy size={icon_size} /> 
        </div>
      </div>
    );
}
export default Navbar;
