import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


function StarRating(updateStars) {

    const starArray = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(1);
    const [hoverValue, setHoverValue] = useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
        updateStars.onChange(value);
        //console.log("User rated this %d stars\n", value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    //render() {
    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {starArray.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}

                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey} //toggle
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
        </div>
    );

    //}
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

}

export default StarRating;
