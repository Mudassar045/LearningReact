import React, { Component } from 'react'
const style = {
    border: "2px solid black",
    color: "red",
}
const UserInput = (props) => {
    return( 
        <input style={style}
            type="text" 
            onChange={props.changed} 
            placeholder="Enter something here" 
            value={props.currentUsername}
        />
    )
}
export default UserInput