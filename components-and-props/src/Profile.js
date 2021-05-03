import React from 'react'
import Picture from './Picture';
import Detail from './Detail';

export default function Profile(props) {
    console.log(props);
    return (
        <div>
            <h1>Profile</h1>
            <Picture imageUrl={props.picture} />
            <Detail name={props.name} email={props.email} />
        </div>
    )
}
