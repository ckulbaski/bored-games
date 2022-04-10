import * as React from 'react'
import { FaStar } from "react-icons/fa"
import Review from './Review'
import PageReview from '../components/PageReview'
function Page(props) {

    let name = props.name;
    let pic_url = props.pic;
    let stars = parseInt(props.stars);
    let description = props.description;
    let starArray = Array(stars).fill(0);


    function goBack() {
        window.location.reload(false);
    }
    return (

        <div class="page-background">
            <div class="page-container">
                <button type="button" onClick={() => goBack()}> BACK </button>
                <div>
                    <img class="profile-image"
                        src={pic_url}
                        alt="none"
                        width="200"
                        height="200"

                    />
                </div>
                <div class="page-information">
                    <h2>{name}</h2>
                    <h4>
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
                        </div>
                    </h4>
                    <h5>Description:</h5>
                    <div class="page-description">
                        {description}
                    </div>
                    <Review />
                    <div>
                        <div>


                            <div>
                                <PageReview />
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
}

export default Page;