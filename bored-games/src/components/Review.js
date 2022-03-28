import React, { useState } from "react";
import { FaStar } from "react-icons/fa"
import StarRating from "./Starz";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


function Review() {


    return (
        <form>
            <div>
                <h2>RATE OUR SERVICE</h2>

                <StarRating></StarRating>
                <div>
                    <input
                        type="text"
                        placeholder="input your name"
                        required
                    //style={styles.input}
                    //value={review.Name}
                    //onChange={(e) => setReview({ ...review, Name: e.target.value })}
                    />
                </div>

                <textarea
                    placeholder="what's your feedback"
                    required
                //style={styles.textarea}
                //value={review.review}
                //onChange={(e) => setReview({ ...review, review: e.target.value })}
                />
                <button
                    type="submit"
                    //style={styles.button}
                    class="btn btn-primary"
                //onClick={createReview}
                >
                    submit
                </button>
            </div>
        </form>
    );

    //}
}

/*const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

}*/

export default Review;
