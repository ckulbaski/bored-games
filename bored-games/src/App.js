import './App.css';
import {useState} from 'react';

function App() {

    const [activePage, changeActivePage] = useState("home");

    const onClickTab = (tab) => {
        console.log(tab);
        changeActivePage(tab);
    }

    return (
    <div className="App">
      <div className = "content">
      </div>
      <div className="tab-bar">
        <div className="tabs active-tabs" onClick={()=>onClickTab("home")}> Home</div>
        <div className="tabs"onClick={()=>onClickTab("search")}> Search</div>
        <div className="tabs"onClick={()=>onClickTab("profile")}> Profile</div>
      </div>
    </div>
    );
}

export default App;
