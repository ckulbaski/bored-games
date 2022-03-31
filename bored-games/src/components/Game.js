import * as React from 'react'
import { FaStar } from "react-icons/fa"
import Page from './Page';
function Game(props){

    let name = props.name;
    let pic_url =props.pic;
    let stars = parseInt(props.stars);
    const starArray = Array(stars).fill(0);
    const [aPage, setPage] = React.useState("");

    function goPage(){
        if(aPage !== ""){
            return Page(aPage);
        }
        return null;
    }

    return(
        <div className = "game" onClick={() => setPage(props)}>
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
                <div>
                {goPage()}
                </div>
            </div>
        </div>
    );

}

export default Game;
