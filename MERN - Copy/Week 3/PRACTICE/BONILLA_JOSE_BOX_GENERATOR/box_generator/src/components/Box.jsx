import React, { useState } from 'react'


const Box = (props) => {
    const [boxColor,setBoxColor] = useState("")


    const createNewColor = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        // shorthand ES6 syntax
        const newColor = [boxColor];
        console.log (newColor)
        
        // reset the form to blank values after submitting the form
        setBoxColor("");
    };
    const boxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor : `${boxColor}`
        
    };
    
    return(
        <><form onSubmit={createNewColor}>
            <div>
                <label>Color: </label>
                <input type="text" onChange={(e) => setBoxColor(e.target.value)} value={boxColor} />
            </div>
            <input type="submit" value="newColor" />
        </form><div style={boxStyle}>{props.children}</div></>
    );
    };

export default Box
