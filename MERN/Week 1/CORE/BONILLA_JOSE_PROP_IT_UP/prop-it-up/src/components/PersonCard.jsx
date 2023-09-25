import React from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    return(
        <div className="personCard">
            <h2>{lastName} , {firstName}</h2>
            <h3>Age: {age}</h3>
            <h3>Hair Color: {hairColor}</h3>
        </div>
    )
}

export default PersonCard