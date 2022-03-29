import './App.css';
import {useState} from 'react';
import * as React from 'react';
import Review from './components/Review'
import Search from './components/Search'
import Home from './components/Home'
import Profile from './components/Profile'

function App() {

    const [activePage, setActivePage] = useState("home");

    function getActivePage () {
        if(activePage === "home"){  
            console.log("home");
            return <Home />;
        }
        if(activePage === "search"){
            console.log("search");
            return <Search />;
        }
        if(activePage === "profile"){
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
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"} onClick={()=>setActivePage("home")}> Home</div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} onClick={()=>setActivePage("search")}> Search</div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} onClick={()=>setActivePage("profile")}> Profile</div>
      </div>
    </div >
    );

}
export default App;
