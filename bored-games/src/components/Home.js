import * as React from 'react';
import Game from './Game'
let client = '&client_id=kPogXgKnim'
let json;

function Home() {

    const [games, setGames] = React.useState("");

    async function fetchGames() {
        let query = 'https://api.boardgameatlas.com/api/search?lt_reddit_week_count=50';
        query += "&fields=name,description,image_url,average_user_rating,categories,description_preview";
        query += "&limit=10";
        query += client;
        console.log(query);

        let response = await fetch(query);
        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        console.log(json.games);
        setGames(json.games);
    }

    React.useEffect(async () => {
        fetchGames();
    }, []);

    return (

        <div className='content'>
            <h3> Popular this week </h3>
            {games !== "" ?
                <div className="game-list">
                    <ul>
                        {games.map(game => (
                            <li key={game.id}>
                                <Game name={game.name} pic={game.image_url} stars={game.average_user_rating} description={game.description_preview} />
                            </li>
                        ))}
                    </ul>
                </div>
                : null}
        </div>
    );

}

export default Home;
