import * as React from 'react'
import Game from "./Game"
import StarRating from './Stars';

function GameList(props) {
    let hasGames = props.hasGames
    let games = props.games;
    console.log(games.length) // how many did we find?
    if (hasGames && games.length > 0)
        return (

            < div className="game-list" >
                <ul>
                    {games.map(game => (
                        <li key={game.id}>
                            <Game name={game.name} pic={game.image_url} stars={game.average_user_rating} description={game.description_preview} />
                        </li>
                    ))}
                </ul>
            </div >
        );

    else if (hasGames && games.length === 0)
        return <div>Board Game Not Found. Please try again.</div>;
    else
        return null
}
export default GameList;
