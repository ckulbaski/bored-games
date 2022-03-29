import './App.css';
import {useState} from 'react';
import * as React from 'react';
import Review from './components/Review'
import Search from './components/Search'
import Home from './components/Home'
import Profile from './components/Profile'
import Navbar from './components/Navbar'

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

    function handleNavClick(page){
        setActivePage(page);
    }


    return (
    <div className="App" >
      <div className="content">
          {getActivePage()}
      </div>
      <Navbar onClick = {handleNavClick}/>
    </div >
    );

}
export default App;
