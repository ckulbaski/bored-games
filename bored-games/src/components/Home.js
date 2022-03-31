import * as React from 'react';
import { FaCentercode } from 'react-icons/fa';
import { FaStar } from "react-icons/fa"
let stars = parseInt(5);
const starArray = Array(stars).fill(0);

function Home() {

    return (

        <div className='content'>
            <div> Home </div>
            <div>
                Popular this week!
                <div style={styles.container}>
                    <div style={gameDiv.content}>
                        <ul style={styles.container} >
                            <div style={gameStyles1.content}>
                                <li>

                                    <div style={gameTile.content} >

                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg" alt="none" width="150" height="100" />
                                        <div>Catan</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={gameTile.content} >
                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1648216857239.png" alt="none" width="150" height="100" />
                                        <div>Encyclopedia</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                                <li>

                                    <div style={gameTile.content} >

                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1600224809797" alt="none" width="150" height="100" />
                                        <div>Cascadia</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                            </div>
                            <div style={gameStyles2.content}>
                                <li>

                                    <div style={gameTile.content} >

                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/userfiles/1647483633011-topbox2.jpg" alt="none" width="150" height="100" />
                                        <div>Dead Reckoning</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={gameTile.content} >
                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1635175402844" alt="none" width="150" height="100" />
                                        <div>Arch Nova</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div style={gameTile.content} >

                                        <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1588436282654" alt="none" width="150" height="100" />
                                        <div>Return to Dark Tower</div>
                                        <div className="star-container">
                                            {starArray.map((_, index) => {
                                                return (
                                                    <FaStar
                                                        key={index}
                                                        size={14}
                                                        color="orange"
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                    />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </li>

                            </div>

                        </ul>
                    </div>
                </div>
            </div >

        </div >

    );

}
const styles = {
    container: {
        paddingLeft: "7.25%",
        height: "80vh",
        overflow: "hidden",
        width: "85%",

    }

}

const gameStyles1 = {
    content: {
        width: "50%",
        float: "left",
    }
}
const gameStyles2 = {
    content: {
        width: "50%",
        float: "right",
    }

}
const gameTile = {
    content: {
        border: "solid 2px",
    }

}
const gameDiv = {
    content: {
        margin: "auto",
        width: "75%",

    }

}
export default Home;


