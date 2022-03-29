import * as React from 'react';
import Game from './Game';
let link = 'https://api.boardgameatlas.com/api/search?name='
let client = '&client_id=kPogXgKnim'

let json;

function Search() {

    const [search, setSearch] = React.useState("");
    const [games, setGames] = React.useState("");

    function onChangeSearch(event){
        setSearch(event.target.value);
    }

    async function fetchText() {
        let response = await fetch('https://api.boardgameatlas.com/api/search?name=' + search + client);

        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        setGames(json.games);
        console.log(json.games)
        for (var key in json.games) {
            console.log(json.games[key].name);
        }
    }


    return (
        <div class='content'>
            <input 
                className='search-bar'
                placeholder="Search"
                id="searchBar"
                onChange={onChangeSearch}
            />
            <button type="button" onClick={fetchText}> Search </button>
            {games !== "" ?
            <div className="game-list">
            <ul>
                {games.map(game=>(
                    <li>
                        <Game name={game.name}/>
                    </li>
                ))}
            </ul>
            </div>
            : null }
        </div>
    );

}

export default Search;
