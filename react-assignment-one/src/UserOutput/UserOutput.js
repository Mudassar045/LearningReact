import React from 'react'
import './UserOutput.css'
const UserOutput = (props) => {
    return(
    <div className="UserOutput">
        <p>{props.msg}</p>
    </div>
    )
}

export default UserOutput

