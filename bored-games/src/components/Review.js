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
        <form>
            <div>
                <h3>Please leave a review!</h3>


                <div>
                    <StarRating onChange={updateStars}></StarRating>
                    <input
                        type="text"
                        placeholder="Please enter your name"
                        //
                        required
                        onChange={(e) => updateReview(e.target.value, review)}
                    />
                </div>

                <textarea
                    placeholder="Please enter your review"
                    required
                    onChange={(e) => updateReview(name, e.target.value)}
                />
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
        </form>
    );

    //}
}

// default styling for right now
/*const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

}*/

export default Review;
