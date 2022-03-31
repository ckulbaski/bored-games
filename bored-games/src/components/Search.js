import * as React from 'react';
import Game from './Game';
import AdvancedSearch from './AdvancedSearch'
import { FaPlusSquare } from "react-icons/fa"



let client = '&client_id=kPogXgKnim'

let json;

function Search() {

    const [name, setName] = React.useState("");
    const [games, setGames] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [ageRange, setAgeRange] = React.useState("");
    const [complexity,setComplexity] = React.useState("");
    const [numPlayers,setNumPlayers] = React.useState("");

    function onChangeName(event) {
        console.log(event.target.value);
        setName(event.target.value);
    }
    function onChangeCategory(value) {
        console.log(value);
        setCategory(value);
    }
    function onChangeNumPlayers(value) {
        console.log(value);
        setNumPlayers(value);
    }
    function onChangeAgeRange(value) {
        console.log(value);
        setAgeRange(value);
    }
    function onChangeComplexity(value) {
        console.log(value);
        setComplexity(value);
    }

    const toggleAdvancedSearchVisibility = () =>{
        var advancedSearchDiv=document.getElementById("AdvancedSearch");
        advancedSearchDiv.style.display = advancedSearchDiv.style.display == "none" ? "block" : "none";
    }

    async function fetchSearch() {
        var advancedSearchDiv=document.getElementById("AdvancedSearch");
        advancedSearchDiv.style.display = "none";
        let n = name === "" ? "" : "&name="+name;
        let age = age === undefined ? "" : "&age="+ageRange;
        let num = num === undefined ? "" : "&max_players="+numPlayers;
        let query = 'https://api.boardgameatlas.com/api/search?fuzzy_match=true' +n + age + num;

        query += "&fields=name,description,image_url,average_user_rating,categories";
        query += "&limit=100";
        query+=client;
        console.log(query);

        let response = await fetch(query);
        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        console.log(json.games);
        var gameList=json.games;
        if(category != ""){
            gameList = [];
            for (var key in json.games) {
                for(var cat in json.games[key].categories){
                    console.log(json.games[key].categories[cat].id);
                    if(json.games[key].categories[cat].id == category){
                        gameList.push(json.games[key]);
                        break;
                    }
                }
            }
        }
        console.log(gameList);
        setGames(gameList);

    }

    return (
        <div className='content'>
            <input
                className='search-bar'
                placeholder="Search"
                id="searchBar"
                onChange={onChangeName}
            />
            <button type="button" onClick={fetchSearch}> Search </button>
            <button type="button" onClick={toggleAdvancedSearchVisibility}>
                <FaPlusSquare size={10} />
            </button>
            <div className="advanced-search"
                id="AdvancedSearch">
                <AdvancedSearch setCategory={onChangeCategory} setAgeRange={onChangeAgeRange} setNumPlayers={onChangeNumPlayers} setComplexity={onChangeComplexity}/>
            </div>

            {games !== "" ?
                <div className="game-list">
                    <ul>
                        {games.map(game => (
                            <li key={game.id}>
                                <Game name={game.name} pic={game.image_url} stars={game.average_user_rating} description={game.description} />
                            </li>
                        ))}
                    </ul>
                </div>
                : null}
        </div>
    );

}

export default Search;
