import * as React from 'react';
import { FaCentercode } from 'react-icons/fa';
import Stars from './Stars'


function Home() {

    return (

        <div className='content'>
            <div> Home </div>
            <div>
                Popular this week!
                <div style={styles.container}>
                    <ul style={styles.container} >
                        <div style={gameStyles1.content}>
                            <li>

                                <div style={gameTile.content} >

                                    <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg" alt="none" width="150" height="100" />
                                    Catan
                                    <Stars></Stars>
                                </div>
                            </li>
                            <li>
                                <div style={gameTile.content} >
                                    <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1648216857239.png" alt="none" width="150" height="100" />
                                    Encyclopedia
                                    <Stars></Stars>
                                </div>
                            </li>
                        </div>
                        <div style={gameStyles2.content}>
                            <li>

                                <div style={gameTile.content} >

                                    <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/userfiles/1647483633011-topbox2.jpg" alt="none" width="150" height="100" />
                                    Dead Reckoning
                                    <Stars></Stars>
                                </div>
                            </li>
                            <li>
                                <div style={gameTile.content} >
                                    <img src="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1635175402844" alt="none" width="150" height="100" />
                                    Arch Nova
                                    <Stars></Stars>
                                </div>
                            </li>
                        </div>

                    </ul>
                </div>
            </div >

        </div >

    );

}
const styles = {
    container: {
        border: "solid 2px",
        marginRight: 100,
        marginLeft: 100,
        height: "80vh",
        overflow: "hidden",
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
export default Home;


