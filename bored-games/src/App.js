import './App.css';
import { useState } from 'react';
import Review from './components/Review'
import Search from './components/search'

function App() {

  const [activePage, changeActivePage] = useState("home");

  const onClickTab = (tab) => {
    console.log(tab);
    changeActivePage(tab);

  }


  return (

    < div className="App" >
      <div className="content">

        <div
          className={activePage === "search" ? "active-content" : "content1"}
        >
          <Search></Search>

        </div>
      </div>
      <div className="tab-bar">
        <div className={activePage === "home" ? "tabs active-tabs" : "tabs"} onClick={() => onClickTab("home")}> Home</div>
        <div className={activePage === "search" ? "tabs active-tabs" : "tabs"} onClick={() => onClickTab("search")}> Search</div>
        <div className={activePage === "profile" ? "tabs active-tabs" : "tabs"} onClick={() => onClickTab("profile")}> Profile</div>
      </div>
    </div >
  );
}

export default App;
