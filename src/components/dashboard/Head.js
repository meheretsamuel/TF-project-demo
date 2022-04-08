import React from 'react'

function Head(props) {
    return (
        <div>
            <h1>Welcome <span style={{color:'#E9690F'}}> {props.user && props.user.client.name} </span> </h1>
        </div>
    )
}

export default Head;
