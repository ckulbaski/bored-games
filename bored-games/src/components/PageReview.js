import { FaStar } from "react-icons/fa"
import * as React from 'react'

function PageReview(props) {
    let json = require('../Assets/Reviews.json')
    let name = ""
    let stars = parseInt(5);
    let review = ""
    const starArray = Array(stars).fill(0);

    React.useEffect(async () => {

        // this list is WAY too long
        /*let response = await fetch(catsearch + client);
        if (response.status === 200) {
            cat = await response.json();
        }
        console.log(cat.categories)*/

        //so I condensed it to this for now
        var num = randomInt();
        name = json[num].Username
        stars = parseInt(json[num].Rating)
        review = json[num].Review
        console.log(name, stars, review)

    }, []);
    const randomInt = () => {

        let num = Math.random() * (23 - 0) + 0;
        return num;
    }

    return (
        <div style={styles.container}>
            <p>Nerd E. Gamer</p>
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
            <p>Review:</p>

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

