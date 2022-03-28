link = 'https://api.boardgameatlas.com/api/search?name='
gameName = 'catan'
client = '&client_id=kPogXgKnim'
let json;

//console.log(response);
console.log(link + gameName + client);


async function fetchText() {
    let response = await fetch('https://api.boardgameatlas.com/api/search?name=' + gameName + client);

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

fetchText();

