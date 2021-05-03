import React from 'react'

export default function Detail(props) {
    console.log(props.name, props.email);
    return (
        <div>
            <h1>Details</h1>
            <h4>Name: {props.name}</h4>
            <h4>Email: {props.email}</h4>
        </div>
    )
}
