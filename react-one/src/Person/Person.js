import React from 'react'

const person = (props) => {
    return(
        <div>
            {/* accessing dynamic attributes */}
            <h3> Hello, I'm {props.name} and my {props.age} years old</h3>
            {/* working with props */}
            <p>{props.children}</p>
            <p>{props.parent}</p>
        </div>        
    ) 
};

// to export the change
export default person;