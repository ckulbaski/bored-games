import * as React from 'react';
import Game from './Game';
let normalsearch = 'https://api.boardgameatlas.com/api/search?name='
let catsearch = 'https://api.boardgameatlas.com/api/game/categories?pretty=true'
let client = '&client_id=kPogXgKnim'

let json;
let cat = [];

function Search() {

    const [search, setSearch] = React.useState("");
    const [games, setGames] = React.useState("");
    const [categories, setCategory] = React.useState("");
    function onChangeSearch(event) {
        setSearch(event.target.value);
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
        //console.log(json.games)
        for (var key in json.games) {
            console.log(json.games[key].name);
        }

    }


    React.useEffect(async () => {

        // this list is WAY too long
        /*let response = await fetch(catsearch + client);
        if (response.status === 200) {
            cat = await response.json();
        }
        console.log(cat.categories)*/

        //so I condensed it to this for now
        cat = require('../Assets/Categories.json');

        console.log(cat.categories)
        setCategory(cat.categories)
    }, []);
    function getOption() {
        let catcat = document.getElementById('Category').value
        console.log(games)
        let newGames = games
        console.log(newGames)
        if (games !== "") {
            console.log("catcat = ", catcat)



            //  loop through every game
            for (var key in newGames) {
                let people = false
                // similarly every ID in category and check
                for (var keys in newGames[key].categories) {
                    console.log(newGames[key].name)
                    console.log(newGames[key].categories[keys].id)
                    console.log(catcat)
                    console.log(catcat === newGames[key].categories[keys].id)
                    if (newGames[key].categories[keys].id == catcat) {
                        people = true;
                    }
                }

                if (people == false) {
                    console.log("deleting ", games[key].name)
                    delete newGames[key]
                }

            }
        }
        for (var key in newGames) {
            console.log(newGames[key].name);
        }
        // does not re-render page for some reason
        setGames(newGames)

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
            <select name="Category" id="Category" onChange={getOption}>
                <option>Categories</option>
                {categories !== "" ? categories.map(category => (
                    <option value={category.id} >{category.name}</option>
                ))

                    : null}
            </select>

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
