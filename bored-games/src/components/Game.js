import * as React from 'react'

function Game(props){

    let name = props.name;
    let pic_url =props.pic;

    return(
        <div>
            <img src={pic_url} />
            <h2> {name} </h2>
        </div>
    );

}

export default Game;
