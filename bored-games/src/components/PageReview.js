import { FaStar } from "react-icons/fa"
import * as React from 'react'

function PageReview(props) {
    let json = require('../Assets/Reviews.json')
    let name = ""
    let stars = parseInt(5);
    let review = ""
    let starArray = Array(stars).fill(0);

    function getReview() {

        if (Object.entries(props).length === 0) {
            var num = randomInt();
            name = json.reviews[num].Username
            stars = parseInt(json.reviews[num].Rating)
            starArray = Array(stars).fill(0);
            review = json.reviews[num].Review
            console.log(name)
        }
        else {
            name = props.name
            stars = props.rating
            starArray = Array(props.stars).fill(0);
            review = props.review

        }

    }
    const randomInt = () => {

        let num = Math.random() * (13 - 0) + 0;
        console.log(parseInt(num))
        return parseInt(num);
    }


    return (
        <div style={styles.container} onLoad={getReview()}>
            <div>{name}</div>
            <div className="">
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
            <div>{review}</div>

        </div>
    );
}

const styles = {
    container: {

        height: "30vh",
        width: "100%",
        border: "solid .5px",


    }

}
export default PageReview;

