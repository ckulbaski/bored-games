import * as React from 'react'
import Game from "./Game"

function GameList(props){
    let hasGames = props.hasGames
    let games = props.games;
    if(hasGames)
    return(
        <div className="game-list">
            <ul>
                {games.map(game => (
                    <li key={game.id}>
                        <Game name={game.name} pic={game.image_url} stars={game.average_user_rating} description={game.description} />
                    </li>
                ))}
            </ul>
        </div>
    );
    else return null;
}
export default GameList;
