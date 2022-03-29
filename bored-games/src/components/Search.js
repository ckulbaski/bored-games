import * as React from 'react';
let link = 'https://api.boardgameatlas.com/api/search?name='
let client = '&client_id=kPogXgKnim'

let json;

function Search() {

    const [search, setSearch] = React.useState("");

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
        console.log(json.games)
        for (var key in json.games) {
            console.log(json.games[key].name);
        }
    }


    return (
        <div>
            <input 
                placeholder="Search"
                id="searchBar"
                onChange={onChangeSearch}
            />
            <button type="button" onClick={fetchText}> Search </button>
            <h3> {search} </h3>
        </div>
    );

}

export default Search;
