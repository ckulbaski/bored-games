import React from 'react';
import {useState} from 'react'
import { FaSearch, FaHome, FaCreativeCommonsBy } from "react-icons/fa"

function Navbar(props){
    let icon_size = 60;

    const [activePage, setActivePage] = useState("home");
    const [homeHover, setHomeHover] = useState("");
    const [searchHover, setsearchHover] = useState("");
    const [profileHover, setProfileHover] = useState("");

    function handleClick(page){
        console.log(page);
        setActivePage(page);
        props.onClick(page);
    }

    return(
      <div className="nav-bar">
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"}
          onClick={() => handleClick("home")}
          style={{ backgroundColor: homeHover }}
          onMouseEnter={() => setHomeHover("grey")}
          onMouseLeave={() => setHomeHover("")}
        > 
          <FaHome size={icon_size}/>     
        </div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} 
          style={{ backgroundColor: searchHover }}
          onClick={() => handleClick("search")}
          onMouseEnter={() => setsearchHover("grey")}
          onMouseLeave={() => setsearchHover("")}
        > 
            <FaSearch size={icon_size}/> 
        </div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} 
          style={{ backgroundColor: profileHover }}
          onClick={() => handleClick("profile")}
          onMouseEnter={() => setProfileHover("grey")}
          onMouseLeave={() => setProfileHover("")}
        >
            <FaCreativeCommonsBy size={icon_size} /> 
        </div>
      </div>
    );
}

/*

      <div className="nav-bar">
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("home")}>
        </div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("search")}> 
        </div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} onClick={()=>handleClick("profile")}> 
        </div>
      </div>
*/
export default Navbar;
