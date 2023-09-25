import React, { useState} from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
        const [countAge, setState] = useState(age);
        const handleClick = () => {
            setState(countAge + 1);
        }
    return(
        <div >
            <h2>{lastName} , {firstName}</h2>
            <h3>Age: {countAge}</h3>
            <h3>Hair Color: {hairColor}</h3>
            <button onClick={handleClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard