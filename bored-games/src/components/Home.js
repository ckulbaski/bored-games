import * as React from 'react';
import GameList from './GameList'
import LoadingSpinner from './LoadingSpinner'
let client = '&client_id=kPogXgKnim'
let json;

function Home() {

    const [games, setGames] = React.useState("");
    const [hasGames, setHasGames] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);

    async function fetchGames() {
        setLoading(true);
        let query = 'https://api.boardgameatlas.com/api/search?lt_reddit_week_count=50';
        query += "&fields=name,description,image_url,average_user_rating,categories,description_preview";
        query += "&limit=10";
        query += client;
        console.log(query);

        let response = await fetch(query)
            .then(setHasGames(true));
        console.log(response.status); // 200
        console.log(response.statusText); // OK

        if (response.status === 200) {
            json = await response.json();
            // handle data
        }
        console.log(json.games);
        setGames(json.games);
        setLoading(false);
    }

    React.useEffect(async () => {
        fetchGames();
    }, []);

    return (

        <div className='content'>
            <h1> Popular this week </h1>
            {isLoading ?
                <LoadingSpinner />
                : <GameList hasGames={hasGames} games={games} />
            }
        </div>
    );

}

export default Home;
