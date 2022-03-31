import * as React from 'react';
import Game from './Game';
import AdvancedSearch from './AdvancedSearch'
import { FaPlusSquare } from "react-icons/fa"



let normalsearch = 'https://api.boardgameatlas.com/api/search?fuzzy_match=true&name='
let catsearch = 'https://api.boardgameatlas.com/api/game/categories?pretty=true'
let client = '&client_id=kPogXgKnim'

let json;
let cat = [];

function Search() {

    const [search, setSearch] = React.useState("");
    const [games, setGames] = React.useState("");
    const [categories, setCategory] = React.useState("");
    const [ageRange, setAgeRange] = React.useState("");
    const [complexity,setComplexity] = React.useState("");
    const [numPlayers,setNumPlayers] = React.useState("");
    function onChangeSearch(event) {
        setSearch(event.target.value);
    }

    const toggleAdvancedSearchVisibility = () =>{
        var advancedSearchDiv=document.getElementById("AdvancedSearch");
        console.log(advancedSearchDiv.style.display);
        advancedSearchDiv.style.display = advancedSearchDiv.style.display == "none" ? "block" : "none";
    }

    async function fetchSearch() {
        let response = await fetch('https://api.boardgameatlas.com/api/search?name=' + search + client);

        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        setGames(json.games);
        console.log(json.games)
        //console.log(json.games)
        for (var key in json.games) {
            console.log(json.games[key].name);
        }

    }



    return (
        <div className='content'>
            <input
                className='search-bar'
                placeholder="Search"
                id="searchBar"
                onChange={onChangeSearch}
            />
            <button type="button" onClick={fetchSearch}> Search </button>
            <button type="button" onClick={toggleAdvancedSearchVisibility}>
                <FaPlusSquare size={10} />
            </button>
            <div className="advanced-search"
                id="AdvancedSearch">
                <AdvancedSearch setCategory={setCategory} setAgeRange={setAgeRange} setNumPlayers={setNumPlayers} setComplexity={setComplexity}/>
            </div>

            {games !== "" ?
                <div className="game-list">
                    <ul>
                        {games.map(game => (
                            <li key={game.id}>
                                <Game name={game.name} pic={game.image_url} stars={game.average_user_rating} />
                            </li>
                        ))}
                    </ul>
                </div>
                : null}
        </div>
    );

}

export default Search;
