import React, { useState } from "react";
import PageReview from "./PageReview";
import StarRating from "./Stars";

function Review() {
    const [starValue, setStarValue] = React.useState(1);
    const [review, setReview] = useState("")
    const [name, setName] = useState("")
    const [postit, setPost] = useState(false)

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
        /*console.log(name + "\n")
        console.log(starValue + "\n")
        console.log(review + "\n")*/
        setName("Nerd E. Gamer")
        setPost(true)
    }

    return (
        <div>
            <h3>Please leave a review!</h3>


            <div>
                <div style={styles.container}>
                    <StarRating onChange={updateStars}></StarRating>
                </div>
                <div>
                    <div>
                        Nerd E. Gamer

                    </div>

                </div>
                <div>
                    <textarea
                        className="review-textarea"
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
                    {postit !== false ? <PageReview name={name} stars={starValue} review={review} /> : null}

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
