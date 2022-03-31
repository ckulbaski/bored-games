import React, { useState } from "react";
import { FaStar } from "react-icons/fa"
import StarRating from "./Stars";

function Review() {
    const [starValue, setStarValue] = React.useState(1);
    const [review, setReview] = useState("")
    const [name, setName] = useState("")

    // updates text in text area and name
    const updateReview = (name, post) => {
        setReview(post)
        setName(name)
    }

    // update stars
    function updateStars(value) {
        setStarValue(value)
    }

    // function to create review
    const createReview = () => {
        console.log(name + "\n")
        console.log(starValue + "\n")
        console.log(review + "\n")
    }

    return (
        <div>
            <h3>Please leave a review!</h3>


            <div>
                <div style={styles.container}>
                    <StarRating onChange={updateStars}></StarRating>
                </div>
                <div>
                    <input
                        type="text"
                        value="Nerd E. Gamer"
                        onChange={(e) => updateReview(e.target.value, review)}
                    />

                </div>
                <div>
                    <textarea
                        placeholder="Please enter your review"
                        required
                        onChange={(e) => updateReview(name, e.target.value)}

                    />
                </div>
                <div>
                    <button
                        type="button"
                        // add style
                        onClick={() => createReview()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>

    );

    //}
}

// default styling for right now
const styles = {
    container: {
        paddingRight: "85%"
    }

}

export default Review;
