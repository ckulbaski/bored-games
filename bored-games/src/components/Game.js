import * as React from 'react'
import { FaStar } from "react-icons/fa"
function Game(props){

    let name = props.name;
    let pic_url =props.pic;
    let stars = parseInt(props.stars);
    const starArray = Array(stars).fill(0);

    return(
        <div className = "game">
            <img src={pic_url} alt="none" width='50' height = '50' />
            <p> {name} </p>
            <div className="star-container">
                {starArray.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={14}
                            color="orange" //toggle
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );

}

export default Game;
