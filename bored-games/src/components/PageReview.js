import { FaStar } from "react-icons/fa"
import * as React from 'react'

function PageReview(props) {
    let json = require('../Assets/Reviews.json')
    let name = ""
    let stars = parseInt(5);
    let review = ""
    let starArray = Array(stars).fill(0);

    function getReview() {

        // this list is WAY too long
        /*let response = await fetch(catsearch + client);
        if (response.status === 200) {
            cat = await response.json();
        }
        console.log(cat.categories)*/

        //so I condensed it to this for now
        if (Object.entries(props).length === 0) {
            var num = randomInt();
            name = json.reviews[num].Username
            stars = parseInt(json.reviews[num].Rating)
            starArray = Array(stars).fill(0);
            review = json.reviews[num].Review
            console.log(name)
        }

    }
    const randomInt = () => {

        let num = Math.random() * (13 - 0) + 0;
        console.log(parseInt(num))
        return parseInt(num);
    }


    return (
        <div style={styles.container} onLoad={getReview()}>
            <p>{name}</p>
            <p><div className="star-container">
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
            </div></p>
            <p>{review}</p>

        </div>
    );
}

const styles = {
    container: {

        height: "80vh",
        width: "100%",


    }

}
export default PageReview;

