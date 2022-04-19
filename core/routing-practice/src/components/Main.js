import React from 'react';
import { useParams } from 'react-router-dom';

const Main = (props) =>{
    const { word, color, coloredBackground } = useParams();
    return (
        <div>
            { isNaN(word)? 
                <h1 style={ color ? 
                {color: color, backgroundColor: coloredBackground}
                : null }>
                This word of the day is: {word}</h1>
                : 
                <h1>Number is: {word}</h1>
            }
        </div>
    )
};

export default Main;