import * as React from 'react';
import AdvancedSearch from './AdvancedSearch'
import { FaPlusSquare, FaSearch } from "react-icons/fa"
import LoadingSpinner from "./LoadingSpinner"
import GameList from "./GameList"



let client = '&client_id=kPogXgKnim'

// alt id
//let client ='&client_id=QnMGMpLsyy' 

let json;

function Search() {

    const [name, setName] = React.useState("");
    const [games, setGames] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [ageRange, setAgeRange] = React.useState("");
    const [complexity, setComplexity] = React.useState("");
    const [numPlayers, setNumPlayers] = React.useState("");
    const [isLoading, setLoading] = React.useState(false);
    const [hasGames, setHasGames] = React.useState(false);
    const [searchCount, setSearchCount] = React.useState(0);

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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchSearch();
        }
    }

    const toggleAdvancedSearchVisibility = () => {
        var advancedSearchDiv = document.getElementById("AdvancedSearch");
        advancedSearchDiv.style.display = advancedSearchDiv.style.display === "none" ? "block" : "none";
    }

    async function fetchSearch() {
        setLoading(true);
        var advancedSearchDiv = document.getElementById("AdvancedSearch");
        advancedSearchDiv.style.display = "none";
        let n = name === "" ? "" : "&name=" + name;
        let age = ageRange === "" ? "" : "&min_age=" + ageRange;
        let nu = numPlayers === "" ? "" : "&max_players=" + numPlayers;

        let query = 'https://api.boardgameatlas.com/api/search?fuzzy_match=true' + n + age + nu;

        query += "&fields=name,description,image_url,average_user_rating,categories,description_preview";
        query += "&limit=100";
        query += client;
        console.log(query);

        let response = await fetch(query)
            .then(setHasGames(true), setSearchCount(searchCount + 1));
        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        console.log(json.games);
        var gameList = json.games;
        if (category !== "") {
            gameList = [];
            for (var key in json.games) {
                for (var cat in json.games[key].categories) {
                    console.log(json.games[key].categories[cat].id);
                    if (json.games[key].categories[cat].id === category) {
                        gameList.push(json.games[key]);
                        break;
                    }
                }
            }
        }
        setAgeRange("");
        setNumPlayers("");
        setCategory("");
        setName("");
        console.log(gameList);
        setGames(gameList);
        setLoading(false);

    }
    /* this is the search button, if you need to put it back put it as the
     * first child of 'content' div
            <button
                className="search-button"
                type="button" 
                onClick={fetchSearch} 
                disabled={isLoading}> 
                <FaSearch size={20}/>
            </button>
     */

    return (
        <div className='content'>
            <input
                className='search-bar'
                placeholder="Search"
                id="searchBar"
                onChange={onChangeName}
                onKeyDown={handleKeyDown}
            />
            <button
                className="search-button"
                type="button"
                onClick={fetchSearch}
                disabled={isLoading}>
                <FaSearch size={15} />
            </button>
            <button type="button" onClick={toggleAdvancedSearchVisibility}
                className="adv-button">
                <FaPlusSquare size={15} />
            </button>
            <div className="advanced-search"
                id="AdvancedSearch">
                <AdvancedSearch setCategory={onChangeCategory} setAgeRange={onChangeAgeRange} setNumPlayers={onChangeNumPlayers} setComplexity={onChangeComplexity} />
            </div>

            {isLoading ?
                <LoadingSpinner />
                : <GameList hasGames={hasGames} games={games} count={searchCount} />
            }
        </div>
    );

}

export default Search;
