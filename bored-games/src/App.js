import './App.css';
import { useState } from 'react';
import * as React from 'react';
import Search from './components/Search'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {

  const [activePage, setActivePage] = useState("home");
  const [homeHover, setHomeHover] = useState("");
  const [searchHover, setsearchHover] = useState("");
  const [profileHover, setProfileHover] = useState("");

  function getActivePage() {
    if (activePage === "home") {
      console.log("home");
      return <Home />;
    }
    if (activePage === "search") {
      console.log("search");
      return <Search />;
    }
    if (activePage === "profile") {
      console.log("profile");
      return <Profile />;
    }
    return null;
  }





  return (
    <div className="App" >
      <div className="content">
        {getActivePage()}
      </div>
      <div className="tab-bar">
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"}
          onClick={() => setActivePage("home")}
          style={{ backgroundColor: homeHover }}
          onMouseEnter={() => setHomeHover("grey")}
          onMouseLeave={() => setHomeHover("")}
        > Home</div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} onClick={() => setActivePage("search")} style={{ backgroundColor: searchHover }}
          onMouseEnter={() => setsearchHover("grey")}
          onMouseLeave={() => setsearchHover("")}
        > Search</div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} onClick={() => setActivePage("profile")} style={{ backgroundColor: profileHover }}
          onMouseEnter={() => setProfileHover("grey")}
          onMouseLeave={() => setProfileHover("")}
        > Profile</div>
      </div>
    </div >
  );

}
export default App;
